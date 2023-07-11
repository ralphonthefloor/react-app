socket.on('session', (session) => {
    console.log(session);
    sessionStorage.setItem("id", session.id);
    sessionStorage.setItem("name", session.name);
    console.log("ID from storage: " + sessionStorage.getItem("id"));
    console.log("Listeners: " + Object.keys(socket._callbacks).toString().replaceAll('$',''));
  });