/*

query {
  getAllViews {
    id, title
  }
}

{
  getView(id: "620134773cbe3c96e44f89d2") {
    title
  }
}

mutation CreateView {
  createView(input: {title: "Jinny", path: "Dinke"}) {
    id
    title
  }
}

mutation {
  deleteView(id: "62025f21b4c8d05a8e135728") {
    id
    title
  }
}

mutation {
  updateView(id: "62025f59b4c8d05a8e13572f", input: {
    title: "Vika", path: "github.com"
    }) {
    id
    title
  }
}

----------------------- Methods: -----------------------

export const getAllViews = () => {
    return db;
},

export const getView = ({ id }) => {
  return db.find(view => view.id == id);
},

export const createView = ({ input }) => {
  try {
    const newView = createNewView(input);
    return View.create({
      title: newView.title,
      path: newView.path,
      timestamp: (Date.now() / 1000).toFixed(),
    });
  } catch (err) {
    console.error('ERROR in createView:', err.message);
  }
},

----------------------- Errors: -----------------------

1.
Error: listen EADDRINUSE: address already in use :::8822

Solution: 
To find the process id (PID) associated with the port

=> lsof -i tcp:8822 

Then to kill the process

=> kill -9 44475
or
=> sudo kill -9 44475

======================= Links: =========================

Build a GraphQL Server with Node.js and MongoDB 
https://youtu.be/YFkJGEefgU8

Kill the process
shorturl.at/joBNU

*/
