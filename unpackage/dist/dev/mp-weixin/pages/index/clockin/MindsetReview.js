"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      a: "4.最多添加10条语音，每条<600s；图片+视频格式最多添加9条。",
      title: "心性复盘"
    };
  },
  onLoad(d) {
    this.title = d.title;
  }
};
if (!Array) {
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _easycom_uv_status_bar2 = common_vendor.resolveComponent("uv-status-bar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  (_easycom_uv_navbar2 + _easycom_uv_status_bar2 + _easycom_uv_icon2 + _easycom_uv_safe_bottom2)();
}
const _easycom_uv_navbar = () => "../../../uni_modules/uv-navbar/components/uv-navbar/uv-navbar.js";
const _easycom_uv_status_bar = () => "../../../uni_modules/uv-status-bar/components/uv-status-bar/uv-status-bar.js";
const _easycom_uv_icon = () => "../../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_safe_bottom = () => "../../../uni_modules/uv-safe-bottom/components/uv-safe-bottom/uv-safe-bottom.js";
if (!Math) {
  (_easycom_uv_navbar + _easycom_uv_status_bar + _easycom_uv_icon + _easycom_uv_safe_bottom)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: $data.title,
      autoBack: "true"
    }),
    b: common_assets._imports_0$6,
    c: common_vendor.t($data.title == "心性复盘" ? "复盘日记" : "练操心得"),
    d: common_vendor.p({
      size: "39rpx",
      name: "/static/clockin/Icon_TY_yuyin.png"
    }),
    e: common_vendor.p({
      size: "39rpx",
      name: "/static/clockin/Icon_TY_shipin.png"
    }),
    f: common_vendor.p({
      size: "39rpx",
      name: "/static/clockin/Icon_TY_xiangce.png"
    }),
    g: common_vendor.t($data.a)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/clockin/MindsetReview.js.map
