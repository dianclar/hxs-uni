"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      addshopcat: false,
      specification: {
        height: "1000rpx",
        width: "auto",
        padding: "45rpx 30rpx",
        borderRadius: "16rpx 16rpx 0rpx 0rpx"
      }
    };
  },
  methods: {
    clickshopcat() {
      this.addshopcat = !this.addshopcat;
      setTimeout(() => this.addshopcat = !this.addshopcat, 2e3);
    },
    openspecification() {
      this.$refs.specification.open();
    },
    openshoppingcart() {
      common_vendor.index.navigateTo({
        url: "/pages/index/mall/shoppingcart"
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_badge2 = common_vendor.resolveComponent("uv-badge");
  const _easycom_uv_rate2 = common_vendor.resolveComponent("uv-rate");
  const _easycom_uv_number_box2 = common_vendor.resolveComponent("uv-number-box");
  const _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
  (_easycom_uv_navbar2 + _easycom_uv_icon2 + _easycom_uv_badge2 + _easycom_uv_rate2 + _easycom_uv_number_box2 + _easycom_uv_popup2)();
}
const _easycom_uv_navbar = () => "../../../uni_modules/uv-navbar/components/uv-navbar/uv-navbar.js";
const _easycom_uv_icon = () => "../../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_badge = () => "../../../uni_modules/uv-badge/components/uv-badge/uv-badge.js";
const _easycom_uv_rate = () => "../../../uni_modules/uv-rate/components/uv-rate/uv-rate.js";
const _easycom_uv_number_box = () => "../../../uni_modules/uv-number-box/components/uv-number-box/uv-number-box.js";
const _easycom_uv_popup = () => "../../../uni_modules/uv-popup/components/uv-popup/uv-popup.js";
if (!Math) {
  (_easycom_uv_navbar + _easycom_uv_icon + _easycom_uv_badge + _easycom_uv_rate + _easycom_uv_number_box + _easycom_uv_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "商品评价",
      autoBack: "true"
    }),
    b: common_vendor.p({
      width: "38rpx",
      name: "/static/mall/Icon_SC_kefu.png"
    }),
    c: common_vendor.p({
      bgColor: "#fff",
      color: "#ED1C06",
      value: 8
    }),
    d: common_vendor.p({
      width: "38rpx",
      name: "/static/mall/Icon_SC_xiaogouwuche.png"
    }),
    e: common_vendor.o((...args) => $options.openshoppingcart && $options.openshoppingcart(...args)),
    f: common_vendor.p({
      width: "44rpx",
      name: "/static/mall/Icon_SC_xinzenggouwuche.png"
    }),
    g: common_vendor.o((...args) => $options.clickshopcat && $options.clickshopcat(...args)),
    h: common_vendor.o((...args) => $options.openspecification && $options.openspecification(...args)),
    i: common_vendor.p({
      name: "checkbox-mark",
      color: "#0D7CFF",
      size: "24rpx"
    }),
    j: common_vendor.f(5, (i, k0, i0) => {
      return {
        a: "41f7c040-6-" + i0
      };
    }),
    k: common_assets._imports_1,
    l: common_vendor.p({
      count: 5,
      readonly: true,
      value: 5,
      gutter: "0",
      size: "15"
    }),
    m: common_assets._imports_1,
    n: common_assets._imports_1,
    o: common_assets._imports_1,
    p: common_assets._imports_1,
    q: common_vendor.p({
      name: "minus",
      bold: "ture",
      color: "#000",
      size: "18rpx"
    }),
    r: common_vendor.t(_ctx.value),
    s: common_vendor.p({
      name: "plus",
      bold: "ture",
      color: "#000",
      size: "18rpx"
    }),
    t: common_vendor.o(($event) => _ctx.value = $event),
    v: common_vendor.p({
      disabledInput: true,
      modelValue: _ctx.value
    }),
    w: common_vendor.p({
      width: "44rpx",
      name: "/static/mall/Icon_SC_xinzenggouwuche.png"
    }),
    x: common_vendor.o((...args) => $options.clickshopcat && $options.clickshopcat(...args)),
    y: common_vendor.o((...args) => $options.openspecification && $options.openspecification(...args)),
    z: common_vendor.sr("specification", "41f7c040-7"),
    A: common_vendor.p({
      mode: "bottom",
      closeable: "true",
      customStyle: $data.specification
    }),
    B: common_vendor.p({
      name: "/static/mall/Icon_GWC_sahuabiaoshi.png"
    }),
    C: $data.addshopcat
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/mall/goodsevaluation.js.map
