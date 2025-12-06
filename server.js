const express = require("express");
const app = express();
const path = require("path");

// middleware

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/formdata", (req,res)=>{
    console.log(req.body);
    // res.status(200).end();

    res.json({
        success:true,
        message:"Form submitted successfully !"
    })
});

app.listen(3000);