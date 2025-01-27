import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique: true,
        trim: true
    },
    date:{
        type:Date,
        default:Date.now(),
    }
},{timestamps:true})

const EmailModel = mongoose.models.email || mongoose.model("email", emailSchema);
export default EmailModel