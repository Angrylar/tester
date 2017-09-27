const qr = require('qr-image');

// Usage
// Example:

// var qr = require('qr-image');
// var qr_svg = qr.image('I love QR!', { type: 'svg' });
// qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });

// More examples
// qr = require('qr-image')
// Methods
// qr.image(text, [ec_level | options]) — Readable stream with image data;
// qr.imageSync(text, [ec_level | options]) — string with image data. (Buffer for png);
// qr.svgObject(text, [ec_level | options]) — object with SVG path and size;
// qr.matrix(text, [ec_level]) — 2D array.
// Options
// text — text to encode;
// ec_level — error correction level. One of L, M, Q, H. Default M.
// options — image options object:
//     ec_level — default M.
//     type — image type. Possible values png (default), svg, pdf and eps.
//     size (png and svg only) — size of one module in pixels. Default 5 for png and undefined for svg.
//     margin — white space around QR image in modules. Default 4 for png and 1 for others.
//     customize (only png) — function to customize qr bitmap before encoding to PNG.
//     parse_url (experimental, default false) — try to optimize QR-code for URLs.



const getQrCode = async (ctx, next) => {
    let code = ctx.request.query.code || '';
    let qr_png = qr.image(code, { type: 'png', ec_level: 'H', margin: 1 });
    qr_png.pipe(require('fs').createWriteStream(`codePng.png`));
    console.log(qr_png);
    var svg_string = qr.imageSync(code, { ec_level: 'H', type: 'png', margin: 1 });
    console.log(svg_string);

    let qrMatrix = qr.matrix(code, { ec_level: 'H' });
    console.log(qrMatrix);
    // console.log(log);
    // var temp_qrcode = qr.image('{name: "RenXiangyu"}', { type: 'png' });
    // temp_qrcode.pipe(ctx);
    // console.log()
    ctx.response.type = 'image/png';
    ctx.response.body = svg_string;
}

module.exports = {
    'GET /callTheRoll/getQrCode': getQrCode
}