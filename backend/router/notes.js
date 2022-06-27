const express=require('express')

const router = express.Router();

router.get('/',(req,res)=>{
    let obj={
        a: 'skand sisodia',
        email:'xyz.gmail.com'
    }
    res.json(obj);
})


module.exports= router
