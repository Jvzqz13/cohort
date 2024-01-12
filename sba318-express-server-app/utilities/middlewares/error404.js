const error404 = (req, res) => {
    res.status(404);
    res.json({ error: "Resource Not Found" });
}

module.exports = error404;