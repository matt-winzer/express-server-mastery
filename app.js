const express = require('express');
const app = express();
const bodyParser = ('body-parser');
const cors = ('cors');
const port = process.env.PORT || 3000;
let cakesRoutes = ('./routes/cakes.js');
let studentsRoutes = ('./routes/students.js');

app.use(bodyParser.json());
app.use(cors());

app.use('/cakes', cakesRoutes);
app.use('/students', studentsRoutes);

app.listen(port, () => console.log(`Your port is on ${port}`));