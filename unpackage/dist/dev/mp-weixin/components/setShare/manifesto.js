"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_uv_textarea2 = common_vendor.resolveComponent("uv-textarea");
  _easycom_uv_textarea2();
}
const _easycom_uv_textarea = () => "../../uni_modules/uv-textarea/components/uv-textarea/uv-textarea.js";
if (!Math) {
  _easycom_uv_textarea();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      placeholder: _ctx.title == "原典语录" ? "请输入原典摘自" : "请输入党建语录摘自",
      placeholderClass: "placeholder",
      height: "100rpx",
      border: "none",
      customStyle: {
        background: "#F4F6F8",
        borderRadius: "10rpx",
        padding: "30rpx 24rpx"
      }
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3ef4fcbf"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/setShare/manifesto.js.map
