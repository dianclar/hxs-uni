"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      scroll: 0
    };
  },
  methods: {
    chatbottom() {
      const query = common_vendor.index.createSelectorQuery();
      query.select(".chat").boundingClientRect();
      query.select(".chati").boundingClientRect();
      query.exec((res) => {
        const chath = res[0].height;
        const chatih = res[1].height;
        this.scroll = chatih - chath;
      });
    }
  },
  onReady() {
    this.chatbottom();
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  (_easycom_uv_icon2 + _easycom_uv_safe_bottom2)();
}
const _easycom_uv_icon = () => "../../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_safe_bottom = () => "../../../uni_modules/uv-safe-bottom/components/uv-safe-bottom/uv-safe-bottom.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_safe_bottom)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$5,
    b: common_vendor.p({
      name: "arrow-left",
      color: "#fff",
      size: "34rpx"
    }),
    c: common_assets._imports_1,
    d: common_assets._imports_1,
    e: common_assets._imports_1,
    f: common_assets._imports_1,
    g: common_assets._imports_1,
    h: $data.scroll,
    i: common_assets._imports_2$4
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/customerservice/customerservice.js.map
