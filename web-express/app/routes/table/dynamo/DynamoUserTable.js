import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import DynamoTableService from "../../../services/tableService/DynamoTableService.js";

dotenv.config()

const origin = process.env.ORIGIN


const corsOptions = {
    origin : process.env.ORIGIN,
    optionsSuccessStatus : 200
}
const app = express()

app.use(cors({
    origin:true,
    credentials: true
}))


app.use(function(_req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept",
        "Access-Control-Allow-Origin", "*"
    );
    next();
});


//전체조회
app.get('/find',(req,res)=>{
    DynamoTableService().find(req,res)
})


//데이터 하나 조회(Read 1)
app.get('/findOne',(req,res,next)=>{
    DynamoTableService().findOne(req,res)
});




export default app