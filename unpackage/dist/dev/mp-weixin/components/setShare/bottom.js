"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  _easycom_uv_safe_bottom2();
}
const _easycom_uv_safe_bottom = () => "../../uni_modules/uv-safe-bottom/components/uv-safe-bottom/uv-safe-bottom.js";
if (!Math) {
  _easycom_uv_safe_bottom();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => common_vendor.index.$emit("button-poster"))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2e33a6f2"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/setShare/bottom.js.map
