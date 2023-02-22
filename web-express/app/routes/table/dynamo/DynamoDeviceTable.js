import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import applyDotenv from "../../../lambdas/applyDotenv.js";
import AWS from "aws-sdk"
import config from "../../../../config/aws_device_confing.js"

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


const { aws_table_name } = applyDotenv(dotenv)


//AWS 연결 및 세팅
AWS.config.update(config.aws_remote_config); //config 세팅
const connection = new AWS.DynamoDB.DocumentClient(); //몽고디비 connection개념


//데이터 하나 조회(Read 1)
app.get('/findOne',(req,res,next)=>{
    const _id = req.query.id;
    const params={
        TableName: aws_table_name, //조회할 테이블 설정
        KeyConditionExpression: 'info = :i',//조회할 key설정
        ExpressionAttributeValues:{ //해당 key에 들어갈 값
            ':i':_id
        }
    }
    connection.query(params,function (err,data){
        console.log("데이터 하나 추출 시작");
        if(err){
            res.status(400).send({
                success:false,
                message: 'Server error'
            })
        }else {
            const {items} = data;
            res.status(200).send({
                success:true,
                message: 'Loaded Data',
                data:items
            })
        }
    })
});