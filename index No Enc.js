


const { registerFont, createCanvas , loadImage  } = require('canvas')
const fs = require('fs')
const out = fs.createWriteStream(__dirname + '/test.png')

registerFont('./src/font/Evogria.otf', { family: 'Evogria'})
const canvas = createCanvas(500, 282)
const ctx = canvas.getContext('2d')

loadImage('./King Amda-MD Welcome Canvas.jpg').then((image) => {
ctx.rotate(0.0)
ctx.drawImage(image, 0, 0, 500, 282)

})

loadImage(pp).then((image) => {
ctx.font = '22.5px Evogria'
ctx.fillStyle = '#fff'
ctx.fillText('Pasindu Samarasingha', 58, 155)
ctx.rotate(0.33)
ctx.drawImage(image, 350, -68, 146, 146)

const stream = canvas.createPNGStream()
stream.pipe(out)
out.on('finish', () =>  console.log('The PNG file was created.'))
})
