const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const chatContainer = document.querySelector(".chat-container");


function sendMessage() {
    const message = userInput.value;
    
    const userMessageElement = document.createElement("div");
    userMessageElement.classList.add("message", "user-message");
    userMessageElement.textContent = message;
    chatContainer.appendChild(userMessageElement);
    userInput.value = "";

    const botMessageElement = document.createElement("div");
    botMessageElement.classList.add("message", "bot-message");
    botMessageElement.textContent = "Good! I'm here to help you.";
    chatContainer.appendChild(botMessageElement);

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

sendButton.addEventListener("click", sendMessage);

