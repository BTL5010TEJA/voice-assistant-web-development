const startButton = document.getElementById('start-button');
const sendButton = document.getElementById('send-button');
const textInput = document.getElementById('text-input');
const chatLog = document.getElementById('chat-log');

let recognition = new webkitSpeechRecognition();
recognition.lang = 'en-US';
recognition.maxResults = 10;

startButton.addEventListener('click', () => {
    recognition.start();
});

recognition.onresult = event => {
    const transcript = event.results[0][0].transcript;
    textInput.value = transcript;
    chatLog.innerHTML += `You: ${transcript}<br>`;
    respond(transcript);
};

sendButton.addEventListener('click', () => {
    const text = textInput.value;
    chatLog.innerHTML += `You: ${text}<br>`;
    respond(text);
});
const video = document.getElementById('autoplayVideo');
    video.addEventListener('ended', function() {
      video.currentTime = 0; // Reset video to the beginning
      video.play();
    });
  

function respond(text) {
    const responses = {
        'hello': 'Hi! How can I assist you today?',
        'hi': 'Hello! What can I help you with?',
        'what is your name': 'My name is ChatBot, nice to meet you!',
        'how are you': 'I\'m doing great, thanks for asking!',
        'what can you do': 'I can answer questions, provide information, and assist with tasks.',
        'default': 'I didn\'t understand that. Can you please rephrase?'
    };

    const response = responses[text.toLowerCase()] || responses['default'];
    chatLog.innerHTML += `AI: ${response}<br>`;
}
