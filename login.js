const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

// Configuración de la conexión a MongoDB
mongoose.connect('URL_DE_CONEXIÓN_A_MONGODB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

// Definición del esquema del usuario
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});
const User = mongoose.model('User', userSchema);

// Configuración de Express
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'mi_secreto',
    resave: false,
    saveUninitialized: true
  })
);

// Rutas
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Buscar al usuario en la base de datos
  const user = await User.findOne({ username });

  if (!user) {
    // Usuario no encontrado
    return res.render('index', { error: 'Usuario o contraseña incorrectos' });
  }

  // Verificar la contraseña
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    // Contraseña incorrecta
    return res.render('index', { error: 'Usuario o contraseña incorrectos' });
  }

  // Iniciar sesión
  req.session.userId = user._id;
  res.redirect('/dashboard');
});

app.get('/dashboard', (req, res) => {
  if (!req.session.userId) {
    // El usuario no ha iniciado sesión
    return res.redirect('/');
  }

  // Renderizar el dashboard
  res.render('dashboard');
});

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
