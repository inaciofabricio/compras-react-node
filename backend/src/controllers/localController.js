import asyncHandler from "express-async-handler";
import Local from "../models/localModel.js";
import { isObjectID } from "../utils/index.js";

export const getLocais = asyncHandler (async (req, res) => {

    const locais = await Local.find().select("-createdAt -updatedAt -__v");
    
    res.status(200).json({
        status: 200,
        data: locais        
    });
});

export const getLocal = asyncHandler (async (req, res) => {

    const id = req.params.id;

    if (isObjectID(id)) {
        res.status(422)
            .json({ 
                status: 422, 
                mensagem: "ID informado não conrresponde a um ObjectID" 
            });
        
        return
    } 

    const local = await Local.findById(id).select("-createdAt -updatedAt -__v");

    if(!local || local.length === 0) {
        
        res.status(404)
            .json({ 
                status: 404, 
                mensagem: "Local não encontrado" 
            });
        
        return
    } 
        
    res.status(200).json({
        status: 200,
        data: local        
    });    
});

export const setLocal = asyncHandler (async (req, res) => {

    const { nome, descricao } = req?.body; 
    
    let erros = [];

    if(!nome) {
        erros.push({
            erro: "Por favor informe o campo Nome"
        })
    }

    if(erros.length > 0) {
        
        res.status(400)
            .json({ 
                status: 400, 
                erros: erros
            });

        return;
    } 

    let localExiste = await Local.find({nome: nome});

    if(localExiste.length > 0) {
        
        res.status(400)
            .json({ 
                status: 400, 
                mensagem: "Local já existe!" 
            });

        return
    } 

    const localCriado = await Local.create({
        nome: nome,
        descricao: descricao
    });

    const local = await Local.findById(localCriado._id).select("-createdAt -updatedAt -__v");

    res.status(200).json({
        status: 200,
        data: local
    });      
});

export const updateLocal = asyncHandler (async (req, res) => {

    const id = req.params.id;

    if (isObjectID(id)) {
        res.status(422)
            .json({ 
                status: 422, 
                mensagem: "ID informado não conrresponde a um ObjectID" 
            });
        
        return
    } 

    const local = await Local.findById(id);

    if(!local) {
        res.status(404)
            .json({ 
                status: 404, 
                mensagem: "Local não encontrado" 
            });
        
        return
    }

    try {

        await Local.findByIdAndUpdate(
            id, 
            req.body, 
            {
                new: true
            }
        );

    } catch (error) {

        if(error.code === 11000) {
            res.status(400)
                .json({ 
                    status: 400, 
                    mensagem: "Já existe outro Local com o Nome informando"
                });
            
            return
        }

        res.status(500)
            .json({ 
                status: 500, 
                mensagem: "Internal Error Server",
                error: error
            });
        
        return
        
    }
    
    const localAtualizado = await Local.findById(id).select("-createdAt -updatedAt -__v");

    res.status(200).json({
        status: 200,
        data: localAtualizado
    });     
})

export const deleteLocal = asyncHandler (async (req, res) => {

    const id = req.params.id;

    if (isObjectID(id)) {
        res.status(422)
            .json({ 
                status: 422, 
                mensagem: "ID informado não conrresponde a um ObjectID" 
            });
        
        return
    } 

    const local = await Local.findById(id)

    if(!local) {
        res.status(404)
            .json({ 
                status: 404, 
                mensagem: "Local não encontrado" 
            });
        
        return
    }

    try {

        await local.remove();    

        res.status(200).json({
            status: 200,
            data: {id: id}
        });

    } catch (error) {

        res.status(500)
            .json({ 
                status: 500, 
                mensagem: "Internal Error Server",
                error: error
            });
        
        return
    }
});