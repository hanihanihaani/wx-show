// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:[],
    toastHidden:true,
    modalHidden:true,
    notice_str:""
  },
  /*
  toastChange: function(e) {
    this.setData({
      toastHidden:true
    })
  },
  */
  modalTap:function(e) {
  /*
    this.setData({
      modalHidden:false
    })
    */
    //使用最新版的showModal， showToast
    wx.showModal({
      title: '提示',
      content: '你确定要提交吗',
      success: function(res) {
          if (res.confirm) {
              wx.showToast({
                title: '提交成功',
                icon:'success',
                duration:3000
              })
          } else if (res.cancel) {
              wx.showToast({
                title: '提交失败',
                icon:'cancel',
                duration:3000
              })
          }
      }
    })
  },/*
  confirm_one: function(e) {
    this.setData({
      modalHidden:true,
      toastHidden:false,
      notice_str:"提交成功"
    })
  },
  cancel_one: function (e) {
    this.setData({
      modalHidden: true,
      toastHidden: false,
      notice_str: "取消成功"
    })
  },
  */
  formSubmit:function(e) {
    console.log("e:",e)
    var formData = e.detail.value
    console.log("formData:",formData);
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