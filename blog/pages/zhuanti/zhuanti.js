Page({
  data: {
    menuList: [{
      name: "前端"
    }, {
      name: "后端"
    }, {
      name: "移动端"
    }, {
      name: "运维"
    }, {
      name: "Mac"
    }, {
      name: "其它"
    }, 
    // {
    //   name: "公交"
    // }, {
    //   name: "代驾"
    // }, {
    //   name: "豪华车"
    // }, {
    //   name: "自驾租车"
    // }, {
    //   name: "拼车"
    // }, {
    //   name: "二手车"
    // }
    ],
    tabScroll: 0,
    currentTab: 0,
    windowHeight: '',
    windowWidth: ''
  },
  onLoad: function () {
    wx.getSystemInfo({  // 获取当前设备的宽高，文档有
      success: (res) => {
        this.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      },
    })
  },
  onReady: function () {
    // wx.setNavigationBarTitle({ //修改标题文字
    //   title: ''
    // })
  },
  clickMenu: function (e) {
    var current = e.currentTarget.dataset.current //获取当前tab的index
    var tabWidth = this.data.windowWidth / 5 // 导航tab共5个，获取一个的宽度
    this.setData({
      tabScroll: (current - 2) * tabWidth //使点击的tab始终在居中位置
    })
    if (this.data.currentTab == current) {
      return false
    } else {
      this.setData({ currentTab: current })
    }
  },
  changeContent: function (e) {
    var current = e.detail.current // 获取当前内容所在index,文档有
    var tabWidth = this.data.windowWidth / 5
    this.setData({
      currentTab: current,
      tabScroll: (current - 2) * tabWidth
    })
  }
})