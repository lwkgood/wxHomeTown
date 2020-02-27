var posts = require("../../utils/posts-data.js");

// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    
    videoimage: "block",//默认显示封面
    bindplay: null,
    _index: 0,

    postsData: {},
    imgUrls: [
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg'
    ],
    autoplay: true,
    interval: 5000,
    duration: 200
  },
   

  //点击播放按钮，封面图片隐藏,播放视频
  bindplay: function (e) {
    var index = e.currentTarget.dataset.id;
    var that = this;
    this.setData({
      index: index
    })
    console.log(e);
    //停止正在播放的视频
    var videoContextPrev = wx.createVideoContext("myVideo" + that.data._index)
    videoContextPrev.seek(0)
    videoContextPrev.pause()

    setTimeout(function () {
      //将点击视频进行播放
      var videoContext = wx.createVideoContext('myVideo' + index)
      videoContext.play();
      that.data._index = index;
      console.log(index);
    }, 0)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      postsData: posts
    })
    console.log(this.data.postsData)
  },
   
  township: function(){
    wx.navigateTo({
      url: 'township/township',
    })
  },
  history:function(){
    wx.navigateTo({
      url: 'history/history',
    })
  },
  news: function () {
    wx.navigateTo({
      url: 'news/news',
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