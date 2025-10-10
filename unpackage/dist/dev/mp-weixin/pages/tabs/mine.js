"use strict";
const common_vendor = require("../../common/vendor.js");
const request_request = require("../../request/request.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => this.login(), 3e3);
  },
  methods: {
    openmallorder() {
      common_vendor.index.navigateTo({
        url: "/pages/index/mall/mallorder"
      });
    },
    loginn() {
      common_vendor.index.getUserProfile({
        //获取用户信息
        desc: "xmmn",
        success(user) {
          common_vendor.index.__f__("log", "at pages/tabs/mine.vue:146", 11111, user);
        }
      });
    },
    login() {
      const that = this;
      common_vendor.index.login({
        success(res) {
          let paramCode = {};
          paramCode.code = res.code;
          common_vendor.index.__f__("log", "at pages/tabs/mine.vue:156", "paramCode", paramCode);
          request_request.request({
            url: "/wx/get/openid",
            method: "GET",
            data: paramCode
          }).then((res2) => {
            common_vendor.index.__f__("log", "at pages/tabs/mine.vue:162", "APP.....................:", res2);
            common_vendor.index.setStorageSync("memberId", res2.data.memberId);
            common_vendor.index.setStorageSync("openId", res2.data.openId);
            that.$isResolve();
          }).catch((error) => {
            common_vendor.index.__f__("log", "at pages/tabs/mine.vue:167", "错误", error);
            $p.showToast("error", "系统繁忙", 1500);
          });
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_list_item2 = common_vendor.resolveComponent("uv-list-item");
  const _easycom_uv_list2 = common_vendor.resolveComponent("uv-list");
  (_easycom_uv_icon2 + _easycom_uv_list_item2 + _easycom_uv_list2)();
}
const _easycom_uv_icon = () => "../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_list_item = () => "../../uni_modules/uv-list/components/uv-list-item/uv-list-item.js";
const _easycom_uv_list = () => "../../uni_modules/uv-list/components/uv-list/uv-list.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_list_item + _easycom_uv_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_1,
    b: common_vendor.o((...args) => $options.loginn && $options.loginn(...args)),
    c: common_vendor.p({
      width: "16rpx",
      height: "26rpx",
      name: "/static/mine/Icon_WD_jinruxiangqing.png"
    }),
    d: common_vendor.p({
      width: "34rpx",
      height: "34rpx",
      name: "/static/mine/Icon_WD_kefu.png"
    }),
    e: common_vendor.o((...args) => $options.openmallorder && $options.openmallorder(...args)),
    f: common_assets._imports_1$1,
    g: common_vendor.p({
      width: "12rpx",
      height: "22rpx",
      name: "/static/mine/Icon_jinru_baise.png"
    }),
    h: common_vendor.p({
      name: "arrow-right",
      size: "22rpx"
    }),
    i: common_assets._imports_2$1,
    j: common_assets._imports_3$1,
    k: common_assets._imports_4$1,
    l: common_assets._imports_5$1,
    m: common_assets._imports_6$1,
    n: common_vendor.p({
      title: "我的活动",
      link: true
    }),
    o: common_vendor.p({
      title: "我的捐助",
      link: true
    }),
    p: common_vendor.p({
      title: "传递好书",
      link: true
    }),
    q: common_vendor.p({
      title: "地址管理",
      link: true
    }),
    r: common_vendor.p({
      customStyle: "padding-right: 30rpx;margin-top: 39rpx;gap: 20rpx;"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/tabs/mine.js.map
