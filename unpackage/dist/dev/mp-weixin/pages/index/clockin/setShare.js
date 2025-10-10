"use strict";
const common_vendor = require("../../../common/vendor.js");
const plate = () => "../../../components/setShare/plate.js";
const fileimg = () => "../../../components/setShare/fileimg.js";
const quotation = () => "../../../components/setShare/quotation.js";
const manifesto = () => "../../../components/setShare/manifesto.js";
const bottom = () => "../../../components/setShare/bottom.js";
const generate = () => "../../../components/setShare/generate.js";
const _sfc_main = {
  components: { plate, fileimg, quotation, manifesto, bottom, generate },
  data() {
    return {
      console: {
        log: (d) => common_vendor.index.__f__("log", "at pages/index/clockin/setShare.vue:31", d)
      },
      generate: false
    };
  },
  created() {
    common_vendor.index.$on("button-poster", () => this.generate = true);
  }
};
if (!Array) {
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _component_plate = common_vendor.resolveComponent("plate");
  const _component_fileimg = common_vendor.resolveComponent("fileimg");
  const _component_quotation = common_vendor.resolveComponent("quotation");
  const _component_manifesto = common_vendor.resolveComponent("manifesto");
  const _component_bottom = common_vendor.resolveComponent("bottom");
  const _component_generate = common_vendor.resolveComponent("generate");
  (_easycom_uv_navbar2 + _component_plate + _component_fileimg + _component_quotation + _component_manifesto + _component_bottom + _component_generate)();
}
const _easycom_uv_navbar = () => "../../../uni_modules/uv-navbar/components/uv-navbar/uv-navbar.js";
if (!Math) {
  _easycom_uv_navbar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "分享编辑",
      autoBack: "true",
      placeholder: "true"
    }),
    b: common_vendor.p({
      title: "封面图片"
    }),
    c: common_vendor.p({
      title: "小程序二维码"
    }),
    d: common_vendor.p({
      title: "原典语录"
    }),
    e: common_vendor.p({
      title: "党建语录"
    }),
    f: common_vendor.o(($event) => $data.generate = false),
    g: common_vendor.p({
      generate: $data.generate
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/clockin/setShare.js.map
