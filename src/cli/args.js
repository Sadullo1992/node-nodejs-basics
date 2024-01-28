import { argv } from "process";

const parseArgs = () => {
  const [, , ...args] = argv;

  const formattedArgs = args
    .reduce(function (result, _, index, array) {
      if (index % 2 === 0) {
        const formattedPairs = formatter(array.slice(index, index + 2));
        result.push(formattedPairs);
      }
      return result;
    }, [])
    .join(", ");

  console.log(formattedArgs);
};

parseArgs();

function formatter(pairedArgs) {
  return pairedArgs.join(" is ").replace("--", "");
}
