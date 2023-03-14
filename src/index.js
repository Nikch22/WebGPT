
import chatbotGPT from './openaiAPI.js';
import express from 'express'
const app = express()
// usar los métodos json() y urlencoded() para obtener el body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.post('/chatbot', async (req, res) => {
  let msg = req.body.msg;
  // imprimirlo por consola
  console.log(msg);
  
   // esperar a que la función chatbotGPT() te de una respuesta
   let chatbotResponse = await chatbotGPT(msg); // usar await para pausar la ejecución hasta que se resuelva la promesa

  // Accede a la propiedad content usando la notación de punto
  const chatbotMsg = chatbotResponse.content;
  console.log(chatbotMsg)
   // enviar una respuesta al cliente con el resultado de chatbotGPT()
   res.json({mensaje: chatbotMsg })
})

app.listen(3000, () => {
console.log('Servidor escuchando en el puerto 3000')
})

// Llama a la función chatbot
//chatbotGPT();