<template>
  <div class="content">
    <el-card class="b-card">
      <canvas id="canvas_1" height="700" width="800"></canvas>
    </el-card>
    <el-card class="b-card">
      <canvas id="canvas_2" height="800" width="800"></canvas>
    </el-card>
    <el-card class="b-card">
      <canvas id="canvas_3" height="800" width="800"></canvas>
    </el-card>
  </div>
</template>

<script>
export default {
  created: function() {
    window.setTimeout(() => {
      this.initCanvas(), this.initCanvas2();this.initCanvas3()
    }, 50);
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
      for (let a = 0; a < 6; a++) {
        for (let b = 0; b < 6; b++) {
          ctx2.fillStyle = `rgb(${Math.floor(255 - 42.5 * a)},${Math.floor(
            255 - 42.5 * b
          )},0)`;
          console.log(`rgb(${(255 - 2) ^ a},${(255 - 2) ^ b},0)`);
          ctx2.fillRect(a * 40, b * 40, 40, 40);
        }
      }
    },
    initCanvas3: function() {
      const canvas = document.getElementById("canvas_3");
      if (!canvas.getContext) return;
      const ctx = canvas.getContext("2d");
      var lineJoin = ["round", "bevel", "miter"];
      ctx.lineWidth = 20;

      for (var i = 0; i < lineJoin.length; i++) {
        ctx.lineJoin = lineJoin[i];
        ctx.beginPath();
        ctx.moveTo(50, 50 + i * 50);
        ctx.lineTo(100, 100 + i * 50);
        ctx.lineTo(150, 50 + i * 50);
        ctx.lineTo(200, 100 + i * 50);
        ctx.lineTo(250, 50 + i * 50);
        ctx.stroke();
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
