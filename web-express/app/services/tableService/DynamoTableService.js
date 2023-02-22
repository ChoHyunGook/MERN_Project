import applyDotenv from "../../lambdas/applyDotenv.js";
import dotenv from "dotenv";
import db from "../../models/index.js";
import getDatabase from "../../lambdas/getDataBase.js";
import jwt from "jsonwebtoken";
import AWS from "aws-sdk";
import config from "../../../config/aws_user_confing.js";
dotenv.config()

export default function DynamoTableService(){

    const { access_jwt_secret, AWS_TABLE_USER, AWS_TABLE_DEVICE } = applyDotenv(dotenv)

    //AWS 연결 및 세팅
    AWS.config.update(config.aws_remote_config); //config 세팅
    const connection = new AWS.DynamoDB.DocumentClient(); //몽고디비 connection개념

    return{
        find(req,res){
            try {
                const token = req.cookies.accessToken
                const table = { TableName:AWS_TABLE_USER }
                const deviceTable = { TableName:AWS_TABLE_DEVICE }
                jwt.verify(token, access_jwt_secret, (err)=>{
                    if(err){
                        res.status(400).send('로그인 후 사용해 주세요.')
                    }else {
                        connection.scan(table,(err,data)=>{
                            if(err){
                                res.status(400).send(err)
                            }else {
                                connection.scan(deviceTable,(err,deviceData)=>{
                                    if(err){
                                        res.status(400).send(err)
                                    }else{
                                        const userData = data.Items
                                        const deviceDatas = deviceData.Items
                                        const map = new Map()
                                        userData.filter(item=>map.set(item.user_key, item))
                                        deviceDatas.filter(item=>map.set(item.user_key, {...map.get(item.user_key), ...item}));
                                        const allData = Array.from(map.values());
                                        console.log(allData)
                                    }
                                })
                            }
                        })
                    }
                })
            }catch (e){
                if(e.name === 'TokenExpiredError'){
                    res.status(500).send('로그인 시간이 만료되었습니다.')
                }
            }
        },

        findOne(req,res){
            try {
                const scan = { TableName:AWS_TABLE_USER }

                connection.scan(scan,(err,data)=>{
                    const userData = data.Items
                    const company = userData.filter((comp)=>{
                        if(comp.addr === '서울'){
                            return comp
                        }
                    })
                    console.log(company)

                })
            }catch (e){
                if(e.name === 'TokenExpiredError'){
                    res.status(500).send('로그인 시간이 만료되었습니다.')
                }
            }
        },

    }

}