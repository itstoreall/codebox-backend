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

------------------------ Methods ------------------------

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

*/
