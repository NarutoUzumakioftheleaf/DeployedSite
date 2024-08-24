const mongoose=require("mongoose")
const {Schema}=mongoose;
const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
module.exports=mongoose.model("User",UserSchema)
//model ki help se hum log crud operations kr skte h mongodb pe with the help of mongoose so model is kind of wrapper of schema