// pages/newsPage/newsPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bnrUrl: [],
    newsList:[]
  },
  // 加载数据
  loadNews:function(){
    wx.cloud.callFunction({
      name:"gameNews",
      data:{
        start:this.data.newsList.length,
        count:10
      }
    }).then(res=>{
      // var obj=JSON.parse(res.result);
      var len = res.result.length;
      var obj = JSON.parse(res.result.substring(9, len - 1));
      this.setData({
        newsList: this.data.newsList.concat(obj.BAI6RHDKwangning)
      });
    }).catch(err => {
      console.log(err);
    });
  },
  loadbnr:function(){
    wx.cloud.callFunction({
      name: "gameNews",
      data: {
        start: 0,
        count: 4
      }
    }).then(res => {
      var len = res.result.length;
      var obj = JSON.parse(res.result.substring(9, len - 1));
      for (var i = 0; i < 4; i++) {
        this.setData({
          bnrUrl: this.data.bnrUrl.concat(obj.BAI6RHDKwangning[i].imgsrc)
        })
      }
    }).catch(err => {
      console.log(err);
    });
  },
  // 跳转页面
  jump:function(e){
    var id = e.target.dataset.newsid;
    // 保留并跳转
    wx.navigateTo({
      url: '/pages/newsItem/newsItem?id='+id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadbnr();
    this.loadNews();
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
    this.loadNews();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})