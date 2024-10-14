import fs from "fs/promises";
import fsn from "fs";
import path from "path";

// console.log(fs)

const basepath = "F:\\Shreyas\\Programming\\Sigma Web Development Course\\Video91";
let files = await fs.readdir(basepath);

// console.log(files);
let extensions = [];
for (const items of files) {
    let ext = items.split(".")[items.split(".").length - 1];
    // console.log(ext);
    if (ext != "js" && ext != "json" && items.split(".").length > 1) {
        if (fsn.existsSync(path.join(basepath, ext))) {

            fs.rename(path.join(basepath, items), path.join(basepath, ext, items));
            
        }
        else {
            fs.mkdir(ext);
            fs.rename(path.join(basepath, items), path.join(basepath, ext, items));
        }
    }
}