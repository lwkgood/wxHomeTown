var posts = require("../../../utils/posts-data.js");
// pages/scenic/scenic-detail/scenic-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postsData: {},
    idx:'',
    cur:''
  },
  
  setStorage: function (e) {
    console.log(e.currentTarget.dataset.name);
    console.log(e.currentTarget.dataset.img);
    var img = e.currentTarget.dataset.img;
    var name = e.currentTarget.dataset.name;
    let arr = wx.getStorageSync("test2") || [];
    arr.unshift({ name: name,img:img});
    wx.setStorageSync("test2", arr)

    this.setData({
      history: wx.getStorageSync("test2")
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var idx=options.idx;
    var cur=options.cur;
    this.setData({
      postsData: posts,
      idx:idx,
      cur:cur
    })
    console.log(idx);
    console.log(cur);
    console.log(this.data.postsData)
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