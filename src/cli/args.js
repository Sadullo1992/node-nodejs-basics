import { argv } from "node:process";

const parseArgs = () => {
  const args = argv.slice(2);

  let str = "";
  for (let i = 0; i < args.length; i += 2) {
    str += `${args[i].slice(2)} is ${args[i + 1]}, `;
  }

  console.log(str.slice(0, -2));
};

parseArgs();
