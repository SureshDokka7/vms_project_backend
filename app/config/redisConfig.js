const dotenvConfig = require("dotenv");
dotenvConfig.config();
const Redis = require("ioredis");

const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
//   password: process.env.REDIS_PASSWORD || undefined, // Set if using a password using 
  retryStrategy: (times) => Math.min(times * 50, 2000), // Reconnect strategy
});

redisClient.on("connect", () => {
  console.log("Redis connected successfully!");
});

redisClient.on("error", (error) => {
  console.error("Redis error:", error);
});

module.exports = redisClient;
