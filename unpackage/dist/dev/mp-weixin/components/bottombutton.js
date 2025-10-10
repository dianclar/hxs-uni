"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  props: ["title"],
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  _easycom_uv_safe_bottom2();
}
const _easycom_uv_safe_bottom = () => "../uni_modules/uv-safe-bottom/components/uv-safe-bottom/uv-safe-bottom.js";
if (!Math) {
  _easycom_uv_safe_bottom();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.title),
    b: common_vendor.o(() => _ctx.$emit("buttonclick"))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-241a3bf4"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/bottombutton.js.map
