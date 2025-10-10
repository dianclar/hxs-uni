"use strict";
const common_vendor = require("../../common/vendor.js");
const request_api_Config = require("../../request/api/Config.js");
const request_api_social = require("../../request/api/social.js");
const request_api_activity = require("../../request/api/activity.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      clockin: false,
      previewArray: [],
      socialarr: [],
      activityarr: []
    };
  },
  watch: {
    clockin(n) {
      if (n) {
        common_vendor.index.hideTabBar();
      } else {
        common_vendor.index.showTabBar();
      }
    }
  },
  methods: {
    openMindsetReview(u) {
      common_vendor.index.navigateTo({
        url: `/pages/index/clockin/MindsetReview?title=${u}`
      });
    },
    openSociety(d) {
      if (d == 6) {
        common_vendor.index.navigateTo({
          url: "/pages/index/community/HuaxueSociety"
        });
      }
    },
    opensetShare() {
      common_vendor.index.navigateTo({
        url: "/pages/index/clockin/setShare"
      });
    }
  },
  created() {
    request_api_Config.Getconfigglobalimage({
      "imgKey": "index_top3"
    }).then((d) => {
      this.previewArray = d.imgVo.previewArray;
    });
    request_api_social.Getsocialquery({}).then((d) => {
      this.socialarr = d.socialList;
    });
    request_api_activity.Getactivityquery({
      "pageId": 1,
      "pageSize": 10
    }).then((d) => {
      this.activityarr = d.pageInfo.records;
    });
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  const _easycom_uv_overlay2 = common_vendor.resolveComponent("uv-overlay");
  (_easycom_uv_icon2 + _easycom_uv_safe_bottom2 + _easycom_uv_overlay2)();
}
const _easycom_uv_icon = () => "../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_safe_bottom = () => "../../uni_modules/uv-safe-bottom/components/uv-safe-bottom/uv-safe-bottom.js";
const _easycom_uv_overlay = () => "../../uni_modules/uv-overlay/components/uv-overlay/uv-overlay.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_safe_bottom + _easycom_uv_overlay)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_assets._imports_0$1,
    c: common_vendor.f($data.previewArray, (i, k0, i0) => {
      return {
        a: i,
        b: i
      };
    }),
    d: common_assets._imports_2,
    e: common_assets._imports_3,
    f: common_assets._imports_4,
    g: common_assets._imports_5,
    h: common_assets._imports_6,
    i: common_assets._imports_7,
    j: common_vendor.f($data.socialarr, (i, k0, i0) => {
      return {
        a: i.id,
        b: i.socialImg,
        c: common_vendor.o(($event) => $options.openSociety(i.id), i.id)
      };
    }),
    k: common_assets._imports_8,
    l: common_assets._imports_9,
    m: common_vendor.f($data.activityarr, (i, t, i0) => {
      return common_vendor.e({
        a: i.coverImg,
        b: common_vendor.t(i.activityTitle),
        c: common_vendor.t(i.proName),
        d: !t == $data.activityarr.length - 1
      }, !t == $data.activityarr.length - 1 ? {} : {}, {
        e: i.id
      });
    }),
    n: common_vendor.o(($event) => $data.clockin = true),
    o: common_vendor.o(($event) => $data.clockin = false),
    p: common_vendor.p({
      name: "arrow-left",
      size: "34rpx"
    }),
    q: common_assets._imports_10,
    r: common_vendor.o(($event) => $options.openMindsetReview("练操打卡")),
    s: common_assets._imports_11,
    t: common_vendor.o(($event) => $options.openMindsetReview("心性复盘")),
    v: common_assets._imports_11,
    w: common_vendor.o((...args) => $options.opensetShare && $options.opensetShare(...args)),
    x: common_vendor.o(() => {
    }),
    y: common_vendor.o(($event) => $data.clockin = false),
    z: common_vendor.p({
      show: $data.clockin
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/tabs/index.js.map
