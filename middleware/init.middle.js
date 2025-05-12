const passport = require('./passport.middleware');

const auth_middleware = (req, res, next) => {
    try {
       const  call_passport =  passport.authenticate('jwt', { session: false }, (err, user, info) => {
            if (err) {
                console.error('Authentication error:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }
            if (!user) {
                return res.status(401).json({ message: 'Unauthorized User' });
            }
            req.user = user;
            next();
        })(req, res, next);
    } catch (error) {
        console.error('Middleware error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = auth_middleware;