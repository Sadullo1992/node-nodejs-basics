import { env } from "process";

const parseEnv = () => {

  const envs = Object.entries(env)
    .filter(([arg, _]) => arg.startsWith("RSS_")).map(((item) => item.join('='))).join('; ');    

  console.log(envs);
};

parseEnv();
