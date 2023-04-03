module.exports = function (code){
  const data = {msg:code}
  return `export default ${JSON.stringify(data)}`;
}