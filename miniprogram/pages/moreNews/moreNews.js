// pages/moreNews/moreNews.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navlist: ["推荐", "体育", "科技","数码"],
    current:0,
    newsList:[]
    
  },
  changebar:function(e){
    this.setData({
      current: e.currentTarget.dataset.index
    });
    var pid = this.data.current == 0 ? "BBM54PGA" : this.data.current == 1 ? "BA8E6OEO" : this.data.current == 2 ? "BA8D4A3R" : "BAI6JOD9";
    wx.cloud.callFunction({
      name: "otherNews",
      data: {
        pid: pid,
        start: this.data.newsList.length,
        count: 10
      }
    }).then(res => {
      // var obj=JSON.parse(res.result);
      var len = res.result.length;
      var newRes = res.result.substring(19, len - 1);
      newRes = newRes.slice(0, 0) + '{"' + newRes.slice(0);
      var obj = JSON.parse(newRes);
      this.setData({
        newsList: obj.wangning
      });
    }).catch(err => {
      console.log(err);
    });
  },
  // 加载数据
  loadNews: function () {
    var pid = this.data.current == 0 ? "BBM54PGA" : this.data.current == 1 ? "BA8E6OEO" : this.data.current == 2 ? "BA8D4A3R" : "BAI6JOD9";
    wx.cloud.callFunction({
      name: "otherNews",
      data: {
        pid: pid,
        start: this.data.newsList.length,
        count: 10
      }
    }).then(res => {
      // var obj=JSON.parse(res.result);
      var len = res.result.length;
      var newRes = res.result.substring(19, len - 1);
      newRes=newRes.slice(0,0)+'{"'+newRes.slice(0);
      var obj = JSON.parse(newRes);
      this.setData({
        newsList: this.data.newsList.concat(obj.wangning)
      });
    }).catch(err => {
      console.log(err);
    });
  },
  jump:function(e){
    var id = e.target.dataset.newsid;
    // 保留并跳转
    wx.navigateTo({
      url: '/pages/newsItem/newsItem?id=' + id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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