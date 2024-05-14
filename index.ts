import express, { Express } from "express";
import WebSocket from "ws";
import http from "http";
import { notifications } from "./src/shared/notifications-constants";

const app: Express = express()
const server = http.createServer(app)
const websocketServer = new WebSocket.Server({server})


websocketServer.on('connection', ws=>{
    notifications.forEach((item, index)=>{
        setTimeout(()=>{
            ws.send(JSON.stringify(item))
        }, 2000 * (index + 1))
    })
})

server.listen(8080, ()=>console.log('Server started'));
