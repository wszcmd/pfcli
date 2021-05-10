/**
 * 下载相应的模板
 * @param {*} option 
 */

const fs = require('fs')
const path = require('path')
const mapDir = require('../list.json')

module.exports = async function (option) {
  try {
    const { name } = option
    if(!name){
      console.log("请用 pfcli down -n  指定下载模板")
      process.exit(0)
    }
    const dir = mapDir[name]
    if(!dir){
      console.log("模板不存在")
      process.exit(0)
    }
    //模板目录
    const tmplDir = path.join(__dirname, '../temp')
    // 目标目录
    const destDir = process.cwd()
    dir.value.forEach(file=>{
      readable = fs.createReadStream( path.join(tmplDir, file) );
      // 创建写入流
      writable = fs.createWriteStream( path.join(destDir, file)  ); 
      // 通过管道来传输流
      readable.pipe( writable );
      console.log(`${file} 下载完成`)
    })
  } catch (error) {
    console.log(error)
  }
}