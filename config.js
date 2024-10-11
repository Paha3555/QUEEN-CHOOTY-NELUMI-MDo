const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "tZBzXSKY#RcpNZ-6lSHfJv_LDFn7uaX93LXo9Qs6uMZWsC7rP6qo",
MONGODB: process.env.MONGODB || "mongodb://mongo:HtZTZEYJvqfbOwHfTarmahlqKWzIxteZ@autorack.proxy.rlwy.net:31989",
ALIVE_IMG: process.env.ALIVE_IMG || "https://8030.us.kg/file/zOm4HoO6YnQR.jpg",
AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
AUTO_BIO:"true",
AUTO_VOICE:"true"
};
