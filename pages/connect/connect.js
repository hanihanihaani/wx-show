// pages/connect/connect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "/static/address.png",
      latitude: 34.044592,
      longitude: 113.867503,
      width: 50,
      height: 50
    }],
  },
  makePhoneCall: function() {
    wx.makePhoneCall({
      phoneNumber: '18839967020',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.getLocation({
    //   type: "gcj02",
    //   success: function(res) {
    //     console.log("res:",res)
    //     var latitude = res.latitude;
    //     var longitude = res.longitude;
    //     wx.openLocation({
    //       latitude: latitude,
    //       longitude: longitude,
    //       scale:16
    //     })
    //   },
    // })
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