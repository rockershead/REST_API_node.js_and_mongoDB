
const {User}=require('../../models')



const create = () => async (req, res, next) => {



const {name,age,hobby}=req.body

const user=new User(req.body)

user.save()
.then(result => {
  res.send(result);
})
.catch(err => {
  console.log(err);
});










}




module.exports={create}