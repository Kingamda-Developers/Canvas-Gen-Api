const { registerFont, createCanvas,loadImage  } = require('canvas')
const imgbbUploader = require("imgbb-uploader");
const fs = require('fs')

const express = require('express');
const {
    dirname
} = require('path');
const PORT = process.env.PORT ||3000

const app = express()

app.get('/a', async (req, res) => {
    var text = req.query.name,
        pp = req.query.image

    if (!text || !pp) return res.json({error:'query missing'})

    registerFont('./src/font/Evogria.otf', {
        family: 'Evogria'
    })
    const canvas = createCanvas(500, 282)
    const ctx = canvas.getContext('2d')

    async function myDisplay() {
        await loadImage('./src/image/King Amda-MD Welcome Canvas.jpg').then((image) => {
            ctx.rotate(0.0)
            ctx.drawImage(image, 0, 0, 500, 282)

        })

        await loadImage(pp).then((image) => {
            ctx.font = '22.5px Evogria'
            ctx.fillStyle = '#fff'
            ctx.fillText(text, 58, 155)
            ctx.rotate(0.33)
            ctx.drawImage(image, 350, -68, 146, 146)

            const stream = canvas.createPNGStream()
            stream.pipe(fs.createWriteStream(__dirname + '/kingamda.png'))
            fs.createWriteStream(__dirname + '/kingamda.png').on
          
        })
    }
    myDisplay()

    const options = {
     apiKey: "6d2d077c0862b55808879da1263c9b3b", // MANDATORY 
     imagePath: "./kingamda.png",
     name: text,   
     expiration: 60 ,
     // base64string: canvas.toDataURL()
   };
   setTimeout(function() { 
        imgbbUploader(options)
            .then((response) => res.json(
                {result:{
                    Developed_By:'<./King Amda Developers.>',
                    author:'Pasindu Samarasingha',
                    img_data:{
                            id: response.id,
                            title: response.title,
                            url: response.url,
                            img_expiration: options.expiration +' seconds'
                    }
                }
            }
            ))
            .catch((error) => console.error(error));
        
    }, 1000);

})

app.listen(PORT)
console.log(`https://localhost:${PORT}`); 
