const passport = require('passport');
const { ExtractJwt, Strategy } = require('passport-jwt');

const User = require('../model/user.model');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'AWGIIAHWIHDIHAW',
};

passport.use(
  new Strategy(opts, async (jwtPayload, done) => {
    try {
      console.log('JWT Payload:', jwtPayload);
      // Replace this with your actual user lookup logic
     const user = await User.findById(jwtPayload.id); // Assuming jwtPayload contains the user ID
     if(!user) {
        return done(null, false , "User not found"); // User not found
      }
      const f_user = user.toObject();
     delete f_user.password; // Remove password from user object
      return done(null, f_user, "User found"); // Use payload for now
    } catch (err) {
      console.error('JWT Strategy error:', err);
      return done(err, false);
    }
  })
);

module.exports = passport;
