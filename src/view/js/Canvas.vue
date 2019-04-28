<template>
  <div class="content">
    <el-card class="b-card">
      <canvas id="canvas_1" height="700" width="800"></canvas>
    </el-card>
    <el-card class="b-card">
      <canvas id="canvas_2" height="800" width="800"></canvas>
    </el-card>
  </div>
</template>

<script>
export default {
  created: function() {
    window.setTimeout(()=>{this.initCanvas(),this.initCanvas2()}, 50);
  },
  methods: {
    initCanvas: function() {
      const canvas = document.getElementById("canvas_1");
      if (!canvas.getContext) {
        alert("浏览器不支持");
        return;
      }
      var ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(50, 0);
      ctx.lineTo(200, 0);
      ctx.lineTo(200, 100);
      ctx.closePath();
      ctx.stroke(); //绘制路径。
      //画圆
      ctx.beginPath();
      ctx.arc(50, 50, 40, 0, Math.PI / 2, false);
      ctx.stroke(); //绘制路径。
      ctx.beginPath();
      ctx.arc(50, 150, 40, -Math.PI / 2, Math.PI / 2, false);
      ctx.fill();
      // 画圆弧
      ctx.beginPath();
      ctx.moveTo(50, 50);
      //  参数1、2：控制点1坐标   参数3、4：控制点2坐标  参数4：圆弧半径
      ctx.arcTo(200, 50, 200, 200, 100);
      ctx.lineTo(200, 200);
      ctx.stroke();
      //  用三个点确定圆弧
      ctx.beginPath();
      ctx.rect(50, 50, 10, 10);
      ctx.rect(200, 50, 10, 10);
      ctx.rect(200, 200, 10, 10);
      ctx.fill();

      //绘制二次贝塞尔曲线
      ctx.beginPath();
      ctx.moveTo(200, 250); //起始点
      const cp1x = 250,
        cp1y = 300; //控制点1
      const cp2x = 300,
        cp2y = 450; //控制点2
      const x = 300,
        y = 300; // 结束点

      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
      ctx.stroke();
    },
    initCanvas2: function() {
      const canvas2 = document.getElementById("canvas_2");
      if (!canvas2.getContext) {
        alert("浏览器不支持");
        return;
      }
      const ctx2 = canvas2.getContext("2d");
      for (let a = 0, b = 0; a < 6; a++) {
        for (b; b < 6; b++) {
          ctx2.fillStyle = `rgb(${(255 - a) ^ a},${(255 - b) ^ b},0`;
          ctx2.fillRect(a * 40, b * 40, 10, 10);
        }
      }
    }
  }
};
</script>

<style>
.canvas_1 {
  height: 400px;
  width: 400px;
}
</style>
