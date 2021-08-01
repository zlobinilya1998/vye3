const express = require("express");
const cors = require("cors");

const app = express();
const router = express.Router();

const port = 3000;
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello from App");
});

start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server has been started on port:${port}`);
        });
    } catch (e) {
        console.log(`Error:${e}`);
    }
};

start();

module.exports = router;
