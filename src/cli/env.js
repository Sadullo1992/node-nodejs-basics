import { env } from "node:process";

const parseEnv = () => {
  const envs = Object.entries(env)
    .filter(([key, _]) => key.startsWith("RSS_"))
    .map((item) => item.join("="))
    .join("; ");

  console.log(envs);
};

parseEnv();
