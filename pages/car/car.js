// pages/car/car.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "../../static/chaire1.jpg",
      "../../static/chaire2.jpg"
    ],
    imgUrls1: [
      "../../static/fxp.jpg",
      "../../static/fxp2.jpg"
    ],
    tyres:[
      {
        src:"../../static/lt.jpg",
        text:"19英"  
      },
      {
        src: "../../static/lt.jpg",
        text: "19英"
      },
      {
        src: "../../static/lt.jpg",
        text: "21英"
      },
      {
        src: "../../static/lt.jpg",
        text: "21英"
      }
    ],
    car:[
      {
        carId:"0001",
        power:"331kw(450hp)/6500r",
        speed:"3.7s",
        highSpeed:"310km/h",
        oil:8.3,
        suburbs:7.3,
        price:"1,610,000元，含增值"
      }
    ],
    carId:"",
    power:"",
    speed:"",
    highSpeed:"",
    oil:"",
    suburbs:"",
    price:"",
    //从服务器取数据
    car1:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("options",options)  
    const id = options.carId;
    console.log("id",id);
    wx.request({
      url: app.globalData.server + "/manage/product/" + id,
      success:(res) => {
           console.log("res:", res.data);
           if (res.OK) {
             this.setData({
               car1:res.data.doc
             })
           }
      }
    })

    //本地数据测试
    // this.setData({
    //   // carId:options.carId
    //   carId:this.data.car[0].carId,
    //   power:this.data.car[0].power,
    //   speed:this.data.car[0].speed,
    //   highSpeed:this.data.car[0].highSpeed,
    //   oil:this.data.car[0].oil,
    //   suburbs:this.data.car[0].suburbs,
    //   price:this.data.car[0].price
    // })
  },
  clickMe: function() {
    wx.showToast({
      title: '成功',
      icon:'success',
      duration:3000
    })
  },
  showModal:function() {
    wx.showModal({
      title: '提示',
      content: '这是模太框',
      success: function(res) {
        console.log("res",res);
      }
    })
  },
  showAction: function() {
    wx.showActionSheet({
      itemList: ['分享到', '转发'],
      success: function (res) {
        console.log("res1", res)
      },
      fail: function (res) {
        console.log("res2", res)
      },
      complete: function (res) {
        console.log("res3", res)
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("ready")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("show")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("hide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("unload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("refresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("reachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("shareAppMessage")
  }
})