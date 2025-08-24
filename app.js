// // @ts-nocheck

// const johnSelectorBtn = document.querySelector('#john-selector')
// const janeSelectorBtn = document.querySelector('#jane-selector')
// const marySelectorBtn = document.querySelector('#mary-selector')
// const peterSelectorBtn = document.querySelector('#peter-selector')
// const chatHeader = document.querySelector('.chat-header')
// const chatMessages = document.querySelector('.chat-messages')
// const chatInputForm = document.querySelector('.chat-input-form')
// const chatInput = document.querySelector('.chat-input')
// const clearChatBtn = document.querySelector('.clear-chat-button')


// const messages = JSON.parse(localStorage.getItem('messages')) || []

// const createChatMessageElement = (message) => `
//   <div class="message ${message.sender === 'John' ? 'blue-bg' : 'gray-bg'}">
//     <div class="message-sender">${message.sender}</div>
//     <div class="message-text">${message.text}</div>
//     <div class="message-timestamp">${message.timestamp}</div>
//   </div>
// `

// window.onload = () => {
//   messages.forEach((message) => {
//     chatMessages.innerHTML += createChatMessageElement(message)
//   })
// }

// let messageSender = 'John'

// const updateMessageSender = (name) => {
//   messageSender = name
//   chatHeader.innerText = `${messageSender} chatting...`
//   chatInput.placeholder = `Type here, ${messageSender}...`

//   if (name === 'John') {
//     johnSelectorBtn.classList.add('active-person')
//     janeSelectorBtn.classList.remove('active-person')
//     marySelectorBtn.classList.remove('active-person')
//     peterSelectorBtn.classList.remove('active-person')
//   }
//   if (name === 'Jane') {
//     janeSelectorBtn.classList.add('active-person')
//     johnSelectorBtn.classList.remove('active-person')
    
//   }
//   if (name === 'Mary') {
//     marySelectorBtn.classList.add('active-person')
//     johnSelectorBtn.classList.remove('active-person')
//   }
//   if (name === 'Peter') {
//     peterSelectorBtn.classList.add('active-person')
//     johnSelectorBtn.classList.remove('active-person')
//   }



//   /* auto-focus the input field */
//   chatInput.focus()
// }

// johnSelectorBtn.onclick = () => updateMessageSender('John')
// janeSelectorBtn.onclick = () => updateMessageSender('Jane')
// marySelectorBtn.onclick=()=>updateMessageSender('Mary')
// peterSelectorBtn.onclick=()=>updateMessageSender('Peter')

// const sendMessage = (e) => {
//   e.preventDefault()

//   const timestamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
//   const message = {
//     sender: messageSender,
//     text: chatInput.value,
//     timestamp,
//   }
//   const updateChat = (name) => {
//     // Update chat header
//     chatHeader.innerText = `${name} chatting...`
  
//     // Clear existing messages
//     chatMessages.innerHTML = ''
  
//     // Filter and display messages for selected user
//     messages.forEach((message) => {
//       if (message.sender === name) {
//         chatMessages.innerHTML += createChatMessageElement(message)
//       }
//     })
  
//     // Auto-scroll to the latest message
//     chatMessages.scrollTop = chatMessages.scrollHeight
//   }
  
//   // Event listeners for user selection
//   johnSelectorBtn.addEventListener('click', () => updateChat('John'))
//   janeSelectorBtn.addEventListener('click', () => updateChat('Jane'))
//   marySelectorBtn.addEventListener('click', () => updateChat('Mary'))
// peterSelectorBtn.addEventListener('click', () => updateChat('Peter'))
//   /* Save message to local storage */
//   messages.push(message)
//   localStorage.setItem('messages', JSON.stringify(messages))

//   /* Add message to DOM */
//   chatMessages.innerHTML += createChatMessageElement(message)

//   /* Clear input field */
//   chatInputForm.reset()

//   /*  Scroll to bottom of chat messages */
//   chatMessages.scrollTop = chatMessages.scrollHeight
// }

// chatInputForm.addEventListener('submit', sendMessage)

// clearChatBtn.addEventListener('click', () => {
//   localStorage.clear()
//   chatMessages.innerHTML = ''
// })





//new chat
const johnSelectorBtn = document.querySelector('#john-selector');
const janeSelectorBtn = document.querySelector('#jane-selector');
const marySelectorBtn = document.querySelector('#mary-selector');
const peterSelectorBtn = document.querySelector('#peter-selector');
const chatHeader = document.querySelector('.chat-header');
const chatMessages = document.querySelector('.chat-messages');
const chatInputForm = document.querySelector('.messageForm');
const chatInput = document.querySelector('.chat-input');
const clearChatBtn = document.querySelector('.clear-chat-button');

const messages = JSON.parse(localStorage.getItem('messages')) || [];

const createChatMessageElement = (message) => `
  <div class="message ${message.sender === 'John' ? 'blue-bg' : message.sender=='Jane'?'gray-bg': message.sender=='Mary'?'black-bg' : 'white-bg'}">
    <div class="message-sender">${message.sender}</div>
    <div class="message-text">${message.text}</div>
    <div class="message-timestamp">${message.timestamp}</div>
  </div>
`;

window.onload = () => {
  messages.forEach((message) => {
    chatMessages.innerHTML += createChatMessageElement(message);
  });
};

let messageSender = 'John';

const updateMessageSender = (name) => {
  messageSender = name;
  chatHeader.innerText = `${messageSender} chatting...`;
  chatInput.placeholder = `Type here, ${messageSender}...`;

  if (name === 'John') {
    johnSelectorBtn.classList.add('active-person');
    janeSelectorBtn.classList.remove('active-person');
    marySelectorBtn.classList.remove('active-person')
    peterSelectorBtn.classList.remove('active-person')
  }
  if (name === 'Jane') {
    janeSelectorBtn.classList.add('active-person');
    johnSelectorBtn.classList.remove('active-person');
    marySelectorBtn.classList.remove('active-person');
    peterSelectorBtn.classList.remove('active-person');
  }
  if (name === 'Mary') {
        marySelectorBtn.classList.add('active-person');
        johnSelectorBtn.classList.remove('active-person');
        janeSelectorBtn.classList.remove('active-person');
        peterSelectorBtn.classList.remove('active-person');
      }
  if (name === 'Peter') {
        peterSelectorBtn.classList.add('active-person');
        johnSelectorBtn.classList.remove('active-person');
        janeSelectorBtn.classList.remove('active-person');
        marySelectorBtn.classList.remove('active-person');
      }
    

  chatInput.focus(); // Auto-focus the input field
};

johnSelectorBtn.onclick = () => updateMessageSender('John');
janeSelectorBtn.onclick = () => updateMessageSender('Jane');
marySelectorBtn.onclick = () => updateMessageSender('Mary');
peterSelectorBtn.onclick = () => updateMessageSender('Peter');


const sendMessage = (message) => {
  const timestamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  const newMessage = {
    sender: messageSender,
    text: message,
    timestamp,
  };

  messages.push(newMessage);
  localStorage.setItem('messages', JSON.stringify(messages));

  chatMessages.innerHTML += createChatMessageElement(newMessage);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom of chat messages
};

// chatInputForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   sendMessage(chatInput.value);
//   chatInput.value = ''; // Clear input field
// });

clearChatBtn.addEventListener('click', () => {
  localStorage.clear();
  chatMessages.innerHTML = ''; // Clear chat messages
});


// Function to send a scheduled message
function sendScheduledMessage(message, scheduleTime) {
  // Parse the schedule time
  const scheduledTime = new Date(scheduleTime);

  // Get the current time
  const currentTime = new Date();

  // Check if the scheduled time is in the future
  if (scheduledTime > currentTime) {
    // Calculate the time difference in milliseconds
    const timeDiff = scheduledTime - currentTime;
    alert("The message is scheduled successfully");
    // Schedule sending the message
    setTimeout(() => {
      
      sendMessage(message);
      
       // Call sendMessage function to send the message
    }, timeDiff);
  } else {
    // alert("Scheduled time must be in the future.");
    sendMessage(message);
  }
}


document.querySelector('.messageForm').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  const messageInput = document.getElementById('messageInput');
  const scheduleTimeInput = document.getElementById('scheduleTime');

  const message = messageInput.value;
  const scheduleTime = scheduleTimeInput.value;

  
  sendScheduledMessage(message, scheduleTime);

 
  messageInput.value = '';
  scheduleTimeInput.value = '';
});
