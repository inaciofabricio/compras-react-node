import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    compra_id: {
        type: mongoose.Schema.Types.ObjectId, 
        required: [true, "Por favor o identificador da compra"], 
        ref: "Compra"
    },
    produto_id: {
        type: mongoose.Schema.Types.ObjectId, 
        required: [true, "Por favor o identificador do produto"], 
        ref: "Produto"
    },
    valor_unitario: { 
        type: Number, 
        required: [true, "Por favor o valor unitário do item"]
    },
    quantidade: { 
        type: Number, 
        required: [true, "Por favor a quantidade do item"]
    },
    valorTotal: { 
        type: Number, 
        required: [true, "Por favor o valor total do item"]
    }
},{
    timestamps: true
});

export default mongoose.model("Item", userSchema);