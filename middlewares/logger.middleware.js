const fs = require('fs');
const path = require('path');

const logger = (req, res, next) => {
    const logMessage = `${new Date().toISOString()} - ${req.method} ${req.url} - ${req.ip}\n`;
    const logFilePath = path.join(__dirname, '../log.txt');

    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error('Failed to write to log file:', err);
        }
    });

    console.log(logMessage.trim()); 
    next();
};

module.exports = logger;
