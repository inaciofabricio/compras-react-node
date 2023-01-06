import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    codigo: { 
        type:String, 
        required: [true, "Por favor informe o código"], 
        unique:true 
    },
    nome: { 
        type:String, 
        required: [true, "Por favor informe o nome"] 
    },
    descricao: { 
        type:String 
    }
},{
    timestamps: true
});

export default mongoose.model("Produto", userSchema);