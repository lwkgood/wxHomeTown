// pages/user/user-register/user-register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '1999-03-29',
    items: [
    { name: '篮球', value: '篮球' },
    { name: '足球', value: '足球' },
    { name: '羽毛球', value: '羽毛球' }
    ]
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件,提交数据：', e.detail.value);
     
      let arr = wx.getStorageSync("test1") || [];
    arr.unshift({ userid: e.detail.value.userid, password: e.detail.value.password, name: e.detail.value.username, sex: e.detail.value.sex, phone: e.detail.value.phone, birthday: e.detail.value.birthday, interest: e.detail.value.interest });
      wx.setStorageSync("test1", arr)

      this.setData({
        history: wx.getStorageSync("test1")
      })

    wx.navigateBack({
      url: '../login/login',
    })
      console.log('提交成功');

  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  pickerchange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  login(){
   wx.navigateTo({
     url: '../login/login',
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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