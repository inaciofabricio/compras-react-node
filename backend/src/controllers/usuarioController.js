import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import moment from "moment";
import md5 from "md5";
import asyncHandler from "express-async-handler";
import Usuario from "../models/usuarioModel.js";

export const registro = asyncHandler(async(req, res) => {
    
    const { nome, email, senha, funcao } = req.body;

    let erro = [];

    if(!nome) {
        erro.push({
            erro: "Por favor informe o Nome"
        });
    }

    if(!email) {
        erro.push({
            erro: "Por favor informe o Email"
        });
    }

    if(!senha) {
        erro.push({
            erro: "Por favor informe a Senha"
        });
    }

    if(!funcao) {
        erro.push({
            erro: "Por favor informe a Função"
        });
    }

    if(erro.length > 0) {
        
        res.status(400)
            .json({ 
                status: 400, 
                mensagem: erro 
            });

        return;
    }
    
    const usuarioExists = await Usuario.findOne({email});

    if(usuarioExists){
        res.status(400)
            .json({ 
                status: 400, 
                mensagem: "Usuário já existe!" 
            });

        return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(senha, salt);

    const usuario = await Usuario.create({
        nome, 
        email, 
        senha: hashedPassword, 
        funcao, 
        confirmado: "confirmado"
    });

    if(usuario) {

        res.status(201).json({
            _id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            funcao: usuario.funcao,
            token: generateToken(usuario._id)
        }); 

    } else {

        res.status(404)
            .json({ 
                status: 404, 
                mensagem: "Dados de usuário inválidos" 
            });

        return;        
    }
    
})

export const novoUsuario = asyncHandler(async(req, res) => {
    
    const { nome, email, senha, confirmarSenha } = req.body;

    let erro = [];

    if(!nome) {
        erro.push({
            erro: "Por favor informe o Nome"
        });
    }

    if(!email) {
        erro.push({
            erro: "Por favor informe o Email"
        });
    }

    if(!senha) {
        erro.push({
            erro: "Por favor informe a Senha"
        });
    }

    if(!confirmarSenha) {
        erro.push({
            erro: "Por favor informe o ConfirmarSenha"
        });
    }

    if(senha !== confirmarSenha) {
        erro.push({
            erro: "O ConfirmarSenha não pode ser diferente da Senha"
        });
    }

    if(erro.length > 0) {
        
        res.status(400)
            .json({ 
                status: 400, 
                mensagem: erro 
            });

        return;
    }
    
    const usuarioExists = await Usuario.findOne({email});

    if(usuarioExists){
        res.status(400)
            .json({ 
                status: 400, 
                mensagem: "Usuário já existe!" 
            });

        return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(senha, salt);
    const hashedlink = await md5(email, salt);

    const usuario = await Usuario.create({
        nome, 
        email, 
        senha: hashedPassword, 
        funcao: "user",
        confirmado: hashedlink
    });

    if(usuario) {

        res.status(200)
            .json({ 
                status: 200, 
                data: {
                    _id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email
                }
            }); 


        // Enviar um email de confirmação

        const client = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.SENHA
            }
        });

        const link = `${ process.env.BASE_URL }/confirmar-cadastro/${ hashedlink }`;

        client.sendMail(
            {
                from: "Controle de Gastos",
                to: usuario.email,
                subject: "Confirmação de cadastro de novo usuário",
                html: `<h1>Link para confirmação do novo cadastro</h1>
                <br/>
                <a href='${link}'>Confirmar cadastro</a>`
            }
        )

    } else {

        res.status(404)
            .json({ 
                status: 404, 
                mensagem: "Dados de usuário inválidos" 
            });

        return;        
    }
    
})

export const esqueceuSenha = asyncHandler(async(req, res) => {
    
    const { email } = req.body;

    let erro = [];

    if(!email) {
        erro.push({
            erro: "Por favor informe o Email"
        });
    }

    if(erro.length > 0) {
        
        res.status(400)
            .json({ 
                status: 400, 
                mensagem: erro 
            });

        return;
    }
    
    const usuario = await Usuario.findOne({email});

    if(!usuario){
        res.status(404)
            .json({ 
                status: 404, 
                mensagem: "Email não existe!" 
            });

        return;
    }

    res.status(200)
        .json({ 
            status: 200,
            data: {
                mensagem: `O link para resetar senha foi enviado para o email informado.`  
            } 
        });
    
})

export const confirmarCadastro = asyncHandler (async (req, res) => {

    const hash = req.params.hash;

    const usuario = await Usuario.findOne({confirmado: hash});

    if(!usuario) {
        res.status(400).send("Não foi possível confirmar o email, verificar o link.");
        return;
    }

    await Usuario.findByIdAndUpdate(
        usuario._id, 
        { confirmado: "confirmado" }, 
        {
            new: true
        }
    );
    
    res.status(200).send("Email confirmado!");

})

export const login = asyncHandler(async(req, res) => {
    
    const { email, senha } = req.body;
    
    let erro = [];

    if(!email) {
        erro.push({
            erro: "Por favor informe o Email"
        });
    }

    if(!senha) {
        erro.push({
            erro: "Por favor informe a Senha"
        });
    }

    if(erro.length > 0) {
        
        res.status(400)
            .json({ 
                status: 400, 
                erros: erro 
            });

        return;
    }

    const usuario = await Usuario.findOne({email});

    if(usuario && (await bcrypt.compare( senha, usuario.senha ))) {
        
        res.json({
            status: 200,
            data: {
                _id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                token: generateToken(usuario._id)
            }        
        });

    } else {

        res.status(404)
            .json({ 
                status: 404, 
                mensagem: "Email ou Senha inválidos" 
            });

        return;
    }

})

export const getMe = asyncHandler(async(req, res) => {
    res.status(200).json(req.usuario);
})

export const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
}
