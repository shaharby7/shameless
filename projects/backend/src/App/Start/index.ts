import { loadEnv, env } from "./env";
loadEnv();

console.log(env.NODE_ENV);
