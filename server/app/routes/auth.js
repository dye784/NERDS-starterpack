const router = require('express').Router();
const passport = require('passport');
const { User } = require('../../db');

passport.serializeUser((user, done) => {
    try {
        done(null, user.id);
    } catch (err) {
        done(err);
    }
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findByPk(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

// GET request to get self
router.get('/me', (req, res, next) => {
    res.send(req.user);
});

// POST request to login user
// If user exists, check password, if correct password login
router.post('/login', async (req, res, next) => {
    try {
        const foundUser = await User.findOne({
            where: {
                username: req.body.username,
            },
            defaults: {
                password: req.body.password,
            },
            attributes: { include: ['password_digest'] },
        });

        if (!foundUser) {
            return res.sendStatus(401);
        }

        const isAuthorized = await foundUser.authenticate(req.body.password)
        if (!isAuthorized) {
            return res.sendStatus(401);
        } else {
            return req.logIn(foundUser, (err) => {
                if (err) {
                    return next(err);
                }
                return res.send(foundUser.toJson());
            });
        }

    } catch (error) {
        next(error);
    }
});

// DELETE request to logout user
router.delete('/logout', (req, res, next) => {
    req.logOut();
    res.sendStatus(204);
});

// CREATE new user and log them in
router.post('/signup', async (req, res, next) => {
    try {
        const createdUser = await User.create(req.body);
        return req.logIn(createdUser, (err) => {
            if (err) {
                return next(err);
            }
            return res.send(createdUser.toJson());
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
