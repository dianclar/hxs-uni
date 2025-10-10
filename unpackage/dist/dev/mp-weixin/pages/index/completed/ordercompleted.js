"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      aftersalesservice: true
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _easycom_uv_status_bar2 = common_vendor.resolveComponent("uv-status-bar");
  (_easycom_uv_navbar2 + _easycom_uv_status_bar2)();
}
const _easycom_uv_navbar = () => "../../../uni_modules/uv-navbar/components/uv-navbar/uv-navbar.js";
const _easycom_uv_status_bar = () => "../../../uni_modules/uv-status-bar/components/uv-status-bar/uv-status-bar.js";
if (!Math) {
  (_easycom_uv_navbar + _easycom_uv_status_bar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: $data.aftersalesservice ? "售后订单提交！" : "订单完成！",
      autoBack: "true"
    }),
    b: common_assets._imports_0$3,
    c: common_vendor.t($data.aftersalesservice ? "订单提交成功！" : "订单完成！"),
    d: common_vendor.t($data.aftersalesservice ? "您已提交订单，售后工作人员正在处理，请您耐心等待~" : "您已提交订单，正在加急打包分拣装运，请您耐心等待~"),
    e: common_vendor.t($data.aftersalesservice ? "售后订单详情" : "查看订单"),
    f: common_vendor.t($data.aftersalesservice ? "返回订单列表" : "返回商城")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/completed/ordercompleted.js.map
