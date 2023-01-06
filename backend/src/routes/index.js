import express from "express";
import locais from "./localRoutes.js";
import usuarios from "./usuarioRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "..."})
    })

    app.use(
        express.json(),
        locais,
        usuarios
    )
}

export default routes;