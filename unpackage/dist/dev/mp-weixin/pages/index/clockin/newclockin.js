"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      a: 999
    };
  }
};
if (!Array) {
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_upload2 = common_vendor.resolveComponent("uv-upload");
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  (_easycom_uv_navbar2 + _easycom_uv_icon2 + _easycom_uv_upload2 + _easycom_uv_input2 + _easycom_uv_safe_bottom2)();
}
const _easycom_uv_navbar = () => "../../../uni_modules/uv-navbar/components/uv-navbar/uv-navbar.js";
const _easycom_uv_icon = () => "../../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_upload = () => "../../../uni_modules/uv-upload/components/uv-upload/uv-upload.js";
const _easycom_uv_input = () => "../../../uni_modules/uv-input/components/uv-input/uv-input.js";
const _easycom_uv_safe_bottom = () => "../../../uni_modules/uv-safe-bottom/components/uv-safe-bottom/uv-safe-bottom.js";
if (!Math) {
  (_easycom_uv_navbar + _easycom_uv_icon + _easycom_uv_upload + _easycom_uv_input + _easycom_uv_safe_bottom)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "创建打卡",
      autoBack: "true",
      placeholder: "true"
    }),
    b: common_vendor.p({
      name: "/static/mine/Icon_SH_tupianshangchuan.png",
      width: "52rpx",
      height: "52rpx"
    }),
    c: common_vendor.p({
      name: "arrow-right",
      size: "22rpx"
    }),
    d: common_vendor.p({
      placeholder: "请输入标题",
      placeholderStyle: "\r\n					font-family: PingFang SC;\r\n					font-weight: 500;\r\n					font-size: 28rpx;\r\n					color: #9BA2AF;\r\n					line-height: 28rpx;",
      inputAlign: "right",
      border: "none"
    }),
    e: common_vendor.p({
      name: "arrow-right",
      size: "22rpx"
    }),
    f: common_vendor.p({
      name: "arrow-right",
      size: "22rpx"
    }),
    g: common_vendor.p({
      name: "arrow-right",
      size: "22rpx"
    }),
    h: common_vendor.p({
      placeholder: "请输入需打卡多少天",
      placeholderStyle: "\r\n						font-family: PingFang SC;\r\n						font-weight: 500;\r\n						font-size: 28rpx;\r\n						color: #9BA2AF;\r\n						line-height: 28rpx;",
      inputAlign: "right",
      border: "none",
      type: "number"
    }),
    i: common_vendor.o(($event) => $data.a = $event),
    j: common_vendor.p({
      placeholderStyle: "\r\n						font-family: PingFang SC;\r\n						font-weight: 500;\r\n						font-size: 28rpx;\r\n						color: #9BA2AF;\r\n						line-height: 28rpx;",
      inputAlign: "right",
      border: "none",
      type: "number",
      modelValue: $data.a
    }),
    k: common_vendor.o((...args) => _ctx.opennewclockin && _ctx.opennewclockin(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/clockin/newclockin.js.map
