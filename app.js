const express = require('express');
const app = express();
const bodyParser = ('body-parser');
const cors = ('cors');
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Your port is on ${port}`));