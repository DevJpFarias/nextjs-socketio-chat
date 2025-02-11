// 'https://socketio-chat-server-p26x.onrender.com'
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const url = 'http://localhost:3000'

const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(url);

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return socket;
};

export default useSocket;