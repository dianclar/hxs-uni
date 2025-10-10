"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _easycom_uv_status_bar2 = common_vendor.resolveComponent("uv-status-bar");
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_switch2 = common_vendor.resolveComponent("uv-switch");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  (_easycom_uv_navbar2 + _easycom_uv_status_bar2 + _easycom_uv_input2 + _easycom_uv_form_item2 + _easycom_uv_icon2 + _easycom_uv_switch2 + _easycom_uv_form2)();
}
const _easycom_uv_navbar = () => "../../../uni_modules/uv-navbar/components/uv-navbar/uv-navbar.js";
const _easycom_uv_status_bar = () => "../../../uni_modules/uv-status-bar/components/uv-status-bar/uv-status-bar.js";
const _easycom_uv_input = () => "../../../uni_modules/uv-input/components/uv-input/uv-input.js";
const _easycom_uv_form_item = () => "../../../uni_modules/uv-form/components/uv-form-item/uv-form-item.js";
const _easycom_uv_icon = () => "../../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_switch = () => "../../../uni_modules/uv-switch/components/uv-switch/uv-switch.js";
const _easycom_uv_form = () => "../../../uni_modules/uv-form/components/uv-form/uv-form.js";
if (!Math) {
  (_easycom_uv_navbar + _easycom_uv_status_bar + _easycom_uv_input + _easycom_uv_form_item + _easycom_uv_icon + _easycom_uv_switch + _easycom_uv_form)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "新增收货地址",
      autoBack: "true"
    }),
    b: common_vendor.p({
      border: "none",
      placeholder: "请填写收货人姓名"
    }),
    c: common_vendor.p({
      label: "收货人"
    }),
    d: common_vendor.p({
      border: "none",
      placeholder: "请填写收货人手机号"
    }),
    e: common_vendor.p({
      label: "手机号"
    }),
    f: common_vendor.p({
      border: "none",
      placeholder: "选择省市区县"
    }),
    g: common_vendor.p({
      name: "arrow-right"
    }),
    h: common_vendor.p({
      label: "省市地址"
    }),
    i: common_vendor.p({
      border: "none",
      placeholder: "请填写街道、小区、楼栋单元、门牌号等"
    }),
    j: common_vendor.p({
      label: "详细地址"
    }),
    k: common_vendor.p({
      labelWidth: "139rpx"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/area/addarea.js.map
