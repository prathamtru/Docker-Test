import Redis from 'ioredis';

// Create a Redis client and export it
const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',  // Set this to the Redis container hostname if using Docker
  port: process.env.REDIS_PORT || 6379,        // Default Redis port
  password: process.env.REDIS_PASSWORD || '',  // Redis password if required
});

export default redis;