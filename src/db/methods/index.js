import viewMethods from './view/viewMethods.js';
import linkMethods from './link/linkMethods.js';

const { getAllViews, getView, createView } = viewMethods();
const { createLink } = linkMethods();

export default {
  getAllViews,
  getView,
  createView,
  createLink,
};
