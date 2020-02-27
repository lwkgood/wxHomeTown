// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:
    [
        {text:'个人中心',img:'/images/user/1.png',url:'me/me'},
        { text: '我的收藏', img: '/images/user/3.png', url: 'collection/collection'},
        { text: '联系客服', img: '/images/user/2.png', url: '#'},
        { text: '关于我们', img: '/images/user/4.png', url: '#'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  register() {
    wx.navigateTo({
      url: 'login/login',
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