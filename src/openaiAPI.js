// Importa el paquete openai-node
import OpenAI from 'openai';

// Exporta el script js como un módulo
export default async function chatbotGPT() {

const { Configuration, OpenAIApi } = OpenAI;

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages:[
    {"role": "system", "content": "Eres un chatbot asesor comercial de un ecommerce de venta de productos tecnológicos. Los productos en venta son:libros,consola,luces de estudio,computadores"},
    {"role": "user", "content": "Hola, necesito ayuda"},
    {"role": "assistant", "content": "Hola👋🏻, espero que tenga un excelente día, cómo puedo ayudarlo?"},
    {"role": "user", "content": "Hola, deseo comprar un libro"}
]
});
console.log(completion.data.choices[0].message);

}
