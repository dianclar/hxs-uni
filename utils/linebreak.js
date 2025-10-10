//Canvas绘制自动换行文本函数，参数：Canvas上下文，文本，坐标，最大大小，行高
export function Canvaslinebreak(ctx, text, x, y, maxWidth, maxHeight, lineHeight) { 
	//文本对齐y
	ctx.textBaseline = 'top'
	//默认行高
	const fontSize = ctx.font.match(/\d+(?=px)/)[0]; 
	lineHeight = lineHeight || fontSize * 1.2; 
	// 设置默认最大宽高  
	const canvas = ctx.canvas;  
	const defaultMaxHeight = Math.max(0, canvas.height - y);  
	maxWidth = maxWidth ?? defaultMaxWidth;  
	const defaultMaxWidth = Math.max(0, canvas.width - x);  
	if(ctx.textAlign == 'right'){
		maxWidth = maxWidth ?? x
	}else if(ctx.textAlign == 'center'){
		if(defaultMaxWidth>x){
			maxWidth = maxWidth ?? x*2
		}else{
			maxWidth = maxWidth ?? defaultMaxWidth*2
		}
	}else{
		maxHeight = maxHeight ?? defaultMaxHeight; 
	}
	//对换行符换行
	const textnarr = text.split('\n');
	//处理宽
	let textharr = []//处理完成的结果
	let texti = ''//被减去的文本
	for(let i = 0;i < textnarr.length;i++){//处理每行文本
		let textwhile =  textnarr[i]//还需要处理的文本
		while(maxWidth<ctx.measureText(textwhile).width){//需处理文的宽大了
			while(maxWidth<ctx.measureText(textwhile).width && textwhile.length>1){//需处理文减1到合适
				texti = textwhile.slice(-1) + texti//保存要被减去的文本
				textwhile = textwhile.slice(0,-1)//减1
			}
			if(texti==''){//被减去的文本为空代表后面没有需要处理的了
				break
			}
			textharr.push(textwhile)//宽合适
			textwhile = texti//还需要处理的文本为被减去的文本
			texti= ''
		}
		textharr.push(textwhile)//宽合适
	}
	//处理高
	const texth = Math.trunc(maxHeight/lineHeight)//行数
	let textwarr = []//未添加省略号文本
	let textarr = []//待绘制文本
	if(textharr.length>texth){
		textwarr = textharr.slice(0,texth)//未添加省略号文本
		textwarr[textwarr.length-1] += '...'
		while(maxWidth<ctx.measureText(textwarr[textwarr.length-1]).width && textwarr[textwarr.length-1].length>3){//添加省略号超出了
			textwarr[textwarr.length-1] = textwarr[textwarr.length-1].substring(0,textwarr[textwarr.length-1].length-4) + '...'
		}
		textarr = textwarr//处理完毕
	}else{
		textarr = textharr//无需处理
	}
	//绘制
	for(let i = 0;i < textarr.length;i ++){
		ctx.fillText(textarr[i],x,y)
		y += lineHeight
	}
}
	