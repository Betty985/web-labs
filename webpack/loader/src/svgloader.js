module.exports = function (code){
  return `export default ${JSON.stringify(code)}`;
}