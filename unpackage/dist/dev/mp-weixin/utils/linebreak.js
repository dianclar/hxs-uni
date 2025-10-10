"use strict";
function Canvaslinebreak(ctx, text, x, y, maxWidth, maxHeight, lineHeight) {
  ctx.textBaseline = "top";
  const fontSize = ctx.font.match(/\d+(?=px)/)[0];
  lineHeight = lineHeight || fontSize * 1.2;
  const canvas = ctx.canvas;
  const defaultMaxHeight = Math.max(0, canvas.height - y);
  maxWidth = maxWidth ?? defaultMaxWidth;
  const defaultMaxWidth = Math.max(0, canvas.width - x);
  if (ctx.textAlign == "right") {
    maxWidth = maxWidth ?? x;
  } else if (ctx.textAlign == "center") {
    if (defaultMaxWidth > x) {
      maxWidth = maxWidth ?? x * 2;
    } else {
      maxWidth = maxWidth ?? defaultMaxWidth * 2;
    }
  } else {
    maxHeight = maxHeight ?? defaultMaxHeight;
  }
  const textnarr = text.split("\n");
  let textharr = [];
  let texti = "";
  for (let i = 0; i < textnarr.length; i++) {
    let textwhile = textnarr[i];
    while (maxWidth < ctx.measureText(textwhile).width) {
      while (maxWidth < ctx.measureText(textwhile).width && textwhile.length > 1) {
        texti = textwhile.slice(-1) + texti;
        textwhile = textwhile.slice(0, -1);
      }
      if (texti == "") {
        break;
      }
      textharr.push(textwhile);
      textwhile = texti;
      texti = "";
    }
    textharr.push(textwhile);
  }
  const texth = Math.trunc(maxHeight / lineHeight);
  let textwarr = [];
  let textarr = [];
  if (textharr.length > texth) {
    textwarr = textharr.slice(0, texth);
    textwarr[textwarr.length - 1] += "...";
    while (maxWidth < ctx.measureText(textwarr[textwarr.length - 1]).width && textwarr[textwarr.length - 1].length > 3) {
      textwarr[textwarr.length - 1] = textwarr[textwarr.length - 1].substring(0, textwarr[textwarr.length - 1].length - 4) + "...";
    }
    textarr = textwarr;
  } else {
    textarr = textharr;
  }
  for (let i = 0; i < textarr.length; i++) {
    ctx.fillText(textarr[i], x, y);
    y += lineHeight;
  }
}
exports.Canvaslinebreak = Canvaslinebreak;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/linebreak.js.map
