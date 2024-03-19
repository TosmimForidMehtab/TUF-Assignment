import Redis from "ioredis";

export const redisSetUp = () => {
    try {
        const redis = new Redis(process.env.REDIS_URI, {
            tls: true,
        });
        console.log("Redis connected");
        return redis;
    } catch (error) {
        console.log(error);
    }
};

export const client = redisSetUp();
