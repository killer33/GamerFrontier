// pages/person/person.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:'北京市',
    county:'海淀区',
    today:""
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const formatTime = date => {
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      return [year, month, day].map(formatNumber).join('/')
    }
    const formatNumber = n => {
      n = n.toString()
      return n[1] ? n : '0' + n
    }
    app.globalData.day = formatTime(new Date());
    this.setData({
      today: app.globalData.day
    });
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})