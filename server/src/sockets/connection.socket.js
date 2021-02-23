import * as UserService from "../services/user.service";

function ConnectionSocket(io) {
  io.on("connection", (socket) => {
    socket.on("join", ({ name, room }, callback) => {
      const { error, user } = UserService.addUser({
        id: socket.id,
        name,
        room,
      });

      if (error) {
        return callback(error);
      }

      socket.emit("message", {
        user: "admin",
        text: `${user.name}, welcome to the room ${user.room}`,
      });
      socket.broadcast
        .to(user.room)
        .emit("message", { user: "admin", text: `${user.name}, has joined` });

      socket.join(user.room);

      io.to(user.room).emit("roomData", {
        room: user.room,
        users: UserService.getUsersInRoom(user.room),
      });

      callback();
    });

    socket.on("sendMessage", (message, callback) => {
      const user = UserService.getUser(socket.id);

      io.to(user.room).emit("message", { user: user.name, text: message });

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
