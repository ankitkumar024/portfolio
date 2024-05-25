// helpers.js
export const getImagePath = (path) => {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
  return `${basePath}${path}`;
};
