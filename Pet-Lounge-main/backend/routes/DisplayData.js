const express=require('express')
const router=express.Router()
router.post('/petData',(req,res)=>{
    try{
        console.log(global.petDetails)
         res.send([global.petDetails,global.petCategory])
     
    }catch(error){
         console.log(error.message);
         res.send("Server Error")
    }

})
module.exports = router;