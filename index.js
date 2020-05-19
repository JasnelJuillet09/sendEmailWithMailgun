var express = require('express');
const mailgun = require("mailgun-js");
const DOMAIN = "";
const objectMailgun = mailgun({apiKey: "", domain: DOMAIN});
const PORT = 3000;
const app = express();

app.get('/api/send/email', (req, res) =>{

    const data = {
        from: "Hello i'm  <jasneljuillet4@gmail.com>",
        to: "jasneljuillet1995@gmail.com",
        subject: "text send email with mailgun",
        text: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    };
    objectMailgun.messages().send(data, function (err, body) {
      if(err){
          res.json({
              error: "message cannot be sent"
          });
      }else{
        res.json({
            send: "message sent successfully"
        });
      }
    });
});

app.listen(PORT,
    ()=> {
        console.log("Port "+PORT+" is ready");
    });
