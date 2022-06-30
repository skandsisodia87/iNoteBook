const connectToMongoose = require('./db.js');
connectToMongoose();

const cors=require('cors')
const express = require('express')
const app = express()
const port = 5000

app.use(express.json());
app.use(cors());
app.use(express.json());


// app.get('/', (req, res) => {
//     res.send('Hello Skand Sisodia!')
// })
app.use('/api/auth',require('./router/auth'))
app.use('/api/notes',require('./router/notes'))


app.listen(port, () => {
    console.log(`iNotebook backend listening on port ${port}`)
})