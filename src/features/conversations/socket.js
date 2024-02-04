// socket.js
import  io  from "socket.io-client";

const socket = io("localhost:9000/", {
  reconnectionDelay: 1000,
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: 10,
  transports: ["websocket"],
  agent: false,
  upgrade: false,
  rejectUnauthorized: false,
});

// socket.on("connect_error", (err) => {
//     console.error("Socket connection error:", err);
//   });
export default socket;
