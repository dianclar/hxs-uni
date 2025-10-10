"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_linebreak = require("../../utils/linebreak.js");
const _sfc_main = {
  data() {
    return {
      submitnum: 0,
      Canvasdata: {
        originalcanon: {
          title: "",
          info: ""
        },
        Party: {
          title: "",
          info: ""
        }
      }
    };
  },
  methods: {
    async htmltoimg() {
      const unca = common_vendor.index.createOffscreenCanvas({
        type: "2d",
        width: 750,
        height: 1336
      });
      const ctx = unca.getContext("2d");
      ctx.fillStyle = "#1E1A1B";
      ctx.font = "bold 39px 'Source Han Sans CN'";
      utils_linebreak.Canvaslinebreak(ctx, "装藏科技·幽莲数智", 70, 70);
      ctx.font = "400 23px 'Source Han Sans CN'";
      utils_linebreak.Canvaslinebreak(ctx, this.Canvasdata.originalcanon.info, 70, 152, 400, 120, 39);
      utils_linebreak.Canvaslinebreak(ctx, this.Canvasdata.Party.info, 70, 355, 400, 120, 39);
      ctx.font = "bold 23px 'Source Han Sans CN'";
      utils_linebreak.Canvaslinebreak(ctx, this.Canvasdata.originalcanon.title, 70, 281, 610, 100);
      utils_linebreak.Canvaslinebreak(ctx, this.Canvasdata.Party.title, 70, 485, 610, 100);
      ctx.font = "bold 31px 'Source Han Sans CN'";
      ctx.textAlign = "right";
      utils_linebreak.Canvaslinebreak(ctx, "2025.9", 680, 70);
      ctx.font = "bold 191px 'Source Han Sans CN'";
      utils_linebreak.Canvaslinebreak(ctx, "03", 680, 118);
      ctx.font = "bold 26px 'Source Han Sans CN'";
      utils_linebreak.Canvaslinebreak(ctx, "星期三", 680, 286);
      utils_linebreak.Canvaslinebreak(ctx, "农历七月十二", 680, 322);
      ctx.font = "bold 23px 'Source Han Sans CN'";
      utils_linebreak.Canvaslinebreak(ctx, "归\n真\n读\n原\n典\n·\n返\n濮\n做\n真\n人", 680, 592, void 0, void 0, 30);
      ctx.font = "bold 19px 'Source Han Sans CN'";
      ctx.fillStyle = "#B6B6B6";
      utils_linebreak.Canvaslinebreak(ctx, "长按识别小程序码", 720, 1245);
      let caimg = unca.createImage();
      caimg.src = "/static/logo.png";
      caimg.onload = () => {
        ctx.drawImage(caimg, 70, 592, 457, 674);
        ctx.drawImage(caimg, 578, 1103, 129, 129);
        const imgData = ctx.canvas.toDataURL("image/png");
        this.$emit("poster", imgData);
      };
    }
  },
  mounted() {
    common_vendor.index.$on("submit", (d) => {
      this.submitnum++;
      if (d.title == "原典语录") {
        this.Canvasdata.originalcanon.info = d.data.info;
        this.Canvasdata.originalcanon.title = d.data.title;
      }
      if (d.title == "党建语录") {
        this.Canvasdata.Party.info = d.data.info;
        this.Canvasdata.Party.title = d.data.title;
      }
      if (this.submitnum == 2) {
        this.submitnum = 0;
        this.htmltoimg(this.Canvasdata);
      }
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-764dc1ec"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/poster/poster1.js.map
