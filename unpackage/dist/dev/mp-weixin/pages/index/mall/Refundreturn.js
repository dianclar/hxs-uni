"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      aftersalesservice: false,
      door: true,
      reason: false,
      reasonitem: 1
    };
  },
  methods: {
    openordercompleted() {
      common_vendor.index.navigateTo({
        // url:'/pages/index/ordercompleted'
        url: "/pages/index/mall/Returndetails"
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _easycom_uv_status_bar2 = common_vendor.resolveComponent("uv-status-bar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_upload2 = common_vendor.resolveComponent("uv-upload");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  const _easycom_uv_overlay2 = common_vendor.resolveComponent("uv-overlay");
  (_easycom_uv_navbar2 + _easycom_uv_status_bar2 + _easycom_uv_icon2 + _easycom_uv_upload2 + _easycom_uv_safe_bottom2 + _easycom_uv_overlay2)();
}
const _easycom_uv_navbar = () => "../../../uni_modules/uv-navbar/components/uv-navbar/uv-navbar.js";
const _easycom_uv_status_bar = () => "../../../uni_modules/uv-status-bar/components/uv-status-bar/uv-status-bar.js";
const _easycom_uv_icon = () => "../../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_upload = () => "../../../uni_modules/uv-upload/components/uv-upload/uv-upload.js";
const _easycom_uv_safe_bottom = () => "../../../uni_modules/uv-safe-bottom/components/uv-safe-bottom/uv-safe-bottom.js";
const _easycom_uv_overlay = () => "../../../uni_modules/uv-overlay/components/uv-overlay/uv-overlay.js";
if (!Math) {
  (_easycom_uv_navbar + _easycom_uv_status_bar + _easycom_uv_icon + _easycom_uv_upload + _easycom_uv_safe_bottom + _easycom_uv_overlay)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      title: "退货退款",
      autoBack: "true"
    }),
    b: common_assets._imports_1,
    c: common_vendor.p({
      name: "arrow-right",
      size: "22rpx",
      color: "rgba(170, 170, 170, 1)"
    }),
    d: common_vendor.o(($event) => $data.aftersalesservice = true),
    e: common_vendor.p({
      name: "arrow-right",
      size: "22rpx",
      color: "rgba(170, 170, 170, 1)"
    }),
    f: common_vendor.o(($event) => $data.reason = true),
    g: common_vendor.p({
      name: "/static/mine/Icon_SH_tupianshangchuan.png",
      width: "48rpx",
      height: "48rpx"
    }),
    h: common_vendor.o((...args) => $options.openordercompleted && $options.openordercompleted(...args)),
    i: common_vendor.o(($event) => $data.aftersalesservice = false),
    j: common_vendor.p({
      name: "close"
    }),
    k: $data.door
  }, $data.door ? {
    l: common_vendor.p({
      name: "/static/mine/Icon_TC_gouxuanzhong.png",
      width: "32rpx",
      height: "32rpx"
    })
  } : {}, {
    m: common_vendor.o((...args) => _ctx.openRefundreturn && _ctx.openRefundreturn(...args)),
    n: !$data.door
  }, !$data.door ? {
    o: common_vendor.p({
      name: "/static/mine/Icon_TC_gouxuanzhong.png",
      width: "32rpx",
      height: "32rpx"
    })
  } : {}, {
    p: $data.aftersalesservice,
    q: common_vendor.o(() => {
    }),
    r: common_vendor.o(($event) => $data.aftersalesservice = false),
    s: common_vendor.p({
      show: $data.aftersalesservice,
      zIndex: "18888"
    }),
    t: common_vendor.o(($event) => $data.reason = false),
    v: common_vendor.p({
      name: "close"
    }),
    w: $data.reasonitem == 1
  }, $data.reasonitem == 1 ? {
    x: common_vendor.p({
      name: "/static/mine/Icon_TC_gouxuanzhong.png",
      width: "32rpx",
      height: "32rpx"
    })
  } : {}, {
    y: common_vendor.o((...args) => _ctx.openRefundreturn && _ctx.openRefundreturn(...args)),
    z: $data.reasonitem == 2
  }, $data.reasonitem == 2 ? {
    A: common_vendor.p({
      name: "/static/mine/Icon_TC_gouxuanzhong.png",
      width: "32rpx",
      height: "32rpx"
    })
  } : {}, {
    B: $data.reasonitem == 3
  }, $data.reasonitem == 3 ? {
    C: common_vendor.p({
      name: "/static/mine/Icon_TC_gouxuanzhong.png",
      width: "32rpx",
      height: "32rpx"
    })
  } : {}, {
    D: $data.reasonitem == 4
  }, $data.reasonitem == 4 ? {
    E: common_vendor.p({
      name: "/static/mine/Icon_TC_gouxuanzhong.png",
      width: "32rpx",
      height: "32rpx"
    })
  } : {}, {
    F: $data.reason,
    G: common_vendor.o(() => {
    }),
    H: common_vendor.o(($event) => $data.reason = false),
    I: common_vendor.p({
      show: $data.reason,
      zIndex: "18888"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/mall/Refundreturn.js.map
