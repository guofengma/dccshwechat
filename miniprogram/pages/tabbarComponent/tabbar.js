//初始化数据
function tabbarinit() {
  return [
    {
      "current": 0,
      "pagePath": "../../pages/index/index",
      "text": "首页",
      "iconPath": "../../images/icon/homepage.png",
      "selectedIconPath": "../../images/icon/homepage.png"
    },
    {
      "current": 0,
      "pagePath": "../../pages/feedback/feedback",
      "text": "联系我们",
      "iconPath": "../../images/icon/feedback.png",
      "selectedIconPath": "../../images/icon/feedback.png"
    },
    {
      "current": 0,
      "pagePath": "../../pages/signup/signup",
      "text": "签到",
      "iconPath": "../../images/icon/signup.png",
      "selectedIconPath": "../../images/icon/signup.png"

    }
  ]

}
//tabbar 主入口
function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}

module.exports = {
  tabbar: tabbarmain
}
