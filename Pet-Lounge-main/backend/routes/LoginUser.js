const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtSecret = "qwertyuioplkjhgfdsazxcvbnmqwerty"
router.post("/loginUser", [
    body('useremail').isEmail(),
    body('userpwd', 'Password Length should be greater than 5').isLength({ min: 5 })
],
    async (req, res) => {

        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ result: result.array() });
            //res.send({ errors: result.array() });

        }

        //res.send(`Hello, ${req.body.person}!`);
        let  email  = req.body.useremail;
        
       // console.log(typeof( email),typeof(req.body.useremail));
        try {
           let userData =  await User.findOne({useremail:email});
           //console.log(userData)
           if(!userData){
            return res.status(400).json({errors:"Invalid Email"});
           }
           const pwdCompare = await bcrypt.compare(req.body.userpwd,userData.userpwd)
           //if(req.body.userpwd !== userData.userpwd){
           console.log(pwdCompare)
           if(!pwdCompare){ 
           return res.status(400).json({errors:"Invalid Password"});
           }
           const data={
            user:{
                id:userData.id
            }
           }
           const authToken = jwt.sign(data,jwtSecret)
           return res.json({success:true,authToken:authToken});
           
         
        }
        catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })





// router.get('/profile', async (req, res) => {
//     try {

//         return res.send(`Hello, ${req.body.person}!`);

//     }
//     catch (error) {
//         console.log(error);
//         res.json({ success: false });
//     }
// })
module.exports = router;