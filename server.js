const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// invocando al models
const db = require("./models");
// modo produccion
db.sequelize.sync();

// mode development
/*db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});
*/
var corsOptions = {
    origin : "https://localhost:4200"
};

app.use(cors(corsOptions));

// parse request of content type - application/json
app.use(bodyParser.json());

//parse request of content type -application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message : "welcome to the DajDev Application." });
});

require("./routes/tutorial.routes")(app);

// set port, listen for request
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
