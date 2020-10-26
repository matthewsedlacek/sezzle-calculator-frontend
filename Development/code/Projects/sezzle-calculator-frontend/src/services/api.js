const API = `http://localhost:3000`;
const RANDOM_PET = `http://pet-library.moonhighway.com/api/randompet`;
const token = () => localStorage.getItem("token");

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
};

const randomPetHeaders = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
};

const login = (data) => {
  return fetch(`${API_ROOT}/login`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ user: data }),
  }).then((res) => res.json());
};

const getCurrentUser = (data) => {
  return fetch(`${API_ROOT}/profile`, {
    method: "GET",
    headers: headers(),
  }).then((res) => res.json());
};

const createUser = (data) => {
  return fetch(`${API_ROOT}/users/`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      user: {
        username: data.username,
      },
    }),
  }).then((res) => res.json());
};

const getPet = () => {
  return fetch(`${RANDOM_PET}`, { headers: randomPetHeaders() }).then((res) =>
    res.json()
  );
};

const getMessages = () => {
  return fetch(`${API}/messages/`, { headers: headers() }).then((res) =>
    res.json()
  );
};

const newMessage = (data, currentUser) => {
  return fetch(`${API}/messages`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      message_text: data.value,
      username: currentUser,
    }),
  }).then((res) => res.json());
};

export const api = {
  auth: {
    login,
    getCurrentUser,
  },
  newUser: {
    createUser,
  },
  userData: {
    getMessages,
    newMessage,
  },
};
