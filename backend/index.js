import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import BodyParser from "body-parser";

 

dotenv.config();
 import { HoldingsModel } from "./models/HoldingsModel.js";
import { PositionsModel } from "./models/PositionsModel.js";
import { OrdersModel } from "./models/OrdersModel.js";

 
const app = express();
const PORT = process.env.PORT || 3002;


app.use(cors());
app.use(BodyParser.json());

 
const mongo_url = process.env.MONGO_URL;

//  app.get("/addPositions",async(req,res)=>{

// let tempPositions = [
//  {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },

// ]

    
// tempPositions.forEach((item)=>{
//     let newPosition = new PositionsModel({
//     product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss,
   
//     });
//      newPosition.save();

//  });

// res.send("Positions added successfully");
// });

app.get("/allHoldings",async(req,res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});


app.get("/allPositions",async(req,res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post('/newOrder', async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode

    });
     newOrder.save();
    res.json(newOrder);
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect(mongo_url) ;
    console.log("MongoDB connected successfully");
})
