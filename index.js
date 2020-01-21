let express = require("express");
let app = express();
let mongoose = require("mongoose");
let user = require("./routes/user");
let port = process.env.PORT || 4600
app.use(express.json());

mongoose
    .connect("mongodb://localhost/UDH", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`connected to db`))
    .catch(error => console.log(`something went wrong ${error.message}`));
app.listen(port, () => console.log(`connected to port`));

app.use("/api", user);