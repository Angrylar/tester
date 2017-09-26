const logger = require('../middlewares/log');

const getList = async (ctx, next) => {
    // console.log(log);
    ctx.rest({
        code: 'SUCCESS',
        data: ['邢悦', '任翔宇', '张文瑶', '金鑫'],
        msg: '成功'
    });
}

module.exports = {
    'GET /callTheRoll/getList': getList
}


