
import chatbotGPT from './openaiAPI.js';
import express from 'express'
const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.get('/chatbot', (req, res) => {
  const mensaje = { mensaje: 'Hola, espero que tengas un buen día, en que puedo ayudarte?' }
  res.json(mensaje)
})

app.listen(3000, () => {
console.log('Servidor escuchando en el puerto 3000')
})

// Llama a la función chatbot
chatbotGPT();