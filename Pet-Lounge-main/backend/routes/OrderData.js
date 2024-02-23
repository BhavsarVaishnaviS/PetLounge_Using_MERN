//Routes---OrderData.js
const express=require('express')
const router=express.Router()
const Order=require('../models/Orders')

router.post('/orderData',async(req,res)=>{
    let data=req.body.order_data
    console.log(data);
    await data.splice(0,0,{Order_date:req.body.order_date})
    //if email not existing in db then create:else: InsertMany()
    let eId=await Order.findOne({useremail:req.body.useremail})
    console.log(eId)
    if(eId===null){
        try{
            await Order.create({
             useremail:req.body.useremail,
             order_data:[data]
             }).then(()=>{res.json({success:true})
            })
     
       }catch(error){
         console.log(error.message);
         res.send("Server Error",error.message)
       }
    }
    else{
        try{
            await Order.findOneAndUpdate({useremail:req.body.useremail},
                 {$push:{order_data:data}}).then(()=>{
                    res.json({success:true})
            })


         }catch(error){
            res.send("Server Error",error.message)
         }
    }

})

// router.post('/myOrderData',async(req,res)=>{
//      try{
//          let myData=await Order.findOne({'useremail':req.body.useremail})
//          res.json({orderData:myData})
 
//       }catch(error){
//          res.send("Server Error",error.message)

//       }


// })

module.exports=router;