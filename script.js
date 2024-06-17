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
        'default': 'I didn\'t understand that. Can you please rephrase?',
      'hello': 'Hi! How can I assist you today?',
      'hi': 'Hello! How can I help?',
      'hey': 'Hey there! What can I do for you?',
      'good morning': 'Good morning! How can I assist you?',
      'good afternoon': 'Good afternoon! How can I assist you today?',
      'good evening': 'Good evening! How can I assist you?',
      'how are you': 'I’m here and ready to assist you!',
      'what can you do': 'I can answer questions, provide information, and assist with tasks.',
      'thank you': 'You’re welcome! Is there anything else I can help with?',
      'thanks': 'You’re welcome! Let me know if there’s anything else you need.',
      'bye': 'Goodbye! Have a great day!',
      'goodbye': 'Goodbye! Take care!',
      'see you later': 'See you later! Reach out if you need anything else!',
      'help': 'Sure, I’m here to help. What do you need assistance with?',
      'how can I': 'What can I do for you today?',
      'can you assist': 'How can I assist you today?',
      'I need help with': 'Sure, I’m here to help. What do you need assistance with?',
      'tell me about': 'I’d be happy to provide information on that. What specifically would you like to know?',
      'more information on': 'I can provide details on that. What exactly are you looking for?',
      'explain': 'Sure, I can explain that. What specifically would you like to know?',
      'please explain': 'Of course! What would you like me to explain?',
      'provide details on': 'I can provide details on that. What exactly are you looking for?',
      'can you give me': 'Sure, what specifically would you like me to provide?',
      'could you assist': 'Of course, I’m here to assist. What do you need help with?',
      'do you have': 'Yes, I can provide that information. What specifically are you interested in?',
      'tell me more about': 'Certainly! What specifically would you like to know?',
      'can you tell me': 'I’d be happy to. What specifically would you like to know?',
      'what is': 'I can provide information on that. What specifically would you like to know about it?',
      'do you know': 'Yes, I have information on that. What specifically are you asking?',
      'I want to know': 'Sure, what specifically would you like to know?',
      'could you explain': 'Of course! What would you like me to explain?',
      'could you provide': 'Sure, what specifically would you like me to provide?',
      'can you explain': 'I’d be happy to explain. What specifically would you like me to explain?',
      'can I get': 'Sure, what specifically are you looking for?',
      'what are': 'I can provide information on that. What specifically are you asking about?',
      'where can I find': 'I can help you find that. What specifically are you looking for?',
      'where is': 'I can assist with that. What specifically are you looking for?',
      'how do I': 'I can help with that. What specifically are you trying to do?',
      'how to': 'I can assist with that. What specifically are you trying to accomplish?',
      'where can': 'I can assist with that. What specifically are you looking for?',
      'I am looking for': 'I can help with that. What specifically are you looking for?',
      'how can I find': 'I can assist with that. What specifically are you trying to find?',
      'what should I do': 'I can provide guidance on that. What specifically are you asking about?',
      'can you guide': 'I’d be happy to provide guidance. What specifically would you like guidance on?',
      'can you help me': 'Of course! What do you need assistance with?',
      'could you provide assistance': 'Of course! What do you need assistance with?',
      'can you assist me': 'Certainly! What can I assist you with?',
      'I need help': 'Sure, I’m here to help. What do you need assistance with?',
      'I require assistance': 'Of course, I’m here to assist. What do you need help with?',
      'help me': 'Sure, I’m here to help. What do you need assistance with?',
      'can you answer': 'I can certainly try to answer. What specifically are you asking?',
      'could you answer': 'I’ll do my best to answer. What specifically are you asking?',
      'can you give': 'I can provide information on that. What specifically would you like to know?',
      'can you provide': 'I can provide information on that. What specifically would you like to know?',
      'can you share': 'I can share information on that. What specifically would you like to know?',
      'can you tell': 'I can tell you about that. What specifically would you like to know?',
      'can you give me details': 'I can provide details on that. What specifically would you like to know?',
      'could you give me details': 'Sure, what specifically would you like me to provide?',
      'can you explain that': 'I’d be happy to explain. What specifically would you like me to explain?',
      'could you explain that': 'Of course! What would you like me to explain?',
      'can you explain this': 'I can explain that. What specifically would you like to know?',
      'could you explain this': 'Of course! What would you like me to explain?',
      'can you explain more': 'I’d be happy to explain more. What specifically would you like me to explain?',
      'could you explain more': 'Of course! What would you like me to explain?',
      'can you explain further': 'Sure, I can explain further. What specifically would you like me to explain?',
      'could you explain further': 'Of course! What would you like me to explain?',
      'can you explain in detail': 'I can explain in detail. What specifically would you like to know?',
      'could you explain in detail': 'Of course! What would you like me to explain?',
      'can you explain in more detail': 'I can explain in more detail. What specifically would you like to know?',
      'could you explain in more detail': 'Of course! What would you like me to explain?',
      'can you explain with examples': 'I can explain with examples. What specifically would you like to know?',
      'could you explain with examples': 'Of course! What would you like me to explain?',
      'can you provide examples': 'I can provide examples. What specifically would you like to know?',
      'could you provide examples': 'Sure, what specifically would you like me to provide?',
      'can you give me examples': 'I can provide examples. What specifically would you like to know?',
      'could you give me examples': 'Of course! What would you like me to explain?',
      'can you give me more details': 'I can provide more details. What specifically would you like to know?',
      'could you give me more details': 'Sure, what specifically would you like me to provide?',
      'can you give me further details': 'I can provide further details. What specifically would you like to know?',
      'could you give me further details': 'Of course! What would you like me to explain?',
      'can you give me more information': 'I can provide more information. What specifically would you like to know?',
      'could you give me more information': 'Sure, what specifically would you like me to provide?',
      'can you provide more information': 'I can provide more information. What specifically would you like to know?',
      'could you provide more information': 'Of course! What would you like me to explain?',
      'can you provide further information': 'I can provide further information. What specifically would you like to know?',
      'could you provide further information': 'Sure, what specifically would you like me to provide?',
      'can you provide additional information': 'I can provide additional information. What specifically would you like to know?',
      'could you provide additional information': 'Of course! What would you like me to explain?',
      'can you provide more details on that': 'I can provide more details on that. What specifically would you like to know?',
      'could you provide more details on that': 'Sure, what specifically would you like me to provide?',
      'can you provide further details on that': 'I can provide further details on that. What specifically would you like to know?',
      'could you provide further details on that': 'Of course! What would you like me to explain?',
      'can you provide more information on that': 'I can provide more information on that. What specifically would you like to know?',
      'could you provide more information on that': 'Sure, what specifically would you like me to provide?',
      'can you provide further information on that': 'I can provide further information on that. What specifically would you like to know?',
      'could you provide further information on that': 'Of course! What would you like me to explain?',
      'can you give me more details about that': 'I can provide more details about that. What specifically would you like to know?',
      
    };

    const response = responses[text.toLowerCase()] || responses['default'];
    chatLog.innerHTML += `AI: ${response}<br>`;
}
