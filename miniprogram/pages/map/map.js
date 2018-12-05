// miniprogram/pages/map/map.js
var template = require('../../pages/tabbarComponent/tabbar.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgArr:[
      '../../images/picture/map.png'
    ],
    //默认未获取地址
    hasLocation: false
  },

  previewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgArr;
    console.log(imgArr);
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },


//获取经纬度
getlocation:function(e){
  console.log(e)
  var that = this
  wx.getLocation({
    success: function (res) {
      console.log(res)
      that.setData({
        hasLocation: true,
        location: {
          longitude: res.longitude,
          latitude: res.latitude
        }
      })
    }
  })
},
//根据经纬度在地图上显示
openLocation:function(e){
  console.log(e.currentTarget.dataset.location)
  var location = e.currentTarget.dataset.location
  var value = [0, 0]
  switch (location){
    case "jiading":
      value.longitude = 31.40937
      value.latitude = 121.22237
      break;
    case "waigaoqiao":
      value.longitude = 31.31276
      value.latitude = 121.60765
      break;
    case "xisanqi":
      value.longitude = 40.06105
      value.latitude = 116.37627
      break;
    case "qingpupeixun":
      value.longitude = 31.08692
      value.latitude = 120.90511
  }



  wx.openLocation({
    latitude: Number(value.longitude),
    longitude: Number(value.latitude),
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    template.tabbar("tabBar", 0, this)//0表示第一个tabbar
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