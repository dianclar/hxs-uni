"use strict";
const common_vendor = require("../../common/vendor.js");
const poster1 = () => "../poster/poster1.js";
const _sfc_main = {
  components: { poster1 },
  props: ["generate"],
  data() {
    return {
      console: {
        log: (d) => common_vendor.index.__f__("log", "at components/setShare/generate.vue:26", d)
      },
      poster: null
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _easycom_uv_overlay2 = common_vendor.resolveComponent("uv-overlay");
  const _component_poster1 = common_vendor.resolveComponent("poster1");
  (_easycom_uv_navbar2 + _easycom_uv_overlay2 + _component_poster1)();
}
const _easycom_uv_navbar = () => "../../uni_modules/uv-navbar/components/uv-navbar/uv-navbar.js";
const _easycom_uv_overlay = () => "../../uni_modules/uv-overlay/components/uv-overlay/uv-overlay.js";
if (!Math) {
  (_easycom_uv_navbar + _easycom_uv_overlay)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "分享编辑",
      autoBack: "true",
      placeholder: "true"
    }),
    b: $data.poster,
    c: common_vendor.o(() => {
    }),
    d: common_vendor.o(($event) => _ctx.$emit("Close")),
    e: common_vendor.p({
      show: $props.generate
    }),
    f: common_vendor.o((d) => $data.poster = d)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fb93ec33"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/setShare/generate.js.map
