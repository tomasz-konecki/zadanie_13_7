var fs = require('fs'),
    colors = require('colors'),
    folders = [],
    files = [],
    dir = './folder_to_check',
    fileToWrite = './contents.txt';

fs.readdir(dir, (err, data) => {
    if (err) throw err;
    console.log(`\nContents of ${dir.substr(2).magenta}:\n`);

    data.forEach((item) => {
        if (item.includes('.')) {
            files.push(item);
        } else {
            folders.push(item);
        }
    });

    displayContents(folders, 'green');
    displayContents(files, 'cyan');
    saveToFile(folders.concat(files));

});

function saveToFile(dirContent) {

    console.log(`\nThere are ${folders.length} folders and ${files.length} files in directory: ${dir.substr(2).magenta}.`.yellow);

    fs.writeFile(fileToWrite, `Contents of '${dir}':\r\n`, (err) => {
        if (err) {
            throw err;
        } else {
            dirContent.forEach((item) => {
                fs.appendFile(fileToWrite, `${item}\r\n`, (err) => {
                    if (err) throw err;
                });
            });
        }
    });

    console.log(`\nContents saved to file '${fileToWrite.substr(2)}'`.red);

};

function displayContents (type, color) {
    type.forEach((item) => {
        console.log(item[color]);
    });
};