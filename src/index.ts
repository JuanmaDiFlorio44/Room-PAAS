// Importa las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAs_fHM_PXBfvHjuTCJYdx4RxAyUc3HjUw",
  authDomain: "rooms-20b4f.firebaseapp.com",
  databaseURL: "https://rooms-20b4f-default-rtdb.firebaseio.com",
  projectId: "rooms-20b4f",
  storageBucket: "rooms-20b4f.firebasestorage.app",
  messagingSenderId: "876171926343",
  appId: "1:876171926343:web:812df2d9d4cc55edb10a62",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const bd = getFirestore(app);

// Función para registrar el correo en Firestore
const registerEmail = async (email: string) => {
  const usersCollection = collection(bd, "users");
  const emailQuery = query(usersCollection, where("email", "==", email));

  const querySnapshot = await getDocs(emailQuery);

  if (querySnapshot.empty) {
    // Si el correo no está registrado, lo registramos
    const nombreInput = document.getElementById("nombre") as HTMLInputElement;
    const nombre = nombreInput.value;
    try {
      await addDoc(usersCollection, {
        email: email,
        createdAt: new Date(),
        user: nombre,
      });
      console.log("Correo registrado con éxito");
      localStorage.setItem("email", email);
      localStorage.setItem("user", nombre); // Guardar el email en localStorage
      alert("Registro exitoso, ahora puedes ingresar al chat.");
      document.getElementById("welcomePage")!.style.display = "none";
      document.getElementById("chatPage")!.style.display = "block";
    } catch (error) {
      console.error("Error al registrar el correo:", error);
      alert("Hubo un error al registrar el correo. Intenta nuevamente.");
    }
  } else {
    alert("Este correo ya está registrado.");
  }
};

// Función para iniciar sesión con el correo en Firestore
const loginEmail = async (email: string) => {
  const usersCollection = collection(bd, "users");
  const emailQuery = query(usersCollection, where("email", "==", email));

  const querySnapshot = await getDocs(emailQuery);

  if (!querySnapshot.empty) {
    localStorage.setItem("email", email);
    document.getElementById("welcomePage")!.style.display = "none";
    document.getElementById("chatPage")!.style.display = "block";
    listenForMessages(); // Comienza a escuchar los mensajes si el login es exitoso
  } else {
    alert("Este correo no está registrado. Por favor, regístrate primero.");
  }
};

// Función para validar el formato del correo
function validarEmail(email: string): boolean {
  const expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return expresionRegular.test(email);
}

// Función para manejar el correo y permitir acceder al chat
const setupEmailValidation = () => {
  const emailInput = document.getElementById("emailInput") as HTMLInputElement;
  const registerButton = document.getElementById("registerButton")!;
  const loginButton = document.getElementById("loginButton")!;

  // Al hacer clic en "Registrar"
  registerButton.addEventListener("click", () => {
    const email = emailInput.value;
    if (validarEmail(email)) {
      registerEmail(email); // Llama a la función para registrar el correo
    } else {
      alert("Por favor, ingresa un correo válido.");
    }
  });

  // Al hacer clic en "Ingresar"
  loginButton.addEventListener("click", () => {
    const email = emailInput.value;
    if (validarEmail(email)) {
      loginEmail(email); // Llama a la función para verificar y acceder
    } else {
      alert("Por favor, ingresa un correo válido.");
    }
  });
};

// Función para enviar mensajes
const sendMessage = async (message: string) => {
  if (message.trim()) {
    try {
      const messagesRef = ref(db, "messages"); // Referencia a la colección de mensajes
      const user = localStorage.getItem("user");

      await push(messagesRef, {
        text: message,
        user: user,
        email: localStorage.getItem("email"),
        createdAt: new Date().toISOString(),
      });

      console.log("Mensaje enviado:", message);
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
    }
  }
};

// Función para escuchar mensajes
const listenForMessages = () => {
  const messagesRef = ref(db, "messages");
  onValue(messagesRef, (snapshot) => {
    const messages = snapshot.val();
    if (messages) {
      const messagesArray = Object.values(messages);
      renderMessages(messagesArray);
    }
  });
};

// Función para obtener el nombre del usuario desde Firestore
const getUserNameByEmail = async (email: string) => {
  const usersCollection = collection(bd, "users");
  const emailQuery = query(usersCollection, where("email", "==", email));

  const querySnapshot = await getDocs(emailQuery);
  if (!querySnapshot.empty) {
    const userDoc = querySnapshot.docs[0];
    return userDoc.data().user; // Suponiendo que el campo "user" contiene el nombre
  }
  return null;
};

// Función para renderizar mensajes
const renderMessages = async (messages: any[]) => {
  const messagesDiv = document.getElementById("messages")!;

  // Renderizar todos los mensajes
  for (const msg of messages) {
    const userName = await getUserNameByEmail(msg.email); // Obtenemos el nombre del usuario a partir del correo
    const userDisplayName = userName ? userName : "Usuario desconocido"; // En caso de que no se encuentre el nombre, mostramos "Usuario desconocido"
    const messageHtml = `<p><b>${userDisplayName}:</b> ${msg.text}</p>`;
    messagesDiv.innerHTML += messageHtml;
  }

  messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

// Configuración de navegación entre páginas
const setupNavigation = () => {
  const welcomePage = document.getElementById("welcomePage")!;
  const chatPage = document.getElementById("chatPage")!;
  const goBackButton = document.getElementById("goBack")!;

  // Volver a la página de bienvenida
  goBackButton.addEventListener("click", () => {
    chatPage.style.display = "none";
    welcomePage.style.display = "block";
  });
};

// Configuración de eventos para enviar mensajes
const setupChatEvents = () => {
  const sendButton = document.getElementById("sendButton")!;
  const messageInput = document.getElementById(
    "messageInput"
  ) as HTMLInputElement;

  sendButton.addEventListener("click", () => {
    sendMessage(messageInput.value);
    messageInput.value = "";
  });

  messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage(messageInput.value);
      messageInput.value = "";
    }
  });
};

// Inicialización de la app
const initApp = () => {
  setupNavigation();
  setupChatEvents();
  setupEmailValidation();
};

// Ejecuta la inicialización al cargar la página
window.addEventListener("DOMContentLoaded", initApp);
