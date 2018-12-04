// miniprogram/pages/arrangement/arrangement.js
var template = require('../../pages/tabbarComponent/tabbar.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgArr: [
      'https://improxy.icbc.com.cn/sjzxshrel1/ecc_dashboard/wechatpic/arrangement.jpg'
      //'https://s1.ax1x.com/2018/11/22/FPcUCq.jpg'
    ],    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    template.tabbar("tabBar", 0, this)//0表示第一个tabbar
  },

  //图片点击事件
  preview: function (event) {
    var src = event.currentTarget.dataset.src;//获取data-src
    console.log(src)
    var imgList = event.currentTarget.dataset.list;//获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
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