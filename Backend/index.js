const express = require('express');
const app = express();
require('dotenv').config()
const { google } = require('googleapis');
var cors = require('cors')



const port = process.env.PORT || 5000

app.use(express.json());
app.use(cors())


const clientId = process.env.YOUR_CLIENT_ID
const clientSecret = process.env.YOUR_CLIENT_SECRET
const redirectUrl = process.env.YOUR_REDIRECT_URL
const refreshToken = process.env.REFRESH_TOKEN
// console.log(refreshToken)

const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUrl)
oAuth2Client.setCredentials({
    refresh_token: refreshToken
});


const gmail = google.gmail({
    version: 'v1',
    auth: oAuth2Client
});
// Encoding the message 
const encodeBase64 = (string) => {
    const buff = Buffer.from(string, 'utf-8');
    return buff.toString('base64');
}

app.post('/message', (req, res) => {
    const message = req.body
    // console.log(message)

    const textMessage = {
        auth: oAuth2Client,
        userId: 'me',
        resource: {
            raw: encodeBase64(
                `From:  <${message.email}>\r\n` +
                `To: <mojaermohi1@gmail.com>\r\n` +
                `Subject: feedback from ${message.email}\r\n` +
                `In-Reply-To: feedback email from portfolio\r\n` +
                `References: ${'not'}\r\n` +
                '\r\n' +
                `${message.message}`
            )
        }

    };
    gmail.users.messages.send(textMessage, (err,) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.send({ message: 'Thank you for your feedback' })

        }
    });
})

app.listen(port, () => {
    console.log('listening on port http://localhost:5000')
})
