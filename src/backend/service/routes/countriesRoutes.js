const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("I am the route to bring all the countries from the database");
})

router.get("/:code", (req, res) => {
    const { code } = req.params;
    res.send(`I am the route to bring all the countries in the database depending on the continent (${code})`)
})

router.post("/", (req, res) => {
    const body = req.body;
    res.json({ message: "I am the route to add a new country to the database", body })
})

module.exports = router