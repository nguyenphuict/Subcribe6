import SocketClient from './lib/socketClient.mjs';
import express from "express";
import cronjob from './cronjob.mjs';
import handle from "./lib/handle.mjs";
import bodyParser from 'body-parser';

var jsonParser = bodyParser.json()
const PORT = process.env.PORT || 8000;
const app = express();
app.get('/', async (req, res)  => {
    res.status(200).json({msg: "hello world", responseCode: 1 });
})

app.listen(PORT, () => console.log('server running!'));
//Job
cronjob.SyncData();

app.post('/syncDataClientVal', jsonParser,function (req, res) {
    try{
        var data = req.body;
        var num = data.num;
        if(num == 1)
        {
            handle.listArr1.length = 0;
            handle.listArr1.push(...data.data);
        }
        if(num == 2)
        {
            handle.listArr2.length = 0;
            handle.listArr2.push(...data.data);
        }
        if(num == 3)
        {
            handle.listArr3.length = 0;
            handle.listArr3.push(...data.data);
        }
        if(num == 4)
        {
            handle.listArr4.length = 0;
            handle.listArr4.push(...data.data);
        }
        if(num == 5)
        {
            handle.listArr5.length = 0;
            handle.listArr5.push(...data.data);
        }
        if(num == 6)
        {
            handle.listArr6.length = 0;
            handle.listArr6.push(...data.data);
        }
        if(num == 7)
        {
            handle.listArr7.length = 0;
            handle.listArr7.push(...data.data);
        }
        if(num == 8)
        {
            handle.listArr8.length = 0;
            handle.listArr8.push(...data.data);
        }
        if(num == 9)
        {
            handle.listArr9.length = 0;
            handle.listArr9.push(...data.data);
        }
        if(num == 10)
        {
            handle.listArr10.length = 0;
            handle.listArr10.push(...data.data);
        }
        if(num == 11)
        {
            handle.listArr11.length = 0;
            handle.listArr11.push(...data.data);
        }
        if(num == 12)
        {
            handle.listArr12.length = 0;
            handle.listArr12.push(...data.data);
        }
        if(num == 13)
        {
            handle.listArr13.length = 0;
            handle.listArr13.push(...data.data);
        }
        if(num == 14)
        {
            handle.listArr14.length = 0;
            handle.listArr14.push(...data.data);
        }
        if(num == 15)
        {
            handle.listArr15.length = 0;
            handle.listArr15.push(...data.data);
        }
        if(num == 16)
        {
            handle.listArr16.length = 0;
            handle.listArr16.push(...data.data);
        }
        if(num == 17)
        {
            handle.listArr17.length = 0;
            handle.listArr17.push(...data.data);
        }
        if(num == 18)
        {
            handle.listArr18.length = 0;
            handle.listArr18.push(...data.data);
        }
        if(num == 19)
        {
            handle.listArr19.length = 0;
            handle.listArr19.push(...data.data);
        }
        if(num == 20)
        {
            handle.listArr20.length = 0;
            handle.listArr20.push(...data.data);
        }
        if(num == 21)
        {
            handle.listArr21.length = 0;
            handle.listArr21.push(...data.data);
        }
        if(num == 22)
        {
            handle.listArr22.length = 0;
            handle.listArr22.push(...data.data);
        }
        if(num == 23)
        {
            handle.listArr23.length = 0;
            handle.listArr23.push(...data.data);
        }
        if(num == 24)
        {
            handle.listArr24.length = 0;
            handle.listArr24.push(...data.data);
        }
        if(num == 25)
        {
            handle.listArr25.length = 0;
            handle.listArr25.push(...data.data);
        }
        if(num == 26)
        {
            handle.listArr26.length = 0;
            handle.listArr26.push(...data.data);
        }
        if(num == 27)
        {
            handle.listArr27.length = 0;
            handle.listArr27.push(...data.data);
        }
        if(num == 28)
        {
            handle.listArr28.length = 0;
            handle.listArr28.push(...data.data);
        }
        if(num == 29)
        {
            handle.listArr29.length = 0;
            handle.listArr29.push(...data.data);
        }
        if(num == 30)
        {
            handle.listArr30.length = 0;
            handle.listArr30.push(...data.data);
        }
        if(num == 31)
        {
            handle.listArr31.length = 0;
            handle.listArr31.push(...data.data);
        }
        if(num == 32)
        {
            handle.listArr32.length = 0;
            handle.listArr32.push(...data.data);
        }
        if(num == 33)
        {
            handle.listArr33.length = 0;
            handle.listArr33.push(...data.data);
        }
        if(num == 34)
        {
            handle.listArr34.length = 0;
            handle.listArr34.push(...data.data);
        }
        if(num == 35)
        {
            handle.listAlistArr35rr17.length = 0;
            handle.listArr35.push(...data.data);
        }
        if(num == 36)
        {
            handle.listArr36.length = 0;
            handle.listArr36.push(...data.data);
        }
        if(num == 37)
        {
            handle.listArr37.length = 0;
            handle.listArr37.push(...data.data);
        }
        if(num == 38)
        {
            handle.listArr38.length = 0;
            handle.listArr38.push(...data.data);
        }
        if(num == 39)
        {
            handle.listArr39.length = 0;
            handle.listArr39.push(...data.data);
        }
        if(num == 40)
        {
            handle.listArr40.length = 0;
            handle.listArr40.push(...data.data);
        }
        return res.status(200).json({msg: "success", code: 1 });
    }
    catch(e)
    {
        console.log(e);
        return res.status(200).json({msg: "error", code: -99 });
    }
});

app.get('/current', function(req, res) {
    res.status(200).json({data: handle.listCurrent });
});

app.get('/mirror', function(req, res) {
    res.status(200).json({data: handle.listMirror });
});

app.get('/symbol/:num', function(req, res) {
    var num = req.params.num;
    if(num == 1)
    return res.status(200).json({data: handle.listArr1 });
    if(num == 2)
    return res.status(200).json({data: handle.listArr2 });
    if(num == 3)
    return res.status(200).json({data: handle.listArr3 });
    if(num == 4)
    return res.status(200).json({data: handle.listArr4 });
    if(num == 5)
    return res.status(200).json({data: handle.listArr5 });
    if(num == 6)
    return res.status(200).json({data: handle.listArr6 });
    if(num == 7)
    return res.status(200).json({data: handle.listArr7 });
    if(num == 8)
    return res.status(200).json({data: handle.listArr8 });
    if(num == 9)
    return res.status(200).json({data: handle.listArr9 });
    if(num == 10)
    return res.status(200).json({data: handle.listArr10 });
    if(num == 11)
    return res.status(200).json({data: handle.listArr11 });
    if(num == 12)
    return res.status(200).json({data: handle.listArr12 });
    if(num == 13)
    return res.status(200).json({data: handle.listArr13 });
    if(num == 14)
    return res.status(200).json({data: handle.listArr14 });
    if(num == 15)
    return res.status(200).json({data: handle.listArr15 });
    if(num == 16)
    return res.status(200).json({data: handle.listArr16 });
    if(num == 17)
    return res.status(200).json({data: handle.listArr17 });
    if(num == 18)
    return res.status(200).json({data: handle.listArr18 });
    if(num == 19)
    return res.status(200).json({data: handle.listArr19 });
    if(num == 20)
    return res.status(200).json({data: handle.listArr20 });
    if(num == 21)
    return res.status(200).json({data: handle.listArr21 });
    if(num == 22)
    return res.status(200).json({data: handle.listArr22 });
    if(num == 23)
    return res.status(200).json({data: handle.listArr23 });
    if(num == 24)
    return res.status(200).json({data: handle.listArr24 });
    if(num == 25)
    return res.status(200).json({data: handle.listArr25 });
    if(num == 26)
    return res.status(200).json({data: handle.listArr26 });
    if(num == 27)
    return res.status(200).json({data: handle.listArr27 });
    if(num == 28)
    return res.status(200).json({data: handle.listArr28 });
    if(num == 29)
    return res.status(200).json({data: handle.listArr29 });
    if(num == 30)
    return res.status(200).json({data: handle.listArr30 });
    if(num == 31)
    return res.status(200).json({data: handle.listArr31 });
    if(num == 32)
    return res.status(200).json({data: handle.listArr32 });
    if(num == 33)
    return res.status(200).json({data: handle.listArr33 });
    if(num == 34)
    return res.status(200).json({data: handle.listArr34 });
    if(num == 35)
    return res.status(200).json({data: handle.listArr35 });
    if(num == 36)
    return res.status(200).json({data: handle.listArr36 });
    if(num == 37)
    return res.status(200).json({data: handle.listArr37 });
    if(num == 38)
    return res.status(200).json({data: handle.listArr38 });
    if(num == 39)
    return res.status(200).json({data: handle.listArr39 });
    if(num == 40)
    return res.status(200).json({data: handle.listArr40 });
});

app.get('/count/:num', function(req, res) {
    var num = req.params.num;
    if(num == 1)
    return res.status(200).json({count: handle.listArr1.length });
    if(num == 2)
    return res.status(200).json({count: handle.listArr2.length });
    if(num == 3)
    return res.status(200).json({count: handle.listArr3.length });
    if(num == 4)
    return res.status(200).json({count: handle.listArr4.length });
    if(num == 5)
    return res.status(200).json({count: handle.listArr5.length });
    if(num == 6)
    return res.status(200).json({count: handle.listArr6.length });
    if(num == 7)
    return res.status(200).json({count: handle.listArr7.length });
    if(num == 8)
    return res.status(200).json({count: handle.listArr8.length });
    if(num == 9)
    return res.status(200).json({count: handle.listArr9.length });
    if(num == 10)
    return res.status(200).json({count: handle.listArr10.length });
    if(num == 11)
    return res.status(200).json({count: handle.listArr11.length });
    if(num == 12)
    return res.status(200).json({count: handle.listArr12.length });
    if(num == 13)
    return res.status(200).json({count: handle.listArr13.length });
    if(num == 14)
    return res.status(200).json({count: handle.listArr14.length });
    if(num == 15)
    return res.status(200).json({count: handle.listArr15.length });
    if(num == 16)
    return res.status(200).json({count: handle.listArr16.length });
    if(num == 17)
    return res.status(200).json({count: handle.listArr17.length });
    if(num == 18)
    return res.status(200).json({count: handle.listArr18.length });
    if(num == 19)
    return res.status(200).json({count: handle.listArr19.length });
    if(num == 20)
    return res.status(200).json({count: handle.listArr20.length });
    if(num == 21)
    return res.status(200).json({count: handle.listArr21.length });
    if(num == 22)
    return res.status(200).json({count: handle.listArr22.length });
    if(num == 23)
    return res.status(200).json({count: handle.listArr23.length });
    if(num == 24)
    return res.status(200).json({count: handle.listArr24.length });
    if(num == 25)
    return res.status(200).json({count: handle.listArr25.length });
    if(num == 26)
    return res.status(200).json({count: handle.listArr26.length });
    if(num == 27)
    return res.status(200).json({count: handle.listArr27.length });
    if(num == 28)
    return res.status(200).json({count: handle.listArr28.length });
    if(num == 29)
    return res.status(200).json({count: handle.listArr29.length });
    if(num == 30)
    return res.status(200).json({count: handle.listArr30.length });
    if(num == 31)
    return res.status(200).json({count: handle.listArr31.length });
    if(num == 32)
    return res.status(200).json({count: handle.listArr32.length });
    if(num == 33)
    return res.status(200).json({count: handle.listArr33.length });
    if(num == 34)
    return res.status(200).json({count: handle.listArr34.length });
    if(num == 35)
    return res.status(200).json({count: handle.listArr35.length });
    if(num == 36)
    return res.status(200).json({count: handle.listArr36.length });
    if(num == 37)
    return res.status(200).json({count: handle.listArr37.length });
    if(num == 38)
    return res.status(200).json({count: handle.listArr38.length });
    if(num == 39)
    return res.status(200).json({count: handle.listArr39.length });
    if(num == 40)
    return res.status(200).json({count: handle.listArr40.length });
});

new SocketClient('nknusdt', 1, 3600000); 
new SocketClient('nmrusdt', 2, 3605000); 
new SocketClient('nulsusdt', 3, 3610000); 
new SocketClient('oceanusdt', 4, 3615000); 
new SocketClient('ognusdt', 5, 3620000); 
new SocketClient('ogusdt', 6, 3625000); 
new SocketClient('omgusdt', 7, 3630000); 
new SocketClient('omusdt', 8, 3635000); 
new SocketClient('oneusdt', 9, 3640000); 
new SocketClient('ongusdt', 10, 3645000); 
new SocketClient('ontusdt', 11, 3650000); 
new SocketClient('ookiusdt', 12, 3655000); 
new SocketClient('opusdt', 13, 3660000); 
new SocketClient('ornusdt', 14, 3665000); 
new SocketClient('osmousdt', 15, 3670000);
new SocketClient('oxtusdt', 16, 3675000); 
new SocketClient('paxgusdt', 17, 3680000); 
new SocketClient('peopleusdt', 18, 3685000); 
new SocketClient('perlusdt', 19, 3690000); 
new SocketClient('perpusdt', 20, 3695000); 
new SocketClient('phausdt', 21, 3700000); 
new SocketClient('phbusdt', 22, 3705000); 
new SocketClient('plausdt', 23, 3710000); 
new SocketClient('pntusdt', 24, 3715000); 
new SocketClient('polsusdt', 25, 3720000); 
new SocketClient('polyxusdt', 26, 3725000); 
new SocketClient('pondusdt', 27, 3730000);
new SocketClient('portousdt', 28, 3735000); 
new SocketClient('powrusdt', 29, 3740000); 
new SocketClient('psgusdt', 30, 3745000); 
new SocketClient('pundixusdt', 31, 3750000); 
new SocketClient('pyrusdt', 32, 3755000); 
new SocketClient('qiusdt', 33, 3760000); 
new SocketClient('qntusdt', 34, 3765000); 
new SocketClient('qtumusdt', 35, 3770000); 
new SocketClient('quickusdt', 36, 3775000);
new SocketClient('radusdt', 37, 3780000);
new SocketClient('rareusdt', 38, 3785000); 
new SocketClient('rayusdt', 39, 3790000); 
new SocketClient('reefusdt', 40, 3795000); 


