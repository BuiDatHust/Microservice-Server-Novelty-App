// import RedisClient from "@initializers/redis";
// import { RateLimiterRedis } from "rate-limiter-flexible";
// import Settings from "@configs/settings";
// import { sendError } from "@libs/response";
// import { SubmitCouponCodeFailedTooManyTimes } from "@libs/errors";

// const perform = (prefix) => {
//   return async (req, res, next) => {
//     let retrySecs = 0;
//     const accountKey = `${req.currentUser.id}`;
//     const rateLimiter = this.loadRateLimiter(prefix);
//     const [resByIp] = await Promise.all([rateLimiter.get(accountKey)]);
//     if (
//       resByIp &&
//       resByIp.consumedPoints > Settings.rateLimiterMaxConsumePoints
//     ) {
//       retrySecs = Math.round(resByIp.msBeforeNext / 1000) || 1;
//     }
//     if (retrySecs > 0) {
//       return sendError(res, 429, SubmitCouponCodeFailedTooManyTimes);
//     } else {
//       await Promise.all([rateLimiter.consume(accountKey)]);
//       next();
//     }
//   };
// };

// const loadRateLimiter = (prefix) => {
//   const limiter = new RateLimiterRedis({
//     storeClient: RedisClient,
//     keyPrefix: `RateLimiter:${prefix}:`,
//     points: Settings.rateLimiterMaxConsumePoints,
//     duration: Settings.resetConsumedPointsAfter,
//     blockDuration: 0,
//   });
//   return limiter;
// };

// module.exports = { perform, loadRateLimiter };
