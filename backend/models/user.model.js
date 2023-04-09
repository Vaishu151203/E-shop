const mongoose=require ('mongoose')
const userSchema=mongoose.Schema({
    email: String,
    password: String,
    username:String,
})
const User =mongoose.model('user',userSchema)
module.exports=User