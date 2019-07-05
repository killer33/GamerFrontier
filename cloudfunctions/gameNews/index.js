// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
var rp = require("request-promise");
// 云函数入口函数
exports.main = async (event, context) => {
  return rp(`https://3g.163.com/touch/reconstruct/article/list/BAI6RHDKwangning/${event.start}-${event.count}.html`).then(res=>{
    console.log(res);
    return res;
  }).catch(err=>{
    console.log(err);
  })
}