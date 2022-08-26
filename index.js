var _0xdf78=["\x63\x61\x6E\x76\x61\x73","\x66\x73","\x65\x78\x70\x72\x65\x73\x73","\x70\x61\x74\x68","\x50\x4F\x52\x54","\x65\x6E\x76","\x2F\x61","\x6E\x61\x6D\x65","\x71\x75\x65\x72\x79","\x69\x6D\x61\x67\x65","\x66\x75\x63\x6B\x20\x6F\x66\x66","\x6A\x73\x6F\x6E","\x2E\x2F\x73\x72\x63\x2F\x66\x6F\x6E\x74\x2F\x45\x76\x6F\x67\x72\x69\x61\x2E\x6F\x74\x66","\x45\x76\x6F\x67\x72\x69\x61","\x32\x64","\x67\x65\x74\x43\x6F\x6E\x74\x65\x78\x74","\x72\x6F\x74\x61\x74\x65","\x64\x72\x61\x77\x49\x6D\x61\x67\x65","\x74\x68\x65\x6E","\x2E\x2F\x73\x72\x63\x2F\x69\x6D\x61\x67\x65\x2F\x4B\x69\x6E\x67\x20\x41\x6D\x64\x61\x2D\x4D\x44\x20\x57\x65\x6C\x63\x6F\x6D\x65\x20\x43\x61\x6E\x76\x61\x73\x2E\x6A\x70\x67","\x66\x6F\x6E\x74","\x32\x32\x2E\x35\x70\x78\x20\x45\x76\x6F\x67\x72\x69\x61","\x66\x69\x6C\x6C\x53\x74\x79\x6C\x65","\x23\x66\x66\x66","\x66\x69\x6C\x6C\x54\x65\x78\x74","\x63\x72\x65\x61\x74\x65\x50\x4E\x47\x53\x74\x72\x65\x61\x6D","\x2F\x6B\x69\x6E\x67\x61\x6D\x64\x61\x2E\x70\x6E\x67","\x63\x72\x65\x61\x74\x65\x57\x72\x69\x74\x65\x53\x74\x72\x65\x61\x6D","\x70\x69\x70\x65","\x6F\x6E","\x69\x6D\x61\x67\x65\x2F\x70\x6E\x67","\x73\x65\x74","\x73\x65\x6E\x64\x46\x69\x6C\x65","\x67\x65\x74","\x6C\x69\x73\x74\x65\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x6F\x63\x61\x6C\x68\x6F\x73\x74\x3A","","\x6C\x6F\x67"];const {registerFont,createCanvas,loadImage}=require(_0xdf78[0]);const fs=require(_0xdf78[1]);const express=require(_0xdf78[2]);const {dirname}=require(_0xdf78[3]);const PORT=process[_0xdf78[5]][_0xdf78[4]]|| 3000;const app=express();app[_0xdf78[33]](_0xdf78[6],async (_0x52aex5,_0x52aex6)=>{var _0x52aex7=_0x52aex5[_0xdf78[8]][_0xdf78[7]],_0x52aex8=_0x52aex5[_0xdf78[8]][_0xdf78[9]];if(!_0x52aex7||  !_0x52aex8){return _0x52aex6[_0xdf78[11]](_0xdf78[10])};registerFont(_0xdf78[12],{family:_0xdf78[13]});const _0x52aex9=createCanvas(500,282);const _0x52aexa=_0x52aex9[_0xdf78[15]](_0xdf78[14]);async function _0x52aexb(){ await loadImage(_0xdf78[19])[_0xdf78[18]]((_0x52aexc)=>{_0x52aexa[_0xdf78[16]](0.0);_0x52aexa[_0xdf78[17]](_0x52aexc,0,0,500,282)}); await loadImage(_0x52aex8)[_0xdf78[18]]((_0x52aexc)=>{_0x52aexa[_0xdf78[20]]= _0xdf78[21];_0x52aexa[_0xdf78[22]]= _0xdf78[23];_0x52aexa[_0xdf78[24]](_0x52aex7,58,155);_0x52aexa[_0xdf78[16]](0.33);_0x52aexa[_0xdf78[17]](_0x52aexc,350,-68,146,146);const _0x52aexd=_0x52aex9[_0xdf78[25]]();_0x52aexd[_0xdf78[28]](fs[_0xdf78[27]](__dirname+ _0xdf78[26]));fs[_0xdf78[27]](__dirname+ _0xdf78[26])[_0xdf78[29]]})}_0x52aexb(); await setTimeout(function(){_0x52aex6[_0xdf78[31]]({'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_0xdf78[30]});_0x52aex6[_0xdf78[32]](__dirname+ _0xdf78[26])},2000)});app[_0xdf78[34]](PORT);console[_0xdf78[37]](`${_0xdf78[35]}${PORT}${_0xdf78[36]}`)

// const { registerFont, createCanvas,loadImage  } = require('canvas')
// const fs = require('fs')

// const express = require('express');
// const {
//     dirname
// } = require('path');
// const PORT = process.env.PORT ||3000

// const app = express()

// app.get('/a', async (req, res) => {
//     var text = req.query.name,
//         pp = req.query.image

//     if (!text || !pp) return res.json('fuck off')

//     registerFont('./src/font/Evogria.otf', {
//         family: 'Evogria'
//     })
//     const canvas = createCanvas(500, 282)
//     const ctx = canvas.getContext('2d')

//     async function myDisplay() {
//         await loadImage('./src/image/King Amda-MD Welcome Canvas.jpg').then((image) => {
//             ctx.rotate(0.0)
//             ctx.drawImage(image, 0, 0, 500, 282)

//         })

//         await loadImage(pp).then((image) => {
//             ctx.font = '22.5px Evogria'
//             ctx.fillStyle = '#fff'
//             ctx.fillText(text, 58, 155)
//             ctx.rotate(0.33)
//             ctx.drawImage(image, 350, -68, 146, 146)

//             const stream = canvas.createPNGStream()
//             stream.pipe(fs.createWriteStream(__dirname + '/kingamda.png'))
//             fs.createWriteStream(__dirname + '/kingamda.png').on

//         })
//     }
//     myDisplay()

//     await setTimeout(function() { 
//         res.set({
//             'Content-Type': 'image/png'
//         })
//         res.sendFile(__dirname + '/kingamda.png')

//     }, 2000);

// })

// app.listen(PORT)
// console.log(`https://localhost:${PORT}`); 