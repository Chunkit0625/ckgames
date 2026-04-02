// TikTok 小游戏 SDK 初始化 (必须包含，否则审核不通过)
if (typeof tt !== 'undefined') {
    tt.onShow((res) => {
        console.log("游戏已启动");
    });

    // 创建游戏画布示例
    const canvas = tt.createCanvas();
    const context = canvas.getContext('2d');
    
    // 画一个简单的背景和文字
    context.fillStyle = '#000000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#ffffff';
    context.font = "24px Arial";
    context.fillText("Game Loaded Successfully", 20, 100);
}
