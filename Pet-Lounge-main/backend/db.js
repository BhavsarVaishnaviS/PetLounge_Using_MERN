const mongoose = require('mongoose');
//const mongoURI = 'mongodb+srv://Daraha:petlounge@cluster0.euq8qdf.mongodb.net/petlounge?retryWrites=true&w=majority'
const mongoURI = 'mongodb://Daraha:petlounge@ac-acvcmpl-shard-00-00.euq8qdf.mongodb.net:27017,ac-acvcmpl-shard-00-01.euq8qdf.mongodb.net:27017,ac-acvcmpl-shard-00-02.euq8qdf.mongodb.net:27017/petlounge?ssl=true&replicaSet=atlas-p29vnp-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'
const mongoDB = async ()=>{
    try {
        //mongoose.set('strictQuery', false)

        await mongoose.connect(mongoURI)
            // if(err) 
          
            console.log('Mongo connected');
            const fetched_data = await  mongoose.connection.db.collection("petDetails");
           // console.log(fetched_data);
        //     await fetched_data.find({}).toArray(async function(err,data){
        //     if(err) console.log(" *****");
        //         else {
        //             console.log(data);
        //             global.petDetails = data;
        //             console.log(global.petDetails);
        //         }
        //    });  
        //    const data = 
      // console.log(petCollection.find({}));
      let x = await fetched_data.find({})
      try{
      const arr=[];
    for await (const doc of x){
        arr.push(doc);
    }
    //console.log(arr);
    global.petDetails = arr;
    try{
    const petCat  = await  mongoose.connection.db.collection("petCategory");
    let y = await petCat.find({})
    const arr2=[];
    for await (const doc of y){
        arr2.push(doc);
    }  
    global.petCategory = arr2;
}
catch(err){
    console.log(err)
}
    //console.log("%%%%%%%%%%%%%%")
   // console.log(global.petDetails);

    }
    catch(err)
    {
        console.log(err);
    }
        // petCollection.find({}).toArray(async function(err,data){
        //     // const categoryCollection = await mongoose.connection.db.collection("petCategory");
        //     // categoryCollection.find({}).toArray(async function(err,CatData){
        //        console.log(data);
        //     //     console.log("************************");
        //     //     console.log(CatData);
        //     // })
        //     if(err) console.log("$$$$$$");
        //     else
        //     console.log(data+"@@@@@@@@@@");
        // })
           //console.log(data+"********");
        }
       
        // console.log('Mongo connected');
        // const fetched_data =  mongoose.connection.db.collection("petDetails");
        // fetched_data.find({}).toArray(function(err,data){
        // if(err) console.log(err)
        //     else console.log(data);
        // });
       
    
    catch(error) {
        console.log(error)
        process.exit()
    }
}
// const mongoDB =  async()=>{
//     await mongoose.connect(mongoURI,{useNewUrlParser:true},(err,result)=>{
//         if(err)console.log("-----------",err)
//         else{
//     console.log("connected")
// }
//     });
// }
module.exports = mongoDB;
