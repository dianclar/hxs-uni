"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const bottombutton = () => "../../../components/bottombutton.js";
const _sfc_main = {
  components: { bottombutton },
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_bottombutton = common_vendor.resolveComponent("bottombutton");
  (_easycom_uv_navbar2 + _easycom_uv_icon2 + _component_bottombutton)();
}
const _easycom_uv_navbar = () => "../../../uni_modules/uv-navbar/components/uv-navbar/uv-navbar.js";
const _easycom_uv_icon = () => "../../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
if (!Math) {
  (_easycom_uv_navbar + _easycom_uv_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "新建任务",
      autoBack: "true",
      placeholder: "true"
    }),
    b: common_assets._imports_0$6,
    c: common_assets._imports_0$6,
    d: common_vendor.p({
      name: "arrow-right",
      size: "22rpx"
    }),
    e: common_vendor.p({
      name: "arrow-right",
      size: "22rpx"
    }),
    f: common_vendor.o(() => {
    }),
    g: common_vendor.p({
      title: "新建任务"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/community/Newtask.js.map
