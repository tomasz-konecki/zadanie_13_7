var fs = require('fs'),
    colors = require('colors'),
    folders = [],
    files = [],
    dir = './folder_to_check';

fs.readdir(dir, function(err, data) {
    if (err) throw err;
    console.log(`\nContents of ${dir.substr(2).magenta}:\n`);
    
    data.forEach((item) => {
        if (item.includes('.')) {
            files.push(item);
        } else {
            folders.push(item);
        }
    });

    folders.forEach((item) => {
        console.log(item.cyan);
    });

    files.forEach((item) => {
        console.log(item.green);
    });

    console.log(`\nThere are ${folders.length} folders and ${files.length} files in directory: ${dir.substr(2).magenta}.`.yellow);
});