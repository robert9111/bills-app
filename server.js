const app = require("./app");
const HOST = "127.0.0.1";
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");

// Connecting DB to app
connectDB();

// App listening for requests
app.listen(PORT, HOST, () => {
	console.log(`Listening @ http://${HOST}:${PORT}`);
});
