const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const chatContainer = document.querySelector(".chat-container");


function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;
    
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
    updateSendButtonState();
}

function updateSendButtonState() {
    const hasText = userInput.value.trim().length > 0;
    sendButton.disabled = !hasText;
}

sendButton.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});
userInput.addEventListener("input", updateSendButtonState);
updateSendButtonState();

