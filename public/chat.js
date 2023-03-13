const messageInput = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages');

messageInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const message = messageInput.value.trim();
    if (message !== '') {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.classList.add('sent-message');
      messageElement.innerText = "Yo: " + message;
      messagesContainer.appendChild(messageElement);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
      messageInput.value = '';
    }
    let gpt = '';
    fetch('http://localhost:3000/mensaje')
      .then(response => response.json())
      .then(data => {
        gpt = data.mensaje.trim();
        if (gpt !== '') {
          console.log('GPT');
          const gptmessageElement = document.createElement('div');
          gptmessageElement.classList.add('message');
          gptmessageElement.classList.add('sent-message');
          gptmessageElement.innerText = "ChatGPT: " + gpt;
          messagesContainer.appendChild(gptmessageElement);
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
      })
      .catch(error => console.error(error));
    

  }
});

