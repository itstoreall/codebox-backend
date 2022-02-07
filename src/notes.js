/*

query {
  getAllViews {
    id, title, path, links {
      id, href, anchor, source
    }
  }
}

mutation {
  createView(input: {
    title: "Netflix view"
    path: "netflix.com"
    links: [
      {id: 1, href: "/netflix", anchor: "Netflix", source: "git.com" }
    ]
  }) {
    id, title, path, links {id, href, anchor, source}
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

if you have this:
"scripts": {
  "dev": "nodemon --exec babel-node src/index.js",
  "start": "node --exec babel-node src/index.js"
},

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
