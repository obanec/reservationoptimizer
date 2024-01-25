require('dotenv').config({ path: './.env' });
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const port = process.env.PORT || 3000;
const app = express();
const path = require('path') ; 
const connectDB = require('./database');
const swaggerDocument = YAML.load(path.resolve(__dirname, './api-spec.yaml'));

const userRoutes = require('./routes/userRoutes');
const meetingRoutes = require('./routes/meetingRoutes');
const zoomRoomAccountRoutes = require('./routes/zoomRoomAccountRoutes');
const configParamRoutes = require('./routes/configParamRoutes');

connectDB(); 

app.use(express.json()); 
app.use('/users', userRoutes);
app.use('/meetings', meetingRoutes);
app.use('/zoomRoomAccount', zoomRoomAccountRoutes);
app.use('/configparam', configParamRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app; 
