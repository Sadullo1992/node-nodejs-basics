import fs from "fs/promises";
import { existsSync } from "fs";

const remove = async () => {
  const removedFilePath = "./src/fs/files/fileToRemove.txt";
    
    try {
        if (!existsSync(removedFilePath)) throw new Error("FS operation failed");
        fs.unlink(removedFilePath);
    } catch (err) {
        console.log(err);
    }  
};

await remove();
