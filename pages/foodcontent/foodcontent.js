var WxParse = require('../../wxParse/wxParse.js');

// pages/foodcontent/foodcontent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    host: 'http://a.itying.com/'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.requestData(options.id);
  },

  requestData(id) {
    var that = this;
    var api = 'http://a.itying.com/api/productcontent?id=' + id;


    wx.request({
      url: api,    
      header: {
        'content-type': 'application/json' 
      },
      success: function (res) {
        var data = res.data.result[0];
        data.img_url = data.img_url.replace(/\\/g, '/');

        var article = data.content;
        WxParse.wxParse('article', 'html', article, that, 5);

        that.setData({
          list: data
        })
      }
    })
  }
})