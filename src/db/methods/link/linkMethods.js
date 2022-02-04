import db from '../../models/index.js';

const { link: Link } = db;

const createNewLink = input => {
  console.log('createLink', input);
  const id = Date.now();
  return {
    id,
    ...input,
  };
};

export default () => {
  return {
    createLink: ({ input }) => {
      try {
        const newLink = createNewLink(input);
        return Link.create({
          href: newLink.href,
          anchor: newLink.anchor,
          source: newLink.source,
          timestamp: (Date.now() / 1000).toFixed(),
        });
      } catch (err) {
        console.error('ERROR in createLink:', err.message);
      }
    },
  };
};
