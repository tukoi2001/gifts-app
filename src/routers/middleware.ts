// import { RootRouter } from 'enums/app';

// export const guestMiddleWare = ({
//   currentUser,
//   isLoggedIn,
//   next,
// }: App.MiddlewareContext): void => {
//   if (isLoggedIn) {
//     if (currentUser && !currentUser.isActive) {
//       return next({ name: RootRouter.VERIFY_OTP });
//     }
//     return next({ name: RootRouter.HOME_PAGE });
//   }
//   return next();
// };

// export const authMiddleware = ({
//   currentUser,
//   isLoggedIn,
//   next,
// }: App.MiddlewareContext): void => {
//   if (isLoggedIn) {
//     if (currentUser && !currentUser.isActive) {
//       return next({ name: RootRouter.VERIFY_OTP });
//     }
//     return next();
//   }
//   return next({ name: RootRouter.SIGN_IN });
// };
