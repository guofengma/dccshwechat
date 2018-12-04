// pages/signup/signup.js
var util = require('../../utils/util.js'); 
var template = require('../../pages/tabbarComponent/tabbar.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // template.tabbar("tabBar", 2, this)//0表示第一个tabbar
    this.getParticipants()
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

  },

  //获取参会名单
  getParticipants (e){
    //云开发初始化
    wx.cloud.init({
      traceUser:true
    })
    //通过云函数获取参会者列表
    wx.cloud.callFunction  ({
      name:'getParticipants',
      complete:res=>{
        //console.log('云函数返回数据:',res)
        this.setData({
          participants: res.result.data
        })
        //console.log(this.data.participants)
      }
    })
  },

  getName:function (e){
    //console.log(e)
    var name = e.detail.value
    this.setData({
      name:name
    })
    //console.log(this.data.name)
  },

  //插入签到数据
  getSignup: function (e){
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date())
    //console.log(time)
    //判断签到人是否在名单中
    //this.getParticipants()

    for (var j = 0, len = this.data.participants.length; j < len; j++) {
      if (this.data.name == this.data.participants[j].name){
        // console.log(this.data.participants[j].name);
        // console.log(this.data.name)
        // console.log('签到成功')
        wx.showModal({
          title: '签到',
          content: '恭喜您，签到成功！',
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
        //插入签到数据
        const db = wx.cloud.database()
        db.collection('signup').add({
          //新增的数据字段
          data: {
            name: this.data.name,
            signupTime: time
          }
        })

        break;
      }else{
        // console.log(this.data.participants[j].name);
        // console.log(this.data.name)
        // console.log('签到失败')        
        wx.showModal({
          title: '签到',
          content: '请确认输入的姓名是否正确',
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    }
    


  }


})