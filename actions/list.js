/**
 * 罗列文档
 * @param {*} option 
 */
 const mapDir = require('../list.json')
module.exports = async function (option) {
  try {
    for(key in  mapDir){
      if(mapDir.hasOwnProperty(key)){
        console.log(`${key}:${mapDir[key].des}`)
      }
    }
    process.exit(0)
  } catch (error) {
    console.log(error)
  }
}