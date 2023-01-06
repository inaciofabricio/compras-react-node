import mongoose from "mongoose";

const localSchema = mongoose.Schema({
    nome: { 
        type: String, 
        required: [true, "Por favor informe o nome"], 
        unique:true 
    },
    descricao: { 
        type:String,
        default: "" 
    },
    usuario_id: {
        type: mongoose.Schema.Types.ObjectId, 
        required: [true, "Por favor o identificador do usuario"], 
        ref: "Usuario"
    },
},{
    timestamps: true
});

export default mongoose.model("Locais", localSchema);