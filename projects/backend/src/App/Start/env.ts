import { EnvType, load } from "ts-dotenv";

const schema = {
  NODE_ENV: {
    type: String,
    optional: false,
  },
  MONGO_HOST: {
    type: String,
    default: "localhost",
  },
  MONGO_PORT: {
    type: String,
    default: "27017",
  },
  MONGO_DATABASE: {
    type: String,
    default: "shameless",
  },
  MONGO_USERNAME: {
    type: String,
    optional: true,
  },
  MONGO_PASSWORD: {
    type: String,
    optional: true,
  },
} as const;

export type Env = EnvType<typeof schema>;
export let env: Env;

export function loadEnv(): void {
  env = load(schema);
}
