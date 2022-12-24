//User.find( { age: { $gt: 4 } } )   eg query

//we can findById.But here I am using other fields to find
const {User}=require('../../models')



const show = () => async (req, res, next) => {

const {name}=req.params

const user=await User.find({name:name})     //will get all objects satisfying this condition



 res.send(user)





}




module.exports={show}