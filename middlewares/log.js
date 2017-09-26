const fs = require('fs');

const writeLog = function (type, state, log) {
    let writeLine = '';
    let typer = type || 'info'
    let selectObj = {
        info: 'Info',
        debug: 'Debug',
        warn: 'Warnning',
        error: 'Error'
    }
    writeLine = `${selectObj[type]}------\r\n${getTime()}\r\n------${state}\r\n------${log}\r\n`;
    console.log(writeLine);
    return fs.appendFile('./log/log.txt', writeLine, function (err) {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    });
    // fs.writeFile('log/log.txt', writeLine, function (err) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log('ok.');
    //     }
    // });
}

const getTime = () => {
    let currentTime = new Date();
    let year = currentTime.getFullYear();
    let month = currentTime.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`
    }
    let day = currentTime.getDate();
    if (day < 10) {
        day = `0${day}`;
    }
    let hour = currentTime.getHours();
    if (hour < 10) {
        hour = `0${hour}`;
    }
    let min = currentTime.getMinutes();
    if (min < 10) {
        min = `0${min}`;
    }
    let sec = currentTime.getSeconds();
    if (sec < 10) {
        sec = `0${sec}`;
    }
    let str = `${year}年${month}月${day}日-${hour}:${min}:${sec}`
    return str;
}

module.exports = (type, state, log) => {
    return writeLog(type, state, log);
};