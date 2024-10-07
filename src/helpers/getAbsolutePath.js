import path from "node:path";
import { fileURLToPath } from "node:url";

export function getAbsolutePath(metaUrl) {
  const __dirname = path.dirname(fileURLToPath(metaUrl));

  return __dirname;
}
