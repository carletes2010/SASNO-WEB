import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4nqBYRE79R_rWlpE5cqClBtA_-zx4-5I",
  authDomain: "sasno-d79e1.firebaseapp.com",
  projectId: "sasno-d79e1",
  storageBucket: "sasno-d79e1.firebasestorage.app",
  messagingSenderId: "273171190720",
  appId: "1:273171190720:web:e9362e0d5206ac6f5c2e25",
  measurementId: "G-ZYDYKB9VWD"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// 🔒 Reemplaza con tu clave pública VAPID (de Firebase Console)
const vapidKey = "TU_CLAVE_VAPID_PUBLICA";

// 🛑 Solicitar permisos
Notification.requestPermission().then(permission => {
  if (permission === "granted") {
    getToken(messaging, { vapidKey }).then(currentToken => {
      console.log("FCM Token:", currentToken);
      // Enviar a backend si lo necesitas
    });
  }
});

// 🔔 Recibir mensaje cuando la página está abierta (foreground)
onMessage(messaging, payload => {
  console.log("Notificación recibida", payload);
  mostrarAlerta(payload.notification.title, payload.notification.body);
});

// 🔔 Mostrar alerta personalizada
function mostrarAlerta(titulo, mensaje) {
  const alerta = document.createElement("div");
  alerta.innerHTML = `
    <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:#FFA500;color:white;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:9999;">
      <h1 style="font-size:2em;">${titulo}</h1>
      <p style="font-size:1.5em;">${mensaje}</p>
      <button onclick="this.parentElement.remove()" style="margin-top:20px;font-size:1em;padding:10px;">Cerrar</button>
    </div>
  `;
  document.body.appendChild(alerta);
}

