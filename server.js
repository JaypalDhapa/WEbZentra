const express = require("express");
const app = express();
const path = require("path");
const nodemailer = require("nodemailer");

// middleware

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/formdata", (req,res)=>{
    console.log(req.body);
    // res.status(200).end();



    // email logic 

    const transpotar = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"contact.webzentra@gmail.com",
            pass:"gjmb urte hgzo qxpk"
        },
    });


    const htmlTemplat = `
<div style="font-family: Arial, sans-serif; font-size:14px; color:#222; padding:10px;">
  <div style="max-width:600px; margin:0 auto; padding:15px; border:1px solid #ddd; border-radius:4px;">
    
    <h3 style="margin:0 0 10px 0; font-size:18px; font-weight:600;">
      New Contact Form Message
    </h3>

    <p style="margin:0 0 12px 0; color:#555;">
      You received a new message from your website.
    </p>

    <p style="margin:6px 0;"><strong>Name:</strong> ${req.body.name}</p>
    <p style="margin:6px 0;"><strong>Email:</strong> ${req.body.email}</p>
    <p style="margin:6px 0;"><strong>Phone:</strong> ${req.body.phone}</p>
    <p style="margin:6px 0;"><strong>Service:</strong> ${req.body.company}</p>
    <p style="margin:6px 0;"><strong>Message:</strong><br>${req.body.country}</p>
    <p style="margin:6px 0;"><strong>Message:</strong><br><br>${req.body.message}</p>

    <hr style="border:none; border-top:1px solid #eee; margin:15px 0;">

    <p style="font-size:12px; color:#999; margin:0;">
      This email was automatically generated.
    </p>

  </div>
</div>


`
    
    const mailOptions = {
        from:req.body.email,
        to:"contact.webzentra@gmail.com",
        subject:"New contact form submission",
        html:htmlTemplat
    };

    transpotar.sendMail(mailOptions, function (error,info){
        if(error){
            return res.json({
                success:false,
                message:"Email not send",
                error:error
            })
        }else{
            return res.json({
                success:true,
                message:"success"
            });
        }
    })

    
    // res.json({
    //     success:true,
    //     message:"Form submitted successfully !"
    // })

});

app.listen(3000);