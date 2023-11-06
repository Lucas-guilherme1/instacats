const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

require('./database/index');

const app = express();

const usersRoutes = require('./routes/UsersRoutes');

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, 'views/'));

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

handlebars.create({
    partialsDir: path.join(__dirname, 'views/partials')
})

app.use(usersRoutes);

app.listen(5080, () => {
    console.log(`Server ON! ✅`);
});
