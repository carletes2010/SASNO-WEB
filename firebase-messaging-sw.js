importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyC4nqBYRE79R_rWlpE5cqClBtA_-zx4-5I",
  authDomain: "sasno-d79e1.firebaseapp.com",
  projectId: "sasno-d79e1",
  messagingSenderId: "273171190720",
  appId: "1:273171190720:web:e9362e0d5206ac6f5c2e25",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/assets/icon.png'
  });
});
