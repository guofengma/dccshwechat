// miniprogram/pages/weather/weather.js
var bmap = require('../../libs/bmap-wx.min.js');
var template = require('../../pages/tabbarComponent/tabbar.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weatherData:'',
    futureWeather: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadInfo();
    template.tabbar("tabBar", 0, this)//0表示第一个tabbar
  },

  //自定义获取位置
  loadInfo: function () {
    var that = this;
    // 新建百度地图对象
    var BMap = new bmap.BMapWX({
      ak: 'V4fAFnRCgeu9cXuGQmmvv7r6RGfQLPGS'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      //console.log(data)
      var weatherData = data.currentWeather[0];
      var futureWeather = JSON.stringify(data.originalData.results[0].weather_data);
      weatherData = '城市：' + weatherData.currentCity + '\n' + 'PM2.5：' + weatherData.pm25 + '\n' + '日期：' + weatherData.date + '\n' + '温度：' + weatherData.temperature + '\n' + '天气：' + weatherData.weatherDesc + '\n' + '风力：' + weatherData.wind + '\n';
      that.setData({
        weatherData: weatherData,
        futureWeather: futureWeather
      });
    };
    // 发起weather请求
    BMap.weather({
      fail: fail,
      success: success
    });

    // var page = this;
    // wx.getLocation({
    //   type: 'gcj02', //返回可以用于wx.openLocation的经纬度
    //   success: function (res) {
    //     var latitude = res.latitude
    //     var longitude = res.longitude
    //     console.log(latitude, longitude);
    //     page.loadCity(latitude, longitude);
    //   }
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