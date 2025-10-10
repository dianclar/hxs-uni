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
    opencommunityinfo() {
      common_vendor.index.navigateTo({
        url: "/pages/index/community/communityinfo"
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _easycom_uv_line_progress2 = common_vendor.resolveComponent("uv-line-progress");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  (_easycom_uv_navbar2 + _easycom_uv_icon2 + _easycom_uv_tabs2 + _easycom_uv_line_progress2 + _easycom_uv_safe_bottom2)();
}
const _easycom_uv_navbar = () => "../../../uni_modules/uv-navbar/components/uv-navbar/uv-navbar.js";
const _easycom_uv_icon = () => "../../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_tabs = () => "../../../uni_modules/uv-tabs/components/uv-tabs/uv-tabs.js";
const _easycom_uv_line_progress = () => "../../../uni_modules/uv-line-progress/components/uv-line-progress/uv-line-progress.js";
const _easycom_uv_safe_bottom = () => "../../../uni_modules/uv-safe-bottom/components/uv-safe-bottom/uv-safe-bottom.js";
if (!Math) {
  (_easycom_uv_navbar + _easycom_uv_icon + _easycom_uv_tabs + _easycom_uv_line_progress + _easycom_uv_safe_bottom)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$7,
    b: common_vendor.p({
      title: "华学社",
      autoBack: "true",
      bgColor: "rgba(0,0,0,0)",
      placeholder: "true",
      ["left-icon-color"]: "#fff",
      fixed: false,
      ["title-style"]: "font-family: PingFang SC;\n			font-weight: 500;\n			font-size: 36rpx;\n			color: #FEFEFE;"
    }),
    c: common_vendor.p({
      name: "/static/community/Icon_SQ_fenxiang.png",
      size: "32rpx"
    }),
    d: common_vendor.p({
      list: [{
        name: "最近加入"
      }, {
        name: "所有社群"
      }, {
        name: "我创建的"
      }],
      ["line-color"]: `url(${$data.linecolor})`,
      lineHeight: "14rpx",
      ["line-width"]: "39rpx",
      activeStyle: "\n			font-family: PingFang SC;\n			font-weight: bold;\n			font-size: 30rpx;\n			color: #0D7CFF;\n			line-height: 44rpx;",
      inactiveStyle: "\n			font-family: PingFang SC;\n			font-weight: 500;\n			font-size: 28rpx;\n			color: #92969E;\n			line-height: 44rpx;"
    }),
    e: common_vendor.f(5, (i, k0, i0) => {
      return {
        a: "e5ad8ad6-3-" + i0
      };
    }),
    f: common_assets._imports_1,
    g: common_vendor.p({
      activeColor: "rgba(13, 124, 255, 1)",
      inactiveColor: "background: #EDF0F2;",
      height: "12rpx",
      percentage: $data.percentage,
      customStyle: {
        overflow: "visible"
      }
    }),
    h: common_vendor.o((...args) => $options.opencommunityinfo && $options.opencommunityinfo(...args)),
    i: common_vendor.o((...args) => $options.opennewclockin && $options.opennewclockin(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/community/HuaxueSociety.js.map
