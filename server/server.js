const express = require('express');
const app = express();
const cors = require('cors');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');

// configure cors
app.use(cors());

// configure express to receive the form data
app.use(express.json());

// configure dotEnv
dotEnv.config({path : './.env'});

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

// connect to MongoDB
mongoose.connect(process.env.MONGO_DB_LOCAL_URL, {
    useCreateIndex : true,
    useFindAndModify : false,
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then((response) => {
    console.log('Connected to MongoDB Successfully..........');
}).catch((error) => {
    console.error(error);
    process.exit(1); // stop the process if unable to connect to mongodb
});

// get
app.get('/', (request , response) => {
    response.send(`Welcome to RecordDetail Application Backend`);
});

// router configuration
app.use('/api' , require('./router/recordRouter'));

app.listen(port, hostname, () => {
    console.log(`Express Server is started at http://${hostname}:${port}`);
});
