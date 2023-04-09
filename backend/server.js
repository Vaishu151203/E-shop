const express = require ('express')
const cors = require('cors');
const User=require('./models/user.model')
const connect=require('./connect')

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/login',async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username })
      if (!user){
        console.log({user});
        return res.status(404).json({message:'user not found'})
      }
      return res.status(200).json(user)
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  });

  app.post('/register',async(req,res)=>{
    try{
        const {name, email, password} = req.body
        console.log(req.body);
        const user= new User({username: name, email, password});
        await user.save();
        
        return res.status(200).json(user)
    }catch (error){
      console.log(error);
        res.status(500).json({error:error.message})
    }
  })

  app.listen(1234, () => {
    connect();
    console.log('Server started');
  });
