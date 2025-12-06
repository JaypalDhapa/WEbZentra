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
    <p style="margin:6px 0;"><strong>Country:</strong>  <img src="${req.body.flag}">  ${req.body.country}</p>
    <p style="margin:6px 0;"><strong>Message:</strong><br><br>${req.body.message}</p>

    <hr style="border:none; border-top:1px solid #eee; margin:15px 0;">

    <p style="font-size:12px; color:#999; margin:0;">
      This email was automatically generated.
    </p>

  </div>
</div>
`

const autoReplyHtml = `
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; background-color:#f8fafc; padding: 20px;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff; border-radius:16px; overflow:hidden;">
        <!-- Header -->
        <tr>
          <td style="background-color:#f8fafc; padding:20px; text-align:left; font-size:24px; font-weight:bold; color:#2563eb;">
            Web<span style="color:#1e40af;">Zentra</span>
          </td>
        </tr>

        <!-- Content -->
        <tr>
          <td style="padding:30px; text-align:center;">
            <div style="display:inline-block; background-color:#dbeafe; color:#1e40af; font-weight:600; padding:5px 15px; border-radius:50px; font-size:14px; margin-bottom:15px;">WEEK LAUNCH OFFER</div>
            
            <h2 style="font-size:22px; color:#1e293b; margin-bottom:15px;">Launch Special: 50% OFF All Services</h2>
            
            <p style="color:#64748b; font-size:16px; margin-bottom:25px; line-height:1.5;">
              Hi ${req.body.name || "there"},<br><br>
              Thank you for contacting WebZentra! Celebrate our launch with an exclusive 50% discount on all software and web development services. Limited to the first week only for new clients.
            </p>

            <!-- Trust indicators with icons -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:25px;">
              <tr>
                <td align="center" style="font-size:0;">
                  <!-- Icon 1 -->
                  <div style="display:inline-block; text-align:center; width:120px;">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eo_circle_light-blue_checkmark.svg/1024px-Eo_circle_light-blue_checkmark.svg.png?20200417144731" width="24" height="24" style="display:block; margin:0 auto 5px;">
                    <span style="font-size:14px; color:#475569;">Premium Quality</span>
                  </div>

                  <!-- Icon 2 -->
                  <div style="display:inline-block; text-align:center; width:120px;">
                    <img src="https://images.all-free-download.com/images/graphiclarge/blue_background_clock_icon_vector_280580.jpg" width="24" height="24" style="display:block; margin:0 auto 5px;">
                    <span style="font-size:14px; color:#475569;">On-Time Delivery</span>
                  </div>

                  <!-- Icon 3 -->
                  <div style="display:inline-block; text-align:center; width:120px;">
                    <img src="https://cdn-icons-png.flaticon.com/512/7611/7611368.png" width="24" height="24" style="display:block; margin:0 auto 5px;">
                    <span style="font-size:14px; color:#475569;">24/7 Support</span>
                  </div>
                </td>
              </tr>
            </table>

            <a href="https://webzentra.com" style="display:inline-block; background-color:#2563eb; color:#ffffff; text-decoration:none; padding:12px 20px; font-weight:600; border-radius:10px; box-shadow:0 6px 12px rgba(37,99,235,0.25);">Claim Offer Now</a>

            <p style="margin-top:20px; font-size:14px; color:#64748b;">
              Offer expires in: <span style="color:#1e40af; font-weight:600;">7 days</span>
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color:#f8fafc; padding:15px; text-align:center; font-size:12px; color:#64748b;">
            No hidden fees. No long-term contracts. Cancel anytime.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`;

const mailOptions = {
  from: req.body.email,
  to: "contact.webzentra@gmail.com",
  subject: "New contact form submission",
  html: htmlTemplat
};

transpotar.sendMail(mailOptions, function (error, info) {
  if (error) {
      return res.json({
          success: false,
          message: "Email not sent",
          error: error
      });
  }

  // -----------------------------------
  // AUTO-REPLY EMAIL #1 (THANK YOU)
  // -----------------------------------
  const thankEmail = {
      from: "contact.webzentra@gmail.com",
      to: req.body.email,
      subject: "Thank you for contacting WebZentra!",
      html: `<p>Hi ${req.body.name || "there"},</p>
            <p>Thank you for reaching out. We will get back to you soon!</p>
            <p>- Webzentra Team</p>`
  };

  transpotar.sendMail(thankEmail, function (err1, info1) {
      if (err1) {
          console.log("Thank email error:", err1);
      }

      // -----------------------------------
      // AUTO-REPLY EMAIL #2 (SPECIAL OFFER)
      // -----------------------------------
      const offerEmail = {
          from: "contact.webzentra@gmail.com",
          to: req.body.email,
          subject: "🎁 Your Special Offer from WebZentra!",
          html: autoReplyHtml
      };

      transpotar.sendMail(offerEmail, function (err2, info2) {
          if (err2) {
              console.log("Offer email error:", err2);
          }

          // Response to frontend
          return res.json({
              success: true,
              message: "Emails sent successfully"
          });
      });
  });
});

    
    // res.json({
    //     success:true,
    //     message:"Form submitted successfully !"
    // })

});

app.listen(3000);