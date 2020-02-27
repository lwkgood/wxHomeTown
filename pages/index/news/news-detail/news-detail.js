var WxParse = require('../../../../wxParse/wxParse.js');

// pages/index/news/news-detail/news-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsDetail:'',
    index:'',
    bottomText: "正在加载中",
    isEnd: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  console.log(options);
   var idx=options.idx;
   var text = options.text;
   var key = '0db489958b2e47e899c40f9b88a30e37';
   var that=this;
    wx.request({
      url: 'https://api.avatardata.cn/ActNews/Query?key=' + key + '&keyword=' + text,
      header: {
        'content-type': 'json' // 默认值
      },
      success(res) {
        console.log(res);
        //解析html
        var article = res.data.result[idx].content;
        console.log(article);
        WxParse.wxParse('article', 'html', article, that, 5);

        that.setData({
          newsDetail: res,
          index:idx,
          isEnd:true
        })
        console.log(that.data.newsDetail);
        console.log(that.data.index);
      }
    })
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