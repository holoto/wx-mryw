//index.js
//获取应用实例
const app = getApp()
const api = require('../../utils/api.js')




Page({

  /**
   * 页面的初始数据
   */
  data: {
    articledata: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // console.log(api.today)
    // this.gettodayarticle()
    this.get()
    wx.showShareMenu({
      withShareTicket: true
    })



  },
 
  async get() {
    await api.getrandomarticle().then(
      res => {
        this.setData({
          articledata: res.data
        })

        wx.setNavigationBarTitle({
          title: res.data.title+'----'+res.data.author
        })
      }
    );
    // console.log(a)

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.get()
    wx.stopPullDownRefresh()

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.get()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
