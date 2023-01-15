const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const cors = require('cors')
const path = require('path');

const app =express()
// const CLIENT_ID =''
// const CLIENT_SECRET = ''
// const REDIRECT_URI =''
// const REFRESH_TOKEN = '' 

// const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
// oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(cors())

// app.get('/api/forms', (req,res)=>{
//     res.send('Hello worldu')
// })
// const accessToken = oAuth2Client.getAccessToken()
// app.post('/aboutme/forms', (req,res)=>{
//     let data = req.body;
//     console.log('getting inside')

//     let smtpTransport = nodemailer.createTransport({ 
//         service:'gmail',
//         auth:{
//             type:'OAuth2',
//             user:'abhaysi100@gmail.com',
//             clientId:CLIENT_ID,
//             clientSecret:CLIENT_SECRET,
//             refreshToken:REFRESH_TOKEN,
//             accessToken:accessToken
//         },
        
//     })


//     let mailOptions = {
//         from:data.email,
//         to:'abhaysi100@gmail.com',
//         subject:`Message from ${data.firstName, data.lastName}`,
//         html:`
//             <h3> Mail from your website</h3>
//             <ul>
//                 <li>Name: ${data.firstName}</li>
//                 <li>Email: ${data.email}</li>
//                 <li>Message: ${data.message}</li>
//             </ul>
//         `
//     }

//     smtpTransport.sendMail(mailOptions)
//     console.log('sent!!')
//     smtpTransport.close();
// })

const PORT =  5000;



   app.use(express.static("portfolio/build"));
    app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname,"portfolio/build", "index.html"));
            res.sendFile(path.join(__dirname, "./frontend/portfolio/public/index"),
                    function (err) {
                      if (err) {
                        res.send(err);
                      }
                    }
  );
      })



app.listen(PORT, ()=>{
    console.log(`server listening at port ${PORT}`)
})
