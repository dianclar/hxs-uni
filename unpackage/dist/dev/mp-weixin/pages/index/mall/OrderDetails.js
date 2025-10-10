"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      status: "已评价",
      aftersalesservice: false
    };
  },
  methods: {
    openRefundreturn() {
      common_vendor.index.navigateTo({
        url: "/pages/index/mall/Refundreturn"
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _easycom_uv_status_bar2 = common_vendor.resolveComponent("uv-status-bar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _easycom_uv_overlay2 = common_vendor.resolveComponent("uv-overlay");
  (_easycom_uv_navbar2 + _easycom_uv_status_bar2 + _easycom_uv_icon2 + _easycom_uv_button2 + _easycom_uv_overlay2)();
}
const _easycom_uv_navbar = () => "../../../uni_modules/uv-navbar/components/uv-navbar/uv-navbar.js";
const _easycom_uv_status_bar = () => "../../../uni_modules/uv-status-bar/components/uv-status-bar/uv-status-bar.js";
const _easycom_uv_icon = () => "../../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_button = () => "../../../uni_modules/uv-button/components/uv-button/uv-button.js";
const _easycom_uv_overlay = () => "../../../uni_modules/uv-overlay/components/uv-overlay/uv-overlay.js";
if (!Math) {
  (_easycom_uv_navbar + _easycom_uv_status_bar + _easycom_uv_icon + _easycom_uv_button + _easycom_uv_overlay)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      title: $data.status,
      autoBack: "true"
    }),
    b: $data.status == "等待收货"
  }, $data.status == "等待收货" ? {
    c: common_vendor.p({
      name: "/static/mine/Icon_DDXQ_wuliu.png",
      width: "40rpx",
      height: "40rpx"
    })
  } : {}, {
    d: $data.status == "等待评价"
  }, $data.status == "等待评价" ? {
    e: common_vendor.p({
      name: "/static/mine/Icon_DDXQ_pingjia.png",
      width: "40rpx",
      height: "40rpx"
    })
  } : {}, {
    f: $data.status == "已评价"
  }, $data.status == "已评价" ? {
    g: common_vendor.p({
      name: "/static/mine/Icon_DDXQ_gouwu.png",
      width: "40rpx",
      height: "40rpx"
    })
  } : {}, {
    h: $data.status == "等待收货"
  }, $data.status == "等待收货" ? {} : {}, {
    i: $data.status == "等待评价"
  }, $data.status == "等待评价" ? {} : {}, {
    j: $data.status == "已评价"
  }, $data.status == "已评价" ? {} : {}, {
    k: common_vendor.p({
      name: "arrow-right",
      size: "22rpx"
    }),
    l: common_assets._imports_1,
    m: $data.status == "等待收货"
  }, $data.status == "等待收货" ? {
    n: common_vendor.p({
      text: "查看物流"
    })
  } : {}, {
    o: $data.status != "等待收货"
  }, $data.status != "等待收货" ? {
    p: common_vendor.p({
      text: "删除订单"
    })
  } : {}, {
    q: $data.status != "等待收货"
  }, $data.status != "等待收货" ? {
    r: common_vendor.o(($event) => $data.aftersalesservice = true),
    s: common_vendor.p({
      text: "申请售后"
    })
  } : {}, {
    t: $data.status == "等待收货"
  }, $data.status == "等待收货" ? {
    v: common_vendor.p({
      text: "确定收货",
      color: "linear-gradient(90deg, #499CFF 0%, #0D7CFF 100%);"
    })
  } : {}, {
    w: $data.status == "等待评价"
  }, $data.status == "等待评价" ? {
    x: common_vendor.p({
      text: "前往评价",
      color: "linear-gradient(90deg, #499CFF 0%, #0D7CFF 100%);"
    })
  } : {}, {
    y: $data.status == "已评价"
  }, $data.status == "已评价" ? {
    z: common_vendor.p({
      text: "查看评价",
      color: "linear-gradient(90deg, #499CFF 0%, #0D7CFF 100%);"
    })
  } : {}, {
    A: common_vendor.p({
      text: "再次购买",
      color: "linear-gradient(90deg, #D02835 0%, #D33B0B 100%);"
    }),
    B: common_vendor.o(($event) => $data.aftersalesservice = false),
    C: common_vendor.p({
      name: "close"
    }),
    D: common_assets._imports_1$5,
    E: common_vendor.p({
      name: "arrow-right",
      size: "22rpx",
      color: "rgba(170, 170, 170, 1)"
    }),
    F: common_vendor.o((...args) => $options.openRefundreturn && $options.openRefundreturn(...args)),
    G: common_assets._imports_2$3,
    H: common_vendor.p({
      name: "arrow-right",
      size: "22rpx",
      color: "rgba(170, 170, 170, 1)"
    }),
    I: $data.aftersalesservice,
    J: common_vendor.o(() => {
    }),
    K: common_vendor.o(($event) => $data.aftersalesservice = false),
    L: common_vendor.p({
      show: $data.aftersalesservice,
      zIndex: "18888"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/mall/OrderDetails.js.map
