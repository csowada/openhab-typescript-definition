const fs = require('fs');
const path = require('path');

console.log("Start index.d.ts generation process ...")

// List all files in a directory in Node.js recursively in a synchronous fashion
const walkSync = (dir, filelist = []) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const dirFile = path.join(dir, file);
        const dirent = fs.statSync(dirFile);
        if (dirent.isDirectory()) {
            filelist.push(...walkSync(dirFile, dir.files));
        } else {
            if(dirFile.startsWith("typings") && dirFile.endsWith(".d.ts")) {
                filelist.push(dirFile)
            }
        }
    }
    return filelist;
};

let list = [];
walkSync(".", list);

var stream = fs.createWriteStream("index.d.ts");
stream.once('open', function (fd) {

    list.forEach((entry) => {
        stream.write(`/// <reference path="./${entry.replace(/\\/g, "/")}" />`);
        stream.write("\n");
    })

    stream.end();
});

console.log(`Finished, added ${list.length} files ...`)