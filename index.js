var express = require('express');
const mailgun = require("mailgun-js");
const DOMAIN = "sandbox6454f713c37b40a7b5a9a79087c6dee1.mailgun.org";
const mg = mailgun({apiKey: "10bc2e6ba7df0aa664f3626f1b39c53d-3e51f8d2-a3be42ba", domain: DOMAIN});
const PORT = 3000;
const app = express();

app.get('/api/send/email', (req, res) =>{

    const data = {
        from: "Hello i'm  <jasneljuillet4@gmail.com>",
        to: "jasneljuillet1995@gmail.com",
        subject: "text send email with mailgun",
        text: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    };
    mg.messages().send(data, function (err, body) {
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

// var Mailgun = require('mailgun-js');
// var api_key = '3e51f8d2-a3be42ba';
// var domain = 'jasneljuillet1995@gmail.com';
// const PORT = 3000;
// const app = express();

// app.get('/api/:email', (req, res) =>{

//     var mailgun = new Mailgun({apiKey: api_key, domain: domain});

//     const data = {
//         from: 'jasneljuillet4@gmail.com',
//         to: 'jasneljuillet1995@gmail.com',
//         subject: 'text send email with mailgun',
//         text: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod "

//     };
//     mailgun.messages().send( data, (err, body) =>{
//         if(err){
//             res.json({
//                 Error: 'Faild to send email'
//             });
//         }
//         res.json({
//             send: 'email send'
//         })
//     });

// });

