"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: ["title"],
  data() {
    return {
      form: {
        title: "",
        info: ""
      }
    };
  },
  methods: {},
  mounted() {
    common_vendor.index.$on("button-poster", () => common_vendor.index.$emit("submit", {
      title: this.title,
      data: this.form
    }));
  }
};
if (!Array) {
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_textarea2 = common_vendor.resolveComponent("uv-textarea");
  (_easycom_uv_input2 + _easycom_uv_textarea2)();
}
const _easycom_uv_input = () => "../../uni_modules/uv-input/components/uv-input/uv-input.js";
const _easycom_uv_textarea = () => "../../uni_modules/uv-textarea/components/uv-textarea/uv-textarea.js";
if (!Math) {
  (_easycom_uv_input + _easycom_uv_textarea)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.title),
    b: common_vendor.o(($event) => $data.form.title = $event),
    c: common_vendor.p({
      placeholder: $props.title == "原典语录" ? "请输入原典摘自" : "请输入党建语录摘自",
      placeholderClass: "placeholder",
      border: "none",
      modelValue: $data.form.title
    }),
    d: common_vendor.o(($event) => $data.form.info = $event),
    e: common_vendor.p({
      placeholder: $props.title == "原典语录" ? "请输入原典摘自" : "请输入党建语录摘自",
      placeholderClass: "placeholder",
      height: "200rpx",
      border: "none",
      customStyle: {
        background: "#F4F6F8",
        borderRadius: "10rpx",
        padding: "30rpx 24rpx"
      },
      modelValue: $data.form.info
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-95ce376c"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/setShare/quotation.js.map
