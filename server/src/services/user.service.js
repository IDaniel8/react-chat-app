const path = require("path");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync(path.join(__dirname, "../../db.json"));
const db = low(adapter);

const addUser = ({ id, name, room }) => {
  const newUser = {
    id,
    name: name.trim().toLowerCase(),
    room: room.trim().toLowerCase(),
  };

  db.get("users").push(newUser).write();

  return newUser;
};

const removeUser = (id) => {
  const presentUser = db.get("users").find({ id });

  if (presentUser.value()) {
    const userRemoved = { ...presentUser.value() };
    db.get("users").remove({ id }).write();
    return userRemoved;
  }
};

const getUser = (id) => {
  return db.get("users").find({ id }).value();
};

const getUserByName = (name) => {
  return db.get("users").find({ name }).value();
};

const getUsersInRoom = (room) => {
  return db.get("users").filter({ room }).value();
};

const getAllUsers = () => {
  return db.get("users").value();
};

export {
  addUser,
  removeUser,
  getUser,
  getUserByName,
  getUsersInRoom,
  getAllUsers,
};
