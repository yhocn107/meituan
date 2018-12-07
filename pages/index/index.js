Page({
    data: {
      mask1Hidden: true,
      mask2Hidden: true,
      sortList: [{
        sort: "综合排序",
        image: "",
      }, {
        sort: "速度最快",
        image: "",
      }, {
        sort: "评分最高",
        image: "",
      }, {
        sort: "起送价最低",
        image: "",
      }, {
        sort: "配送费最低",
        image: "",
      }],
      categoryList: {
        pageone: [{
          name: "医院",
          src: "/pages/images/1.png"
        }, {
          name: "警察局",
          src: "/pages/images/2.png"
        }, {
          name: "超市",
          src: "/pages/images/3.png"
        }, {
          name: "邮局",
          src: "/pages/images/4.png"
        }, {
          name: "银行",
          src: "/pages/images/5.png"
        }, {
          name: "消防局",
          src: "/pages/images/6.png"
        }, {
          name: "学校",
          src: "/pages/images/7.png"
        }, {
          name: "客运站",
          src: "/pages/images/8.png"
        }],
        pagetwo: [{
          name: "美食",
          src: "/pages/images/11.png"
        }, {
          name: "甜点饮品",
          src: "/pages/images/22.png"
        }, {
          name: "美团超市",
          src: "/pages/images/33.png"
        }, {
          name: "正餐精选",
          src: "/pages/images/44.png"
        }, {
          name: "生鲜果蔬",
          src: "/pages/images/55.png"
        }, {
          name: "全部商家",
          src: "/pages/images/66.png"
        }, {
          name: "免配送费",
          src: "/pages/images/77.png"
        }, {
          name: "新商家",
          src: "/pages/images/88.png"
        }]
      },
    },
  zonghepaixu: function () {
    this.setData({
      mask1Hidden: false
    })
  },
  shaixuan: function () {
   
    this.setData({
      mask2Hidden:false
    })
  },
  mask1Cancel: function () {
    this.setData({
      mask1Hidden: true
    })
  },
   
  
})
