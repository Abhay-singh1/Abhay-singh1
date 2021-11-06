const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const cors = require('cors')

const app =express()
const CLIENT_ID ='1053453804933-sanrc6rt03f6jtp2m3l1dm9db6nlh4qa.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI ='https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04A2-bIgovcEzCgYIARAAGAQSNwF-L9IrrMSqTUTXKA0Eg_ZI3Nj6komKm6hTbEAK_omibVqxPHEKOu0jjirtpy-2yFYs5Y3bBSE' 

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.get('/api/forms', (req,res)=>{
    res.send('Hello worldu')
})
const accessToken = oAuth2Client.getAccessToken()
app.post('/aboutme/forms', (req,res)=>{
    let data = req.body;
    console.log('getting inside')

    let smtpTransport = nodemailer.createTransport({ 
        service:'gmail',
        auth:{
            type:'OAuth2',
            user:'abhaysi100@gmail.com',
            clientId:CLIENT_ID,
            clientSecret:CLIENT_SECRET,
            refreshToken:REFRESH_TOKEN,
            accessToken:accessToken
        },
        
    })


    let mailOptions = {
        from:data.email,
        to:'abhaysi100@gmail.com',
        subject:`Message from ${data.firstName, data.lastName}`,
        html:`
            <h3> Mail from your website</h3>
            <ul>
                <li>Name: ${data.firstName}</li>
                <li>Email: ${data.email}</li>
                <li>Message: ${data.message}</li>
            </ul>
        `
    }

    smtpTransport.sendMail(mailOptions)
    console.log('sent!!')
    smtpTransport.close();
})

const PORT = process.env.PORT || 3001;

if(process.env.NODE_ENV == "production"){
    app.use(express.static("portfolio/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,"portfolio", "build", "index.html"));
      })
}


app.listen(PORT, ()=>{
    console.log(`server listening at port ${PORT}`)
})