const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

app.engine('hbs', handlebars.engine({
  extname: '.hbs',
}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));


route(app);
db.connect();

app.listen(port, () => {
  console.log(`Example app listening at  http://localhost:${port}`)
})