const fs = require('fs');
const path = require('path');

// Creating file
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) throw err;
//
//     console.log("Folder created");
// });

// FS WriteFile & AppendFile
const filePath = path.join(__dirname, 'test', 'text.txt');
// // fs.writeFile(filePath, 'Hello node', err => {
// //     if (err) throw err;
// //
// //     console.log("File created");
// //     fs.appendFile(filePath, '\nHello NodeJS', err => {
// //         if (err) throw err;
// //
// //         console.log("File created");
// //
// //     });
// // });

// FS Read
fs.readFile(filePath, 'utf-8',(err, content) => {
    if (err) throw err;

    // const data = Buffer.from(content);
    // console.log("Content: ", data.toString());

    console.log(content);
});
