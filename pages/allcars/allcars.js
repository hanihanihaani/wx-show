// pages/allcars/allcars.js
const objToQuery = require("../../utils/toQuery.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //本机测试
      array:[
        {
          text:718,
          src: "../../static/allcar1.jpg"
        },
        {
          text: 911,
          src: "../../static/allcar2.jpg"
        },
        {
          text: "Panamera",
          src: "../../static/allcar3.jpg"
        },
        {
          text: "Macan",
          src: "../../static/allcar4.jpg"
        },
        {
          text: "Cayenne",
          src: "../../static/allcar5.jpg"
        }
      ],
      //请求服务器的数据
      docs:""
  },
  carPage: function (event) {
    //产品的id存在Event事件中的dateset里
    const date = event.target.dataset;
    console.log("date:",date);
    console.log("event:",event);
    const query = objToQuery(date);
    console.log("query:",query);
    wx.navigateTo({
      url: '/pages/car/car'+"?" + query,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url:"http://192.168.1.210:3000/manage/product",
      success:(res) => {
        console.log("res",res.data)
        this.setData({
          docs:res.data.docs,
        })
      }
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