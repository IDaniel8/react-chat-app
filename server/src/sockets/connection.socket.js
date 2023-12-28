import * as UserService from "../services/user.service";

const errorCreator = (message) => {
  return { message };
};

function ConnectionSocket(io) {
  io.on("connection", (socket) => {
    socket.on("join", (requestUser, callback) => {
      if (
        !requestUser ||
        (!requestUser?.name && !requestUser?.room)
      ) {
        return callback(errorCreator("Invalid Access..."));
      } else if (UserService.getUserByName(requestUser.name)) {
        return callback(errorCreator("Name is already used..."));
      }

      const user = UserService.addUser({
        id: socket.id,
        name: requestUser.name,
        room: requestUser.room,
      });

      socket.emit("message", {
        user: "admin",
        text: `<strong>${user.name}</strong> welcome to the room <strong>${user.room}</strong>`,
      });

      socket.broadcast.to(user.room).emit("message", {
        user: "admin",
        text: `<strong>${user.name}</strong> has joined`,
      });

      socket.join(user.room);

      io.to(user.room).emit("roomData", {
        room: user.room,
        users: UserService.getUsersInRoom(user.room),
      });
    });

    socket.on("sendMessage", (message, callback) => {
      const user = UserService.getUser(socket.id);

      io.to(user.room).emit("message", {
        user: user.name,
        text: message,
      });

      callback();
    });

    socket.on("startTyping", (room) => {
      socket.broadcast.to(room).emit("someoneTyping", true);
    });

    socket.on("finishedTyping", (room) => {
      socket.broadcast.to(room).emit("someoneTyping", false);
    });

    socket.on("disconnect", () => {
      const user = UserService.removeUser(socket.id);

      if (user) {
        io.to(user.room).emit("message", {
          user: "admin",
          text: `User ${user.name} has left...`,
        });
        io.to(user.room).emit("roomData", {
          room: user.room,
          users: UserService.getUsersInRoom(user.room),
        });
      }
    });
  });
}

export default ConnectionSocket;
