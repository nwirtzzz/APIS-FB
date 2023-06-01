const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// Configurar middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'mysecretkey',
  resave: true,
  saveUninitialized: true
}));

// Configurar la conexión a la base de datos (MongoDB)

// Definir el modelo de usuario
const User = require('./models/user');

// Ruta para el formulario de inicio de sesión
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/login/login.html');
});

// Ruta para procesar el inicio de sesión
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar al usuario en la base de datos
    const user = await User.findOne({ username });

    // Verificar si el usuario existe y si las contraseñas coinciden
    if (user && await bcrypt.compare(password, user.password)) {
      // Iniciar sesión y redirigir al usuario a la página de inicio
      req.session.userId = user._id;
      res.json({ success: true });
    } else {
      // Las credenciales son inválidas
      res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error del servidor' });
  }
});

// Ruta para el panel de control (requiere inicio de sesión)
app.get('/dashboard', (req, res) => {
  if (req.session.userId) {
    // El usuario ha iniciado sesión, mostrar el panel de control
    res.sendFile(__dirname + '/views/dashboard.html');
  } else {
    // El usuario no ha iniciado sesión, redirigir al formulario de inicio de sesión
    res.redirect('/');
  }
});

// Ruta para cerrar sesión
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

const mongoose = require('mongoose');

// Conexión a la base de datos
import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://facur:Facundo10@facur.xn9z68j.mongodb.net/";

const client = new MongoClient(connectionString);

let conn;
try {
  // Try
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("Facur"); // cambie austral por Facur

export default db;


//REGISTRO ruta hacia el

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Verificar si el usuario ya existe en la base de datos
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.render('register', { error: 'El usuario ya existe' });
      }
  
      // Crear un nuevo usuario
      const newUser = new User({ username, password });
      await newUser.save();
  
      // Redirigir al usuario a la página de inicio de sesión
      res.redirect('/');
    } catch (error) {
      console.error(error);
      res.render('register', { error: 'Error del servidor' });
    }
  });
  

// parte 2 del registro para guardar los datos del registro

const User = require('./models/user'); // Asegúrate de importar el modelo de usuario

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.render('register', { error: 'El usuario ya existe' });
    }

    // Crear un nuevo usuario
    const newUser = new User({ username, password });
    await newUser.save();

    // Redirigir al usuario a la página de inicio de sesión
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.render('register', { error: 'Error del servidor' });
  }
});




