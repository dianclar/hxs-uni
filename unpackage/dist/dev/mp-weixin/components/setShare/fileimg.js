"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: ["title"],
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_upload2 = common_vendor.resolveComponent("uv-upload");
  (_easycom_uv_icon2 + _easycom_uv_upload2)();
}
const _easycom_uv_icon = () => "../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_upload = () => "../../uni_modules/uv-upload/components/uv-upload/uv-upload.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_upload)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.title),
    b: common_vendor.p({
      name: "/static/mine/Icon_SH_tupianshangchuan.png",
      width: "52rpx",
      height: "52rpx"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ec5f4ebd"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/setShare/fileimg.js.map
