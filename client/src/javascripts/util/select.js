export const $ = (selector, baseNode = document) => {
  return baseNode.querySelector(selector);
};

export const $$ = (selector, baseNode = document) => {
  return baseNode.querySelectorAll(selector);
};
