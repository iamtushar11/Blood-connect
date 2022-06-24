const setData = (name, data) => {
  localStorage.setItem(name, data);
};
const getData = (name) => {
  return localStorage.getItem(name);
};
export { setData, getData };
