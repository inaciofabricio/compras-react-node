import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    local_id: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: "Local"
    },
    finalizada: { 
        type: Boolean, 
        required: [true, "Por favor se a compra foi finalizada"]
    }
},{
    timestamps: true
});

export default mongoose.model("Compra", userSchema);