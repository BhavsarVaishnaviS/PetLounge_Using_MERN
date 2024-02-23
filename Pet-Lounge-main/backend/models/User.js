const mongoose =  require('mongoose');
const { Schema } =  mongoose;

const UserSchema =  new Schema({
username:{
    type:String,
    required:true
},
useremail : {
    type: String,
    required : true
},
usermobile:{
     type : Number,
     required : true
},
userpwd :{
    type: String,
    required : true
},
date:{
    type:Date,
    default:Date.now
}
});

module.exports = mongoose.model('user',UserSchema)