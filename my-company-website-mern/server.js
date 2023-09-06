const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve the static React build from the "client/build" folder
app.use(express.static('client/build'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
