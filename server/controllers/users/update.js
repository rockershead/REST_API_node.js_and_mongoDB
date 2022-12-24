
const {User}=require('../../models')



const update = () => async (req, res, next) => {

   //const{name}=req.params
   const {age}=req.params

   //there is update one and update many,that update any documents satisfying that condition


   //1)//format//await User.findOneAndUpdate(filter, update);
      //await User.findOneAndUpdate({"name":name}, req.body);
      //console.log('user updated')

  //2//

    
await User.updateMany({ age: age }, req.body);
console.log('users updated')







}




module.exports={update}