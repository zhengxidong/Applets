
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabitemConsume: {},
    tabitemRecharge: {},
    activeTabId: null,
    rechargeList: (function () {
      var arr = [];
      for (var i = 0; i < 20; i++) {
        arr.push({ id: i, name: '充值记录' + i })
      }
      //console.log(arr);
      return arr;
    })(),
    consumeList: (function () {
      var arr = [];
      for (var i = 0; i < 20; i++) {
        arr.push({ id: i, name: '消费记录' + i })
      }
      //console.log(arr);
      return arr;
    })()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
    
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var query = wx.createSelectorQuery().in(this),
      _this = this;

    _this.animation = wx.createAnimation()

    query.select('#tabitemConsume').boundingClientRect(function (rect) {
      _this.setData({
        tabitemConsume: rect
      });
    })


    query.select('#tabitemRecharge').boundingClientRect(function (rect) {
      _this.setData({
        tabitemRecharge: rect
      });
      _this.setActiveTab('tabitemRecharge');
    })

    query.exec();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  // onShow: function () {
    
  // },

  /**
   * 生命周期函数--监听页面隐藏
   */
  // onHide: function () {
    
  // },

  /**
   * 生命周期函数--监听页面卸载
   */
  // onUnload: function () {
    
  // },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  // onPullDownRefresh: function () {
    
  // },

  /**
   * 页面上拉触底事件的处理函数
   */
  // onReachBottom: function () {
    
  // },

  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function () {
    
  // },

  tabChange(e) {
    var id = e.detail.currentItemId;
    this.setActiveTab(id);
  },

  tabclick(e) {
    var id = e.target.id;
    this.setActiveTab(id);
  },

  setActiveTab(id) {
    var rect = this.data[id];
    if (rect) {
      this.animation.width(rect.width).translate(rect.left, 0);
      this.setData({
        activeTabId: id,
        indicatorAnim: this.animation.step().export()
      })
    }
  },

  scroll() {

  }

})