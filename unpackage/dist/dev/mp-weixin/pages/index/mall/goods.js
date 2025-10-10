"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      value: 1,
      addshopcat: false,
      selectaddressinfoselectleftradio: 0,
      specification: {
        height: "1000rpx",
        width: "auto",
        padding: "45rpx 30rpx",
        borderRadius: "16rpx 16rpx 0rpx 0rpx"
      },
      selectaddress: {
        height: "1000rpx",
        width: "auto",
        borderRadius: "16rpx 16rpx 0rpx 0rpx"
      },
      equity: {
        height: "1000rpx",
        width: "auto",
        borderRadius: "16rpx 16rpx 0rpx 0rpx"
      }
    };
  },
  methods: {
    navigateBack() {
      common_vendor.index.navigateBack();
    },
    opengoodsevaluation() {
      common_vendor.index.navigateTo({
        url: "/pages/index/mall/goodsevaluation"
      });
    },
    openaddarea() {
      common_vendor.index.navigateTo({
        url: "/pages/index/area/addarea"
      });
    },
    openshoppingcart() {
      common_vendor.index.navigateTo({
        url: "/pages/index/mall/shoppingcart"
      });
    },
    openconfirmorder() {
      common_vendor.index.navigateTo({
        url: "/pages/index/mall/confirmorder"
      });
    },
    openspecification() {
      this.$refs.specification.open();
    },
    openselectaddress() {
      this.$refs.selectaddress.open();
    },
    openequity() {
      this.$refs.equity.open();
    },
    clickshopcat() {
      this.addshopcat = !this.addshopcat;
      setTimeout(() => this.addshopcat = !this.addshopcat, 2e3);
    }
  }
};
if (!Array) {
  const _easycom_uv_status_bar2 = common_vendor.resolveComponent("uv-status-bar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_badge2 = common_vendor.resolveComponent("uv-badge");
  const _easycom_uv_rate2 = common_vendor.resolveComponent("uv-rate");
  const _easycom_uv_number_box2 = common_vendor.resolveComponent("uv-number-box");
  const _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
  const _easycom_uv_tags2 = common_vendor.resolveComponent("uv-tags");
  (_easycom_uv_status_bar2 + _easycom_uv_icon2 + _easycom_uv_badge2 + _easycom_uv_rate2 + _easycom_uv_number_box2 + _easycom_uv_popup2 + _easycom_uv_tags2)();
}
const _easycom_uv_status_bar = () => "../../../uni_modules/uv-status-bar/components/uv-status-bar/uv-status-bar.js";
const _easycom_uv_icon = () => "../../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_badge = () => "../../../uni_modules/uv-badge/components/uv-badge/uv-badge.js";
const _easycom_uv_rate = () => "../../../uni_modules/uv-rate/components/uv-rate/uv-rate.js";
const _easycom_uv_number_box = () => "../../../uni_modules/uv-number-box/components/uv-number-box/uv-number-box.js";
const _easycom_uv_popup = () => "../../../uni_modules/uv-popup/components/uv-popup/uv-popup.js";
const _easycom_uv_tags = () => "../../../uni_modules/uv-tags/components/uv-tags/uv-tags.js";
if (!Math) {
  (_easycom_uv_status_bar + _easycom_uv_icon + _easycom_uv_badge + _easycom_uv_rate + _easycom_uv_number_box + _easycom_uv_popup + _easycom_uv_tags)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      width: "38rpx",
      name: "/static/mall/Icon_SC_kefu.png"
    }),
    b: common_vendor.p({
      bgColor: "#fff",
      color: "#ED1C06",
      value: 8
    }),
    c: common_vendor.p({
      width: "38rpx",
      name: "/static/mall/Icon_SC_xiaogouwuche.png"
    }),
    d: common_vendor.o((...args) => $options.openshoppingcart && $options.openshoppingcart(...args)),
    e: common_vendor.p({
      width: "44rpx",
      name: "/static/mall/Icon_SC_xinzenggouwuche.png"
    }),
    f: common_vendor.o((...args) => $options.clickshopcat && $options.clickshopcat(...args)),
    g: common_vendor.o((...args) => $options.openspecification && $options.openspecification(...args)),
    h: common_assets._imports_1,
    i: common_vendor.p({
      name: "arrow-left",
      size: "36rpx",
      color: "#000"
    }),
    j: common_vendor.o((...args) => $options.navigateBack && $options.navigateBack(...args)),
    k: common_vendor.f(3, (i, k0, i0) => {
      return {};
    }),
    l: common_assets._imports_1$3,
    m: common_assets._imports_2$2,
    n: common_assets._imports_3$2,
    o: common_assets._imports_2$2,
    p: common_vendor.o((...args) => $options.openselectaddress && $options.openselectaddress(...args)),
    q: common_assets._imports_4$2,
    r: common_assets._imports_2$2,
    s: common_vendor.o((...args) => $options.openequity && $options.openequity(...args)),
    t: common_assets._imports_2$2,
    v: common_vendor.o((...args) => $options.opengoodsevaluation && $options.opengoodsevaluation(...args)),
    w: common_vendor.f(3, (i, k0, i0) => {
      return {
        a: "49d7e3f8-6-" + i0
      };
    }),
    x: common_assets._imports_1,
    y: common_vendor.p({
      count: 5,
      readonly: true,
      value: 5,
      gutter: "0",
      size: "15"
    }),
    z: common_vendor.p({
      width: "28rpx",
      name: "/static/mall/Icon_SC_guigecanshu.png"
    }),
    A: common_vendor.p({
      width: "28rpx",
      name: "/static/mall/Icon_SC_shangpinjieshao.png"
    }),
    B: common_vendor.f(3, (i, k0, i0) => {
      return {};
    }),
    C: common_assets._imports_1,
    D: common_assets._imports_1,
    E: common_vendor.p({
      name: "minus",
      bold: "ture",
      color: "#000",
      size: "18rpx"
    }),
    F: common_vendor.t($data.value),
    G: common_vendor.p({
      name: "plus",
      bold: "ture",
      color: "#000",
      size: "18rpx"
    }),
    H: common_vendor.o(($event) => $data.value = $event),
    I: common_vendor.p({
      disabledInput: true,
      modelValue: $data.value
    }),
    J: common_vendor.p({
      width: "44rpx",
      name: "/static/mall/Icon_SC_xinzenggouwuche.png"
    }),
    K: common_vendor.o((...args) => $options.clickshopcat && $options.clickshopcat(...args)),
    L: common_vendor.o((...args) => $options.openconfirmorder && $options.openconfirmorder(...args)),
    M: common_vendor.sr("specification", "49d7e3f8-9"),
    N: common_vendor.p({
      mode: "bottom",
      closeable: "true",
      customStyle: $data.specification
    }),
    O: common_vendor.o((...args) => $options.openaddarea && $options.openaddarea(...args)),
    P: common_vendor.f(3, (i, k0, i0) => {
      return {
        a: "49d7e3f8-15-" + i0 + ",49d7e3f8-14",
        b: "49d7e3f8-16-" + i0 + ",49d7e3f8-14"
      };
    }),
    Q: common_vendor.p({
      text: "公司",
      plain: true,
      size: "mini"
    }),
    R: common_vendor.p({
      name: "/static/mall/Icon_gouxuan.png"
    }),
    S: common_vendor.sr("selectaddress", "49d7e3f8-14"),
    T: common_vendor.p({
      mode: "bottom",
      closeable: "true",
      customStyle: $data.selectaddress
    }),
    U: common_vendor.p({
      width: "",
      name: "/static/mall/Icon_QCBZ_baozhang.png"
    }),
    V: common_vendor.p({
      width: "",
      name: "/static/mall/Icon_QCBZ_baozhang.png"
    }),
    W: common_vendor.p({
      width: "",
      name: "/static/mall/Icon_QCBZ_baozhang.png"
    }),
    X: common_vendor.p({
      width: "",
      name: "/static/mall/Icon_QCBZ_baozhang.png"
    }),
    Y: common_vendor.sr("equity", "49d7e3f8-17"),
    Z: common_vendor.p({
      mode: "bottom",
      closeable: "true",
      customStyle: $data.equity
    }),
    aa: common_vendor.p({
      name: "/static/mall/Icon_GWC_sahuabiaoshi.png"
    }),
    ab: $data.addshopcat
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/mall/goods.js.map
