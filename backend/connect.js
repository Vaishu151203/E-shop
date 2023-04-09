const mongoose=require('mongoose')

function connect(){
    mongoose.set('strictQuery',true)
    mongoose.connect('mongodb+srv://Madhu:Madhu1234@cluster0.aqsuj1d.mongodb.net/auth?retryWrites=true&w=majority').then(()=>console.log('connect to database')).catch((error)=>console.log(error))
}
module.exports=connect