"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      Remarks: false,
      invoiceup: false,
      privacyup: false,
      enterprise: false,
      invoiceuptypetagindividual: "invoiceuptypetagaction",
      invoiceuptypetagenterprise: "invoiceuptypetaginfo"
    };
  },
  methods: {
    openordercompleted() {
      common_vendor.index.navigateTo({
        url: "/pages/index/completed/ordercompleted"
      });
    },
    invoiceuptype(e) {
      if (e == 1) {
        this.enterprise = false;
        this.invoiceuptypetagindividual = "invoiceuptypetagaction";
        this.invoiceuptypetagenterprise = "invoiceuptypetaginfo";
      } else {
        this.enterprise = true;
        this.invoiceuptypetagindividual = "invoiceuptypetaginfo";
        this.invoiceuptypetagenterprise = "invoiceuptypetagaction";
      }
    }
  }
};
if (!Array) {
  const _easycom_uv_navbar2 = common_vendor.resolveComponent("uv-navbar");
  const _easycom_uv_status_bar2 = common_vendor.resolveComponent("uv-status-bar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_overlay2 = common_vendor.resolveComponent("uv-overlay");
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  (_easycom_uv_navbar2 + _easycom_uv_status_bar2 + _easycom_uv_icon2 + _easycom_uv_overlay2 + _easycom_uv_input2 + _easycom_uv_form_item2 + _easycom_uv_form2)();
}
const _easycom_uv_navbar = () => "../../../uni_modules/uv-navbar/components/uv-navbar/uv-navbar.js";
const _easycom_uv_status_bar = () => "../../../uni_modules/uv-status-bar/components/uv-status-bar/uv-status-bar.js";
const _easycom_uv_icon = () => "../../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_overlay = () => "../../../uni_modules/uv-overlay/components/uv-overlay/uv-overlay.js";
const _easycom_uv_input = () => "../../../uni_modules/uv-input/components/uv-input/uv-input.js";
const _easycom_uv_form_item = () => "../../../uni_modules/uv-form/components/uv-form-item/uv-form-item.js";
const _easycom_uv_form = () => "../../../uni_modules/uv-form/components/uv-form/uv-form.js";
if (!Math) {
  (_easycom_uv_navbar + _easycom_uv_status_bar + _easycom_uv_icon + _easycom_uv_overlay + _easycom_uv_input + _easycom_uv_form_item + _easycom_uv_form)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "确认订单",
      autoBack: "true"
    }),
    b: common_vendor.p({
      width: "28rpx",
      height: "34rpx",
      name: "/static/mall/Icon_DD_dizhidingwei.png"
    }),
    c: common_vendor.p({
      width: "12rpx",
      height: "22rpx",
      name: "/static/mall/icon_jinru_03.png"
    }),
    d: common_assets._imports_0$2,
    e: common_assets._imports_1,
    f: common_vendor.p({
      width: "12rpx",
      height: "22rpx",
      name: "/static/mall/icon_jinru_03.png"
    }),
    g: common_vendor.o(($event) => $data.Remarks = true),
    h: common_vendor.p({
      width: "12rpx",
      height: "22rpx",
      name: "/static/mall/icon_jinru_03.png"
    }),
    i: common_vendor.o(($event) => $data.invoiceup = true),
    j: common_vendor.o(($event) => $data.privacyup = true),
    k: common_vendor.p({
      size: "26rpx",
      name: "info-circle"
    }),
    l: common_vendor.p({
      width: "50rpx",
      height: "50rpx",
      name: "/static/mall/Icon_GWC_yixuanzhong_32x.png"
    }),
    m: common_vendor.o((...args) => $options.openordercompleted && $options.openordercompleted(...args)),
    n: common_vendor.o(($event) => $data.Remarks = false),
    o: common_vendor.p({
      name: "close"
    }),
    p: _ctx.text,
    q: common_vendor.o(($event) => _ctx.text = $event.detail.value),
    r: $data.Remarks,
    s: common_vendor.o(() => {
    }),
    t: common_vendor.o(($event) => $data.Remarks = false),
    v: common_vendor.p({
      show: $data.Remarks
    }),
    w: common_vendor.o(($event) => $data.invoiceup = false),
    x: common_vendor.p({
      name: "close"
    }),
    y: common_vendor.n($data.invoiceuptypetagindividual),
    z: common_vendor.o(($event) => $options.invoiceuptype(1)),
    A: common_vendor.n($data.invoiceuptypetagenterprise),
    B: common_vendor.o(($event) => $options.invoiceuptype(2)),
    C: common_vendor.p({
      border: "none",
      placeholder: "请输入个人名称 (必填)"
    }),
    D: common_vendor.p({
      label: "个人名称"
    }),
    E: !$data.enterprise,
    F: common_vendor.p({
      border: "none",
      placeholder: "请输入单位名称 (必填)"
    }),
    G: common_vendor.p({
      label: "单位名称"
    }),
    H: common_vendor.p({
      border: "none",
      placeholder: "请在此填写纳税人识别号",
      ["placeholder-style"]: "color: #0D7CFF;"
    }),
    I: common_vendor.p({
      label: "纳税人识别号"
    }),
    J: $data.enterprise,
    K: common_vendor.p({
      border: "none",
      placeholder: "请输入收票人手机号 (必填)"
    }),
    L: common_vendor.p({
      label: "收票人手机"
    }),
    M: common_vendor.p({
      border: "none",
      placeholder: "请输入个人名称"
    }),
    N: common_vendor.p({
      label: "纳税人识别号"
    }),
    O: common_vendor.p({
      labelWidth: "200rpx"
    }),
    P: $data.invoiceup,
    Q: common_vendor.o(() => {
    }),
    R: common_vendor.o(($event) => $data.invoiceup = false),
    S: common_vendor.p({
      show: $data.invoiceup,
      zIndex: "18888"
    }),
    T: common_vendor.o(($event) => $data.privacyup = false),
    U: common_vendor.p({
      name: "close"
    }),
    V: $data.privacyup,
    W: common_vendor.o(() => {
    }),
    X: common_vendor.o(($event) => $data.privacyup = false),
    Y: common_vendor.p({
      show: $data.privacyup,
      zIndex: "18888"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/mall/confirmorder.js.map
