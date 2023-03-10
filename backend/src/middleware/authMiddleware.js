import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import Usuario from "../models/usuarioModel.js";

export const protect = asyncHandler(async (req, res, next) => {
    let token
    
    if(
        req.headers.authorization && 
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.usuario = await Usuario.findById(decoded.id).select("-senha");
            
            next();
        } catch (error) {

            res.status(401)
                .json({ 
                    status: 401, 
                    mensagem: "Not authorized" 
                });

            return; 
        }
    }

    if(!token) {
        res.status(401)
            .json({ 
                status: 401, 
                mensagem: "Not authorized, no token" 
            });

        return; 
    }
})
