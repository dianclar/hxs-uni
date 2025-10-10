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
    },
    opencustomerservice() {
      common_vendor.index.navigateTo({
        url: "/pages/index/customerservice/customerservice"
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _easycom_uv_status_bar2 = common_vendor.resolveComponent("uv-status-bar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_easycom_uv_navbar2 + _easycom_uv_status_bar2 + _easycom_uv_icon2 + _easycom_uv_button2)();
}
const _easycom_uv_navbar = () => "../../../uni_modules/uv-navbar/components/uv-navbar/uv-navbar.js";
const _easycom_uv_status_bar = () => "../../../uni_modules/uv-status-bar/components/uv-status-bar/uv-status-bar.js";
const _easycom_uv_icon = () => "../../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_button = () => "../../../uni_modules/uv-button/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uv_navbar + _easycom_uv_status_bar + _easycom_uv_icon + _easycom_uv_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "退货详情",
      autoBack: "true"
    }),
    b: common_vendor.p({
      name: "/static/mine/time.png",
      width: "40rpx",
      height: "40rpx"
    }),
    c: common_assets._imports_1,
    d: common_vendor.f(3, (i, k0, i0) => {
      return {};
    }),
    e: common_assets._imports_1,
    f: common_vendor.o($options.opencustomerservice),
    g: common_vendor.p({
      text: "联系客服"
    }),
    h: common_vendor.p({
      text: "修改申请"
    }),
    i: common_vendor.p({
      text: "撤销申请",
      color: "linear-gradient(90deg, #499CFF 0%, #0D7CFF 100%);"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/mall/Returndetails.js.map
