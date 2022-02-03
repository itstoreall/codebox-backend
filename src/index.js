import 'dotenv/config';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import db from './db/models/index.js';
import schema from './schema/schema.js';

const { view, link } = db;

// view
//   .create({
//     title: 'test_2',
//     path: 'test_2',
//     timestamp: Date.now(),
//   })
//   .then(res => console.log(res));

// link
//   .create({
//     href: 'test_2',
//     anchor: 'test_2',
//     source: 'test_2',
//     timestamp: Date.now(),
//   })
//   .then(res => console.log(res));

const dbArr = [
  {
    id: 'v1',
    title: 'Home',
    path: '/',
    links: [
      {
        l_id: 'v1-l1',
        href: '/',
        anchor: 'Home',
        source: '',
      },
    ],
  },
  {
    id: 'v2',
    title: 'Layout',
    path: '/layout',
    links: [
      {
        id: 'v2-l1',
        href: '/layout/styled-components',
        anchor: 'Styled Components',
        source:
          'https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Layout/StyledComponents',
      },
      {
        id: 'v2-l2',
        href: '/layout/moving-square',
        anchor: 'Moving square',
        source:
          'https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Layout/MovingSquare',
      },
    ],
  },
  {
    id: 'v3',
    title: 'Components',
    path: '/components',
    links: [
      {
        id: 'v3-l1',
        href: '/components/dragndrop',
        anchor: 'Drag and Drop',
        source:
          'https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Components/DragAndDrop',
      },
      {
        id: 'v3-l2',
        href: '/components/dropdown',
        anchor: 'Dropdown',
        source:
          'https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Components/Dropdown',
      },
      {
        id: 'v3-l3',
        href: '/components/feature',
        anchor: 'Feature',
        source:
          'https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Components/Feature',
      },
      {
        id: 'v3-l4',
        href: '/components/inputs',
        anchor: 'Inputs',
        source:
          'https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Components/Inputs',
      },
      {
        id: 'v3-l5',
        href: '/components/pagination',
        anchor: 'Pagination',
        source:
          'https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Components/Pagination',
      },
      {
        id: 'v3-l6',
        href: '/components/reused-modal',
        anchor: 'Reused Modal',
        source:
          'https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Components/ReusedModal',
      },
    ],
  },
  {
    id: 'v4',
    title: 'Functions',
    path: '/functions',
    links: [
      {
        id: 'v4-l1',
        href: '/functions/closures',
        anchor: 'Closures',
        source:
          'https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Functions/Closures',
      },
      {
        id: 'v4-l2',
        href: '/functions/recursion',
        anchor: 'Recursion',
        source:
          'https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Functions/Recursion',
      },
    ],
  },
  {
    id: 'v5',
    title: 'Hooks',
    path: '/hooks',
    links: [
      {
        id: 'v5-l1',
        href: '/hooks/usecontext',
        anchor: 'useContext',
        source:
          'https://github.com/itstoreall/codebox/tree/main/src/components/Categories/Hooks/UseContext',
      },
    ],
  },
];

const app = express();
const PORT = process.env.PORT || 5000;
const logServer = () => console.log(`server started on post: ${PORT}`);

const createView = input => {
  const id = Date.now();
  return {
    id,
    ...input,
  };
};

// resolver
const root = {
  getAllViews: () => {
    return dbArr;
  },
  getView: ({ id }) => {
    return dbArr.find(view => view.id == id);
  },
  createView: ({ input }) => {
    const view = createView(input);
    dbArr.push(view);
    return view;
  },
};

app.use(cors());
app.use(express.json());
app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  })
);

app.listen(PORT, logServer);
