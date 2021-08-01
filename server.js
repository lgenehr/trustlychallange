const express = require('express');
const cors = require('cors');
const request = require('request-promise');
const SetWorldTime = require('./application/use_cases/SetWorldTime');
const app = express();


app.use(cors());
app.use(express.json());

app.listen(8080, () => {
  console.log("Application started and Listening on port 8080");
});


app.get("/worldtime", (req, res) => {
    getWorldClockTime(req,res);
});

function getWorldClockTime(req,res) {
    
    let result = "";

    var options = {
        uri: 'http://worldclockapi.com/api/json/utc/now',
        json: true,
    };

    request(options)
        .then(parsedBody => {
            worldTime = SetWorldTime.SetTimeResponse(parsedBody);
            result = SetWorldTime.SetHtml(worldTime);
            console.log(result);
            res.send( result );
        })
        .catch(err => {
            res.status(500).send({'Error': err});
        });
}

