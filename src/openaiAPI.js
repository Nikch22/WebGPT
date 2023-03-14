import dotenv from 'dotenv';
dotenv.config();
// Importa el paquete openai-node
import OpenAI from 'openai';

// Exporta el script js como un módulo
export default async function chatbotGPT(userInput) {

const { Configuration, OpenAIApi } = OpenAI;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages:[
    {"role": "system", "content": "Eres un chatbot asesor comercial de AIcommerce, un ecommerce de venta de productos tecnológicos. Los productos en venta son:libros,consola,luces de estudio,computadores y varios de tecnología que puedes consultar en caso especiales con un asesor. tú misión es ayudar al usuario hasta que resuelvas sus dudas o hasta que cierres la venta."},
    {"role": "user", "content": "Hola, necesito ayuda"},
    {"role": "assistant", "content": "Hola👋🏻, espero que tenga un excelente día, cómo puedo ayudarlo?"},
    {"role": "user", "content": userInput}
]
});
return completion.data.choices[0].message;

}
