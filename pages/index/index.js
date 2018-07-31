//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banner: [{
      link: "",
      image_url: "http://img.tupianzj.com/uploads/allimg/151209/9-15120ZU539.jpg"

    }, {
      link: "",
      image_url: "https://file.juzimi.com/weibopic/jpzima7.jpg"

    }, {
      link: "",
      image_url: "http://mz.djmall.xmisp.cn/files/logo/20161208/148117981591.jpg"

    }, {
      link: "",
      image_url: "http://mz.djmall.xmisp.cn/files/logo/20161212/14815381301.jpg"

    }],
    hotShopDatas: [{
      sid: "01",
      isnew: true,
      title: "甜橙",
      prePrice: "10元",
      price: "8元",
      image_url: "http://image2.benlailife.com/ProductImages/000/000/037/728/big/2e8bd2d7-192b-40d9-80e3-a66a870e4178.jpg"
    }, {
      sid: "02",
      isnew: true,
      title: "孟买香蕉",
      prePrice: "10元",
      price: "8元",
      image_url: "http://image1.benlailife.com/ProductImages/000/000/039/517/big/02854e6c-cd6e-48a3-907c-9130a6a6968d.jpg"
    }, {
      sid: "03",
      isnew: true,
      title: "泰国芒果",
      prePrice: "10元",
      price: "8元",
      image_url: "http://img.tupianzj.com/uploads/allimg/180131/9-1P131163314.jpg"
    }, {
      sid: "04",
      isnew: true,
      title: "西红柿",
      prePrice: "10元",
      price: "8元",
      image_url: "http://img.tupianzj.com/uploads/allimg/180131/9-1P131163314.jpg"
    }, {
      sid: "04",
      isnew: true,
      title: "火龙果",
      prePrice: "10元",
      price: "8元",
      image_url: "http://image4.benlailife.com/ProductImages/000/000/037/727/big/37a49c73-2883-4732-8747-4d0bb74f2e4d.jpg"
    }, {
      sid: "01",
      isnew: true,
      title: "甜橙",
      prePrice: "10元",
      price: "8元",
      image_url: "http://image2.benlailife.com/ProductImages/000/000/037/728/big/2e8bd2d7-192b-40d9-80e3-a66a870e4178.jpg"
    }, {
      sid: "02",
      isnew: true,
      title: "孟买香蕉",
      prePrice: "10元",
      price: "8元",
      image_url: "http://image1.benlailife.com/ProductImages/000/000/039/517/big/02854e6c-cd6e-48a3-907c-9130a6a6968d.jpg"
    }, {
      sid: "03",
      isnew: true,
      title: "泰国芒果",
      prePrice: "10元",
      price: "8元",
      image_url: "http://img.tupianzj.com/uploads/allimg/180131/9-1P131163314.jpg"
    }, {
      sid: "04",
      isnew: true,
      title: "西红柿",
      prePrice: "10元",
      price: "8元",
      image_url: "http://img.tupianzj.com/uploads/allimg/180131/9-1P131163314.jpg"
    }, {
      sid: "04",
      isnew: true,
      title: "火龙果",
      prePrice: "10元",
      price: "8元",
      image_url: "http://image4.benlailife.com/ProductImages/000/000/037/727/big/37a49c73-2883-4732-8747-4d0bb74f2e4d.jpg"
    }, {
      sid: "04",
      isnew: true,
      title: "火龙果",
      prePrice: "10元",
      price: "8元",
      image_url: "http://image4.benlailife.com/ProductImages/000/000/037/727/big/37a49c73-2883-4732-8747-4d0bb74f2e4d.jpg"
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