// pages/food/food.js
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
    this.requestData();
  },
  gofooddetail(e) {
    console.log(e.currentTarget.dataset.id);
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../foodcontent/foodcontent?id=' + id
    })
  },
  requestData() {
    var that = this;

    wx.request({
      url: 'http://a.itying.com/api/productlist',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        var arr = res.data.result;
        for (var i = 0; i < arr.length; i++) {
          for (var j = 0; j < arr[i].list.length; j++) {
            arr[i].list[j].img_url = arr[i].list[j].img_url.replace(/\\/g, '/');
          }
        }
        that.setData({
          list: arr
        })
      }
    })
  }
})