var app = getApp()
Page({
  data: {
    swiperHeight: "",
    scrollLeft: 0,
    navigation: ["网络电视", "LED电视", "油烟机", "空调", "平板电视", "变频空调", "家用空调", "1.5匹空调"],
    selectedTitle: "0",
  },
  bindtap: function (e) {
    this.setData({
      selectedTitle: e.currentTarget.id
    });
  },
  bindChange: function (e) {
    var obj = this;
    wx.createSelectorQuery().select('.nav-item-' + e.detail.current).boundingClientRect(
      function (rect) {
        wx.getSystemInfo({
          success: function (res) {
            wx.createSelectorQuery().select('.nav-scroll').scrollOffset(function (scroll) {
              obj.setData({
                scrollLeft: scroll.scrollLeft + rect.width / 2 + rect.left - res.windowWidth / 2,
                selectedTitle: e.detail.current
              });
            }).exec()
          }
        })
      }
    ).exec()
  },
  onReady: function () {
    var obj = this;
    wx.getSystemInfo({
      success: function (res) {
        obj.setData({
          swiperHeight: (res.windowHeight * res.pixelRatio - 30)
        });
      }
    })
  },
  footerTap: app.footerTap
});