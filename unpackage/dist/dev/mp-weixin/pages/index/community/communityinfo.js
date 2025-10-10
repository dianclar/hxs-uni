"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      linecolor: "",
      percentage: 39
    };
  },
  onLoad() {
    common_vendor.pathToBase64("/static/community/icon_biaozhu.png").then((base64) => {
      this.linecolor = base64;
    });
  },
  methods: {
    opennewclockin() {
      common_vendor.index.navigateTo({
        url: "/pages/index/clockin/newclockin"
      });
    },
    opennewtask() {
      common_vendor.index.navigateTo({
        url: "/pages/index/community/Newtask"
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  (_easycom_uv_navbar2 + _easycom_uv_tabs2 + _easycom_uv_icon2 + _easycom_uv_input2 + _easycom_uv_safe_bottom2)();
}
const _easycom_uv_navbar = () => "../../../uni_modules/uv-navbar/components/uv-navbar/uv-navbar.js";
const _easycom_uv_tabs = () => "../../../uni_modules/uv-tabs/components/uv-tabs/uv-tabs.js";
const _easycom_uv_icon = () => "../../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_input = () => "../../../uni_modules/uv-input/components/uv-input/uv-input.js";
const _easycom_uv_safe_bottom = () => "../../../uni_modules/uv-safe-bottom/components/uv-safe-bottom/uv-safe-bottom.js";
if (!Math) {
  (_easycom_uv_navbar + _easycom_uv_tabs + _easycom_uv_icon + _easycom_uv_input + _easycom_uv_safe_bottom)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$7,
    b: common_vendor.p({
      title: "社群内容",
      autoBack: "true",
      bgColor: "rgba(0,0,0,0)",
      placeholder: "true",
      ["left-icon-color"]: "#fff",
      fixed: false,
      ["title-style"]: "font-family: PingFang SC;\n			font-weight: 500;\n			font-size: 36rpx;\n			color: #FEFEFE;"
    }),
    c: common_assets._imports_1,
    d: common_vendor.p({
      list: [{
        name: "读书任务"
      }, {
        name: "读书动态"
      }],
      ["line-color"]: `url(${$data.linecolor})`,
      lineHeight: "14rpx",
      ["line-width"]: "39rpx",
      activeStyle: "\n			font-family: PingFang SC;\n			font-weight: bold;\n			font-size: 30rpx;\n			color: #0D7CFF;\n			line-height: 44rpx;",
      inactiveStyle: "\n			font-family: PingFang SC;\n			font-weight: 500;\n			font-size: 28rpx;\n			color: #92969E;\n			line-height: 44rpx;"
    }),
    e: common_vendor.p({
      name: "arrow-right",
      size: "22rpx"
    }),
    f: common_vendor.o((...args) => $options.opennewtask && $options.opennewtask(...args)),
    g: common_vendor.p({
      placeholder: "搜索学员昵称",
      border: "none"
    }),
    h: common_vendor.o(() => {
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/community/communityinfo.js.map
