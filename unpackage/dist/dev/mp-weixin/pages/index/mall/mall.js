"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      linecolor: "",
      listdata: [],
      goodsarr: []
    };
  },
  created() {
    common_vendor.pathToBase64("/static/community/icon_biaozhu.png").then((base64) => {
      this.linecolor = base64;
    }), this.goodsarr = [{
      id: 1,
      mainImg: "https://hua-1378514281.cos.ap-guangzhou.myqcloud.com/static/static/logo.png",
      title: "易中天带你读懂中国系列全套5册 读城记+品人录+大话方言+中 ...",
      price: 168,
      delPrice: 256,
      saleNum: "2000+"
    }];
  },
  methods: {
    opengoods() {
      common_vendor.index.navigateTo({
        url: "/pages/index/mall/goods"
      });
    },
    navigateBack() {
      common_vendor.index.navigateBack();
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  (_easycom_uv_icon2 + _easycom_uv_tabs2)();
}
const _easycom_uv_icon = () => "../../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_tabs = () => "../../../uni_modules/uv-tabs/components/uv-tabs/uv-tabs.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_tabs)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "arrow-left",
      size: "36rpx",
      color: "#fff"
    }),
    b: common_vendor.o((...args) => $options.navigateBack && $options.navigateBack(...args)),
    c: common_assets._imports_0$1,
    d: common_assets._imports_1$2,
    e: common_vendor.p({
      list: $data.listdata,
      ["line-color"]: `url(${$data.linecolor})`,
      lineHeight: "14rpx",
      ["line-width"]: "39rpx",
      activeStyle: "\r\n		font-family: PingFang SC;\r\n		font-weight: bold;\r\n		font-size: 30rpx;\r\n		color: #0D7CFF;\r\n		line-height: 44rpx;",
      inactiveStyle: "\r\n		font-family: PingFang SC;\r\n		font-weight: 500;\r\n		font-size: 28rpx;\r\n		color: #92969E;\r\n		line-height: 44rpx;",
      itemStyle: "\r\n		padding: 0 30rpx;\r\n		padding-bottom:20rpx"
    }),
    f: common_vendor.f($data.goodsarr, (i, k0, i0) => {
      return {
        a: i.mainImg,
        b: common_vendor.t(i.title),
        c: common_vendor.f(3, (i2, k1, i1) => {
          return {};
        }),
        d: common_vendor.t(i.Price),
        e: common_vendor.t(i.delPrice),
        f: common_vendor.t(i.saleNum),
        g: i.id,
        h: common_vendor.o((...args) => $options.opengoods && $options.opengoods(...args), i.id)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/index/mall/mall.js.map
