// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
var rp = require("request-promise");
// 云函数入口函数
exports.main = async (event, context) => {
  return rp(`http://api.tianapi.com/txapi/tianqi/?&key=1a102885a950cd8ec2aeb9355f7de0e0&city=上海`)
  .then( result => {
    console.log(result);
    return result;
  }).catch(err => {
    console.log(err);
  })
}