const messageInput = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages');

messageInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const message = messageInput.value.trim();
    if (message !== '') {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.classList.add('sent-message');
      messageElement.innerHTML = "<b>Yo: </b>" + message;
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
          let gptmessageElement = document.createElement('div');
          gptmessageElement.classList.add('message');
          gptmessageElement.classList.add('sent-message-gpt');
          gptmessageElement.innerHTML = `<strong class="text-gpt">ChatGPT: </strong> <b>` + gpt + '</b>';
          messagesContainer.appendChild(gptmessageElement);
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
      })
      .catch(error => console.error(error));
    

  }
});

