const API = `http://localhost:3000`;
const RANDOM_PET = `http://pet-library.moonhighway.com/api/randompet`;

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
};

const getPet = () => {
  return fetch(`${RANDOM_PET}`, { headers: headers() }).then((res) =>
    res.json()
  );
};

const getMessages = () => {
  return fetch(`${API}/messages`, { headers: headers() }).then((res) =>
    res.json()
  );
};

const newMessage = (message, currentUser) => {
  console.log(message, currentUser);
  return fetch(`${API}/messages`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      text: message,
      username: currentUser,
      conversation_id: 1,
    }),
  }).then((res) => res.json());
};

export const api = {
  user: {
    getPet,
  },
  messages: {
    getMessages,
    newMessage,
  },
};
