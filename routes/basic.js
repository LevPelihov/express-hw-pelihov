const express = require("express")

const router = express.Router();

router.get("/", function(request, response){
    response.json({ massage: "OK"});
});

router.get("/status", function(request, response){
    response.json({
    status: "Server is running",
    timestamp: new Date(),
    uptime: process.uptime()
  });
});





module.exports = router