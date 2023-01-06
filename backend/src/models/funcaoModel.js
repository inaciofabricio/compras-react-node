import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    nome: { 
        type:String, 
        required: [true, "Por favor informe o nome"], 
        unique:true 
    }
},{
    timestamps: true
});

export default mongoose.model("Funcao", userSchema);