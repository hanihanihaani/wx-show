// pages/location/location.js
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
      height: 50,
      callout:{
        content:"创新创业园",
        fontSize:16,
        borderRadius:4,
        bgColor:"#ddd",
        padding:10,
        display:"ALWAYS"
      }
    }],
    polyline: [{
      points: [{
        longitude: 113.868356,
        latitude: 34.040143
      }, {
        longitude: 113.850331,
        latitude: 34.039182
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
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