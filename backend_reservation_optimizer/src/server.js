require('dotenv').config({ path: './.env' });
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const cors = require('cors');


const port = process.env.PORT || 3001;
const app = express();
const path = require('path') ; 
const connectDB = require('./database');
const swaggerDocument = YAML.load(path.resolve(__dirname, './api-spec.yaml'));

const userRoutes = require('./routes/userRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const meetingRoutes = require('./routes/meetingRoutes');
const zoomRoomAccountRoutes = require('./routes/zoomRoomAccountRoutes');
const configParamRoutes = require('./routes/configParamRoutes');

connectDB(); 

app.use(express.json()); 
app.use(cors());
app.use('/users', userRoutes);
app.use('/meetings', meetingRoutes);
app.use('/zoomRoomAccount', zoomRoomAccountRoutes);
app.use('/configparam', configParamRoutes);
app.use('/session', sessionRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app; 
