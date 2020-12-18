const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.post("/mo_categories", async(req, res) => {
    try {
        const { nom } = req.body;
        const newCat = await pool.query(
            "INSERT INTO mo_categories (nom) VALUES($1) RETURNING *",
            [nom]
        );
        res.json(newCat.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.post("/mo_categories/:parentID", async(req, res) => {
    try {
        const { nom } = req.body;
        const { parentID } = req.params;
        const newCat = await pool.query(
            "INSERT INTO mo_categories (nom, parent_id) VALUES($1, $2) RETURNING *",
            [nom, parentID]
        );
        res.json(newCat.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/mo_categories", async(req, res) => {
    try {
        const all = await pool.query(
            "SELECT * FROM mo_categories ORDER BY id"
        );
        res.json(all.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/mo_categories/root", async(req, res) => {
    try {
        const root = await pool.query(
            "SELECT * FROM mo_categories WHERE parent_id IS NULL ORDER BY nom"
        );
        res.json(root.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/mo_categories/liste/:parentID", async(req, res) => {
    try {
        const { parentID } = req.params;
        const listChildren = await pool.query(
            "SELECT * FROM mo_categories WHERE parent_id = ($1) ORDER BY nom",
            [parentID]
        );
        res.json(listChildren.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete("/mo_categories/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteCat = await pool.query(
            "DELETE FROM mo_categories WHERE (id) = $1",
            [id]
        );
        res.json("Le micro-organisme a été supprimé");
    } catch (err) {
        console.error(err.message);
    }
});

//////////////////////////////////////////////////////////////////////

app.post("/microorganismes", async (req, res) => {
    try {
        const { nom } = req.body;
        const newMO = await pool.query(
            "INSERT INTO microorganismes (mo_nom) VALUES($1) RETURNING *",
            [nom]
        );
        res.json(newMO.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.post("/microorganismes/:route", async (req, res) => {
    try {
        const { route } = req.params;
        console.log(route);
        const { nom } = req.body;
        const newMO = await pool.query(
            "INSERT INTO microorganismes (mo_nom, mo_route) VALUES($1, $2) RETURNING *",
            [nom, route]
        );
        res.json(newMO.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/microorganismes", async (req, res) => {
    try {
        const allMO = await pool.query(
            "SELECT * FROM microorganismes"
        );
        res.json(allMO.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/microorganismes/:nom", async (req, res) => {
    try {
        const { nom } = req.params;
        const { carac } = req.body;
        const updateMO = await pool.query(
            "UPDATE microorganismes SET mo_carac = $1 WHERE mo_nom = $2",
            [carac, nom]
        );
        res.json("Le micro-organisme a été mis à jour !");
    } catch (err) {
        console.error(err.message);
    }
});

app.delete("/microorganismes/:nom", async (req, res) => {
    try {
        const { nom } = req.params;
        const deleteMO = await pool.query(
            "DELETE FROM microorganismes WHERE mo_nom = $1",
            [nom]
        );
        res.json("Le micro-organisme a été supprimé");
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});