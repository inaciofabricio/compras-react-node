import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    nome: {
        type: String, 
        required: [true, "Por favor informar o nome"]
    },
    email: {
        type: String, 
        required: [true, "Por favor informar o email"], 
        unique:true
    },
    senha: {
        type:String, 
        required: [true, "Por favor informar a senha"]
    },
    funcao: {
        type: String, 
        required: [true, "Por favor informar a Função"]
    },
    confirmado: {
        type: String, 
        required: [true, "Por favor informar a Confirmado"],
        default: ""
    }
},{
    timestamps: true
});

export default mongoose.model("Usuarios", userSchema);