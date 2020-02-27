// pages/index/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieDetail:'',
    newstext:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  
  onSearch(e) {
    console.log(e.detail.value);
    var text = e.detail.value;
    var key = '0db489958b2e47e899c40f9b88a30e37';
    this.setData({
      show: true,
      newstext:text
    })
    this.searchMovie(text, key);
  },
  searchMovie(text, key) {
    var that = this;
    wx.request({
      url: 'https://api.avatardata.cn/ActNews/Query?key=' + key + '&keyword=' + text,
      header: {
        'content-type': 'json' // 默认值
      },
      success(res) {
        console.log(res);
        that.setData({
          movieDetail: res
        })
        console.log(that.data.movieDetail);
      }
    })
  },

  onCancelImgTap() {
    wx.navigateBack({
      url: '../../index/index'
    })
  },
  gonewsdetail(event,text){
    console.log(event.currentTarget.dataset.idx);
    var idx = event.currentTarget.dataset.idx;
    text=this.data.newstext;
    console.log(text);
    wx.navigateTo({
      url: 'news-detail/news-detail?text=' + text+'&idx='+idx,
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