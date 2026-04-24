const imagekit = require('./imagekit'); // importing the connection
const fs = require('fs');

const uploadToImagekit = async (filePath, fileName) => {
    const fileBuffer = fs.readFileSync(filePath);
    
    const uploadResponse = await imagekit.upload({
        file: fileBuffer,
        fileName: fileName,
    });

    return uploadResponse.url;
};

module.exports = uploadToImagekit;