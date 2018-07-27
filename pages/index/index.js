//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banner: [{
      link: "",
      image_url: "http://mz.djmall.xmisp.cn/files/logo/20161207/148110444480.jpg"

    }, {
      link: "",
      image_url: "http://mz.djmall.xmisp.cn/files/logo/20161208/148117973270.jpg"

    }, {
      link: "",
      image_url: "http://mz.djmall.xmisp.cn/files/logo/20161208/148117981591.jpg"

    }, {
      link: "",
      image_url: "http://mz.djmall.xmisp.cn/files/logo/20161212/14815381301.jpg"

    }]

  },
  //下拉刷新
  onPullDownRefresh: function() {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function() {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  }
})