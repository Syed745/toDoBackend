const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const userRoute = require('./routes/routesTodo')


const PORT = process.env.PORT || 5000;

mongoose.connect(
	'mongodb+srv://syedbilal:billy786@cluster0.jer9jii.mongodb.net/?retryWrites=true&w=majority',
	(err) => {
		if (err) {
			console.log(err)
		} else {
			console.log("Mongoose Db connected");
		}
	}
)

app.use(express.json());
app.use(cors());
app.use('/', userRoute);
app.listen(PORT, () => {
	console.log(`Port Connected as ${PORT}`);
});