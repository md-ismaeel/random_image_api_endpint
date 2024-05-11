const express = require('express');
const axios = require('axios')
const app = express();

const http = require('node:http')

const port = 4000;
const apiUrl = 'https://api.unsplash.com/photos/random';


app.get('/api/random/image/ups', async (req, res) => {
    try {

        const response = await axios(apiUrl, {
            headers: {
                "Authorization": "Client-ID KaAbLeE5ARrqQXhHf2QfqQzt2imDHOiGlKbcBGPu3iY"
            }
        })
        // console.log("hello man", response.data);
        res.json({
            sucess: true,
            message: "Random Image Generated Successfully",
            image: response.data.urls
        })
    } catch (err) {
        res.status(500).json({
            sucess: false,
            message: 'Internal Server Error'
        })
    }
})

app.listen(port, () => console.log(`Server in running on port ${port}`))

// const server = http.createServer(async (req, res) => {
//     if (req.url === '/api/random/image/ups' && req.method === 'GET') {
//         try {
//             const response = await axios.get(apiUrl, {
//                 headers: {
//                     "Authorization": "Client-ID KaAbLeE5ARrqQXhHf2QfqQzt2imDHOiGlKbcBGPu3iY"
//                 }
//             });

//             res.writeHead(200, { "Content-Type": "application/json" })
//             res.end(JSON.stringify({
//                 success: true,
//                 message: 'image generated successfully',
//                 image: response.data.urls
//             }))

//         } catch (error) {
//             console.error(error);
//             res.writeHead(500, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify({
//                 success: false,
//                 message: 'Internal Server Error',
//             }));
//         }
//     } else {
//         res.writeHead(404, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({
//             success: false,
//             message: 'Not Found'
//         }));
//     }
// });

// server.listen(port, () => console.log(`Server is running on port ${port}`))

