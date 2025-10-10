"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      nomall: false
    };
  },
  methods: {
    openOrderDetails() {
      common_vendor.index.navigateTo({
        url: "/pages/index/mall/OrderDetails"
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_status_bar2 = common_vendor.resolveComponent("uv-status-bar");
  (_easycom_uv_navbar2 + _easycom_uv_icon2 + _easycom_uv_status_bar2)();
}
const _easycom_uv_navbar = () => "../../../uni_modules/uv-navbar/components/uv-navbar/uv-navbar.js";
const _easycom_uv_icon = () => "../../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_status_bar = () => "../../../uni_modules/uv-status-bar/components/uv-status-bar/uv-status-bar.js";
if (!Math) {
  (_easycom_uv_navbar + _easycom_uv_icon + _easycom_uv_status_bar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      title: "商城订单",
      autoBack: "true"
    }),
    b: $data.nomall
  }, $data.nomall ? {
    c: common_assets._imports_0$4,
    d: common_vendor.p({
      size: "24rpx",
      color: "rgba(13, 124, 255, 1)",
      name: "arrow-right"
    })
  } : {
    e: common_vendor.f(3, (i, k0, i0) => {
      return {};
    }),
    f: common_assets._imports_1$4,
    g: common_assets._imports_1,
    h: common_vendor.o((...args) => $options.openOrderDetails && $options.openOrderDetails(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/mall/mallorder.js.map
