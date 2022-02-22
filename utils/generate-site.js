const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
    //if there's an error, reject the promise and send the error to the promises .catch() method
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                //return out of the function here 
                return;
            }
            //if everything went well, reolve the promise and send the succues 
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true, 
                message: 'Stylesheet Created!'
            });
        });
    });
    
}

module.exports = { writeFile, copyFile
};