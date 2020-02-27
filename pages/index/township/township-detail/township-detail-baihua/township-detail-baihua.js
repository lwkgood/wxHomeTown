var posts = require("../../../../../utils/posts-data.js");
// pages/index/township/township-detail/township-detail-baihua/township-detail-baihua.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    index:'',
    postsData: {},
    autoplay: true,
    interval: 5000,
    duration: 200,



    markers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var idx=options.idx;
    this.setData({
      postsData: posts,
      index:idx
    })
    console.log(this.data.postsData);
    console.log(this.data.index);
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
   this.setData({
     markers:[ {
       id: 1,
       latitude: posts.postList[1].baihua[this.data.index].latitude,
       longitude: posts.postList[1].baihua[this.data.index].longitude,
     }]
   })
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