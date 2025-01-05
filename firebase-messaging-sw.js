// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAuNxX91qBiW-UlNjlZAAaM3MAvaWhqg6I",
  authDomain: "the-date-manager-72181.firebaseapp.com",
  projectId: "the-date-manager-72181",
  storageBucket: "the-date-manager-72181.firebasestorage.app",
  messagingSenderId: "769944546758",
  appId: "1:769944546758:web:2ffc363df966ddc8ba16c7",
  measurementId: "G-WSHQ60K2G3"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
