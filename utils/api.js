const baseurl ='https://interface.meiriyiwen.com/article/';
const suiji =baseurl+'random?dev=1';
const today=baseurl+'today?dev=1';
const dateurl=baseurl+'day?dev=1&date=';
const wxget=(url,getres)=>{
  return new Promise(
    (resolve, reject) => {
      wx.request({
        url: url,
        success: function (res) {
        
          resolve(res.data)

        },
        fail: function (res) {
          reject(res)
        },
        complete: function (res) {

        },
        dd: function () {

        }
      })
    }
  )
};
const getrandomarticle=(getres)=>{
  return wxget(suiji,getres);

};
const gettodayarticle=(getres)=>{
  return wxget(today,getres);
};
const getdatearticle=(date,getres)=>{
  wxget(dateurl+date,getres);

};

module.exports = {
  getrandomarticle,
  gettodayarticle,
  baseurl,
  suiji,
  dateurl,
  today
};
