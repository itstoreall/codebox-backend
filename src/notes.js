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

*/
