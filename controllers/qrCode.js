const qr = require('qr-image');

const getQrCode = async (ctx, next) => {
    let code = ctx.request.body.code || '';
    console.log(ctx.request.body);
    console.log(code)
    let qr_png = qr.image(code, { type: 'png' });
    qr_png.pipe(require('fs').createWriteStream(`codePng.png`));

    var svg_string = qr.imageSync(code, { type: 'png' });
    // console.log(log);
    // var temp_qrcode = qr.image('{name: "RenXiangyu"}', { type: 'png' });
    // temp_qrcode.pipe(ctx);
    // console.log()
    ctx.response.type = 'image/png';
    ctx.response.body = svg_string;
}

module.exports = {
    'POST /callTheRoll/getQrCode': getQrCode
}