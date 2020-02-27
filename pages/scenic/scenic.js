var posts = require("../../utils/posts-data.js");
// pages/scenic/scenic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   

    postsData: {},

   currentTab:0,
   tabItemsArray:[{name:"白花镇",id:11},{name:"平海镇",id:14},{name:"稔山镇",id:9}]
  },
  
  swichNav:function(e){
    console.log(e);
    var that=this;
    if(this.data.currentTab===e.target.dataset.current){
      return false;
    }else{
      that.setData({
        currentTab:e.target.dataset.current
      })
    }
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
  
  godetail(e){
    console.log(e);
    console.log(e.currentTarget.dataset.idx);
    var cur=this.data.currentTab;
    var idx = e.currentTarget.dataset.idx;
    console.log(this.data.currentTab);
    wx.navigateTo({
      url: 'scenic-detail/scenic-detail?idx='+idx + '&cur='+ cur,
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