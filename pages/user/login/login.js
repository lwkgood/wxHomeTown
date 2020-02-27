// pages/user/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   disabled:true,
   btnstate:"default",
   account:"",
   password:"",
   history:'',
   userid:"",
   userpwd:""
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },


  accountInput: function (e) {
    var content = e.detail.value;
    console.log(content);
    if (content !='') {
      this.setData({ disabled: false, btnstate: "primary",userid:content });
    } else {
      this.setData({ disabled: true, btnstate: "default" });
    }
    console.log(this.data.userid);
  },
  pwdBlur: function (e) {
    var password = e.detail.value;
    if (password !='') {
      this.setData({ password: password,userpwd:password });
    }
    console.log(this.data.userpwd);
  },
  login(){

    console.log(this.data.history);

    for(var i=0;i<this.data.history.length;i++){
      console.log(this.data.history[i]);
    }
     
    if(this.data.userid==this.data.history[0].userid&&this.data.userpwd==this.data.history[0].password){
      wx.navigateBack({
        url: '/user/user'
      })
    }else{
      wx.showToast({
        title: '账号或密码错误!',
        image:'../../../images/login/x.png'
      });
    }
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
    var history = wx.getStorageSync('test1');
    this.setData({
      history: history
    })
    console.log(history);
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