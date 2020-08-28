const router = require('express').Router();
const passport = require('passport');
const { Trader } = require('../../model');

passport.serializeUser((trader, done) => {
    try {
        done(null, trader.id);
    } catch (err) {
        done(err);
    }
});

passport.deserializeUser(async (id, done) => {
    try {
        const trader = await Trader.findByPk(id);
        done(null, trader);
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
        const foundTrader = await Trader.findOne({
            where: {
                username: req.body.username,
            },
            defaults: {
                password: req.body.password,
            },
            attributes: { include: ['password_digest'] },
        });

        if (!foundTrader) {
            return res.sendStatus(401);
        }

        const isAuthorized = await foundTrader.authenticate(req.body.password)
        if (!isAuthorized) {
            return res.sendStatus(401);
        } else {
            return req.logIn(foundTrader, (err) => {
                if (err) {
                    return next(err);
                }
                return res.send(foundTrader.toJson());
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
    const createdTrader = await Trader.create(req.body);
    return req.logIn(createdTrader, (err) => {
        if (err) {
            return next(err);
        }
        return res.send(createdTrader.toJson());
    });
});

module.exports = router;
