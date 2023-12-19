//SIGNUP
import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken"

const router=express.Router();

router.post("/",async(req,res)=>{

    try {
        let user=await ModalName.findOne({email:req.body.email})
        if(user){
            return res.status(409).json({message:"User Already exist"})}

        let salt=await bcrypt.genSalt(10);
        let hashedPassword=await bcrypt.hash(req.body.password,salt)

        user=await new ModalName({
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword,
        }).save
       return res.status(201).json({message:"Sign Up successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Server Error"})
    }
})


//LOGIN

router.post("/",async(req,res)=>{
    try {
        const user=await ModalName.findOne({email:req.body.email});
        if(!user){
           return res.status(401).json({message:"User Does Not exist"});
        }   
        const passwordValidate=await bcrypt.compare(req.body.password,user.password)
        if(!passwordValidate){
            return res.status(401).json({message:"Password is wrong"}); 
        }

        //<<<<<<<JWT>>>>>>>>>>>>>>
        const id=user.id
        const authToken= jwt.sign({id},process.env.USER_SECRET_CODE)
        
        //<<<<<<<<<<<<<<<<<<<<<OR>>>>>>>>>>>>>>>>>>>
        const genAuthToken=(id)=>{
            return jwt.sign({id},process.env.SECRET_CODE)
        }
        const authToken2=genAuthToken()
        //<<<<<<<JWT>>>>>>>>>>>>>>

        return res.status(200).json({message:"Successfully Loged In",
        token:authToken,
        user})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Server Error"})
    }
   
})




import Products from "../../Model/Product.js";



router.get("/", async (req, res) => {
    try {
      const products = await Products.find({});
      if (!products) {
        res.status(400).json({ message: "can't get the data" });
      }
      res.status(200).json(products);
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error");
    }
  });


 
  router.post("/", async (req, res) => {
    try {
      let product = await Products.findOne({$and:[{name:{$eq:req.body.name}},{varient:{$eq:req.body.varient}}]});;
      console.log(product)
      if(product){
        return  res.status(409).json({message:"Product Already Exist"})
      }
      product=await Products.create(req.body)
      res.status(200).json("Products added Successfully");
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error");
    }
  });

  router.get("/", async (req, res) => {
    const {product}=req.query;
    console.log(product)
      try {
        if(product){
          const products = await Products.find({$or:[
          {name:{$regex:product,$options:`i`}},
          {varient:{$regex:product,$options:`i`}},
          {type:{$regex:product,$options:`i`}},
          {brand:{$regex:product,$options:`i`}},
          {productGroup:{$regex:product,$options:`i`}},
          {productSubGroup:{$regex:product,$options:`i`}}]});
          if (!products) {
            res.status(400).json({ message: "can't get the data" });
          }
          res.status(200).json(products);
        }
        else{
        const products = await Products.find({});
        if (!products) {
          res.status(400).json({ message: "can't get the data" });
        }
        res.status(200).json(products);
      }
      } catch (error) {
        console.log(error);
        res.status(500).json("Server Error");
      }
    });


  router.put("/:id", async (req, res) => {
    try {
      const updatedContent = await Products.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      );
      if (!updatedContent) {
        return res.status(400).json({ message: "Couldn'nt update your content" });
      }
      return res.status(200).json("updated Successfully");
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });


  router.delete("/:id",async(req,res)=>{
    try {
        const deleteContent=await Products.findByIdAndDelete(
            {_id:req.params.id},
        )   
        if(!deleteContent){return res.status(400).json({message:"Couldn'nt delete your content"})}
        return res.status(200).json({message:"Deleted Successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
    }

    
})



router.delete("/all",async(req,res)=>{
  try {
      const deleteWholeCart=await Products.deleteMany(
          {},
      )   
      if(!deleteWholeCart){return res.status(400).json({message:"Couldn'nt delete your content"})}
      return res.status(200).json({message:"Deleted Successfully"})
  } catch (error) {
      console.log(error);
      res.status(500).json({message:"Internal server error"})
  }

  
})


  export const productsRouterAdmin = router;