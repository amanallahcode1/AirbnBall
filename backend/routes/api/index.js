// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotRouter = require('./spots.js');
const bookingRouter = require('./bookings.js')
const reviewsRouter = require('./reviews')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/search', spotRouter)

router.use('/bookings', bookingRouter )

router.use('/reviews', reviewsRouter)

module.exports = router;



















// const router = require('express').Router();
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');




// // GET /api/set-token-cookie
// // Testing User Auth Middleware
// /// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
// });
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');


// // This is all testing until you find the * comment:

// /*
// Go to http://localhost:5000/api/set-token-cookie and see if there is a token cookie 
// set in your browser's dev tools. If there isn't, then check your backend server logs in your 
// terminal where you ran npm start and the syntax of your 
// setTokenCookie function and the test route.
// */


// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//       where: {
//         fullName: 'Stephen Curry'
//       },
//     })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));



// // GET /api/restore-user
// /*
// Go to http://localhost:5000/api/restore-user and see if the response has the demo 
// user information returned as JSON. Then, 
// remove the token cookie manually in your browser's 
// dev tools and refresh. The JSON response should be empty.
// */
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );


// // GET /api/require-auth
// /*
// Go to http://localhost:5000/api/require-auth and see if the response has the demo 
// user information returned as JSON. Then, remove the token cookie manually in your 
// browser's dev tools and refresh. The JSON response 
// should now be an "Unauthorized" error.
// */
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// // *

module.exports = router;