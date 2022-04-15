const express = require("express");
var request = require("request");
var cheerio = require("cheerio");
const app = express();
const port = 5000;




app.get("/",(req,res) => res.send("Hello World!"));

app.get("/cssBattle", (req,res) => {
    request(
        "https://us-central1-cssbattleapp.cloudfunctions.net/getRank?token=&userId=7sdpfPriz1WDaHSZvewZveli5jn2",
        function(error, response, body) {
            if(!error && response.statusCode == 200) {
                
                var parsedBody = JSON.parse(body);
                console.log(parsedBody);
                res.send({parsedBody});
            }
        }
    )
})

app.get("/salesforce", (req,res) => {
   
    request(
        "https://google.com",
        function(error, response, body) {
            if(!error && response.statusCode == 200) {
                console.log(body);
                res.send({body});
            }
        }
    )

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));