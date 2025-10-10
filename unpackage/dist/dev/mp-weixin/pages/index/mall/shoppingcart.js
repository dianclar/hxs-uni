"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      value: 1,
      edit: false
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _easycom_uv_status_bar2 = common_vendor.resolveComponent("uv-status-bar");
  const _easycom_uv_tags2 = common_vendor.resolveComponent("uv-tags");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_number_box2 = common_vendor.resolveComponent("uv-number-box");
  (_easycom_uv_navbar2 + _easycom_uv_status_bar2 + _easycom_uv_tags2 + _easycom_uv_icon2 + _easycom_uv_number_box2)();
}
const _easycom_uv_navbar = () => "../../../uni_modules/uv-navbar/components/uv-navbar/uv-navbar.js";
const _easycom_uv_status_bar = () => "../../../uni_modules/uv-status-bar/components/uv-status-bar/uv-status-bar.js";
const _easycom_uv_tags = () => "../../../uni_modules/uv-tags/components/uv-tags/uv-tags.js";
const _easycom_uv_icon = () => "../../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_number_box = () => "../../../uni_modules/uv-number-box/components/uv-number-box/uv-number-box.js";
if (!Math) {
  (_easycom_uv_navbar + _easycom_uv_status_bar + _easycom_uv_tags + _easycom_uv_icon + _easycom_uv_number_box)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "购物车",
      autoBack: "true"
    }),
    b: common_vendor.p({
      text: "8件",
      plain: true,
      plainFill: true,
      borderColor: "rgba(0,0,0,0)"
    }),
    c: common_vendor.t($data.edit ? "完成" : "编辑"),
    d: common_vendor.o(($event) => $data.edit = !$data.edit),
    e: common_vendor.f(8, (i, k0, i0) => {
      return {
        a: "0272434a-3-" + i0,
        b: "0272434a-4-" + i0
      };
    }),
    f: common_assets._imports_1,
    g: common_vendor.p({
      width: "12rpx",
      height: "12rpx",
      name: "/static/mall/Icon_GWC_xiala_01.png"
    }),
    h: common_vendor.t($data.value),
    i: common_vendor.o(($event) => $data.value = $event),
    j: common_vendor.p({
      disabledInput: true,
      modelValue: $data.value
    }),
    k: common_vendor.t($data.edit ? "" : "总计:￥168.00"),
    l: common_vendor.t($data.edit ? "移出购物车" : "去结算")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/mall/shoppingcart.js.map
