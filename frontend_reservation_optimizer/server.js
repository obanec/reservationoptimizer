const express = require('express');
const cors = require('cors');

const app = express();

const API = 'http://backend:3001';
const PORT = '3000'; 

const fetch = async (...props) => {
    const {default: innerFetch} = await import('node-fetch');
    return innerFetch(...props);
};

const handleRequest = async (req, res) => {
    console.log(`Request made to ${req.url}`);
    try {
        const url = `${API}${req.url.replace('/api', '')}`;
        const {body} = req;
        const Authorization = req.get('Authorization');
        const response = await fetch(url, {
            method: req.method,
            body: !isEmpty(body) && body ? JSON.stringify(body) : null,
            headers: {
                Authorization,
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();
        res.status(res.statusCode).send(result);
    } catch (err) {
        res.status(500).send({
            error: true,
            message: err.message
        });
    }
};

app.use(express.static('./build'));
app.use(express.json({}));
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.all('/api', handleRequest);
app.all('/public-api', handleRequest);
app.listen(PORT, () => console.log(`\nApp running on port ${PORT} in production environment`));