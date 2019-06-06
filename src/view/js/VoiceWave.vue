<template>
  <div>
    <el-button @click="play">播放</el-button>
    <el-card>
      <canvas id="canvas_play" height="800" width="800"></canvas>
    </el-card>
  </div>
</template>

<script>
export default {
  created() {
    this.getMusic();
  },
  data() {
    return { source: {}, ctx: {}, audioCtx: {} };
  },
  methods: {
    initCanvas: function() {
      const canvas = document.getElementById("canvas_play");
      console.log(canvas);
      if (!canvas.getContext) {
        alert("浏览器不支持");
        return;
      }
      this.ctx = canvas.getContext("2d");
    },
    play() {
      this.source.start(0);
      this.drawCanvas();
    },
    drawCanvas() {
      const canvas = document.getElementById("canvas_play");
      if (!canvas.getContext) {
        alert("浏览器不支持");
        return;
      }
      const canvasCtx = canvas.getContext("2d");
      const analyser = this.audioCtx.createAnalyser();
      analyser.fftSize = 2048;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      
      analyser.getByteTimeDomainData(dataArray);
      console.log(dataArray)

      canvasCtx.fillStyle = "rgb(200, 200, 200)";
      canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = "rgb(0, 0, 0)";

      canvasCtx.beginPath();

      var sliceWidth = (canvas.width * 1.0) / bufferLength;
      var x = 0;


      for (var i = 0; i < bufferLength; i++) {
        var v = dataArray[i] / 128.0;
        var y = (v * canvas.height) / 2;

        if (i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }
    },
    getMusic() {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      this.audioCtx = audioCtx;
      const source = audioCtx.createBufferSource();
      this.source = source;
      var request = new XMLHttpRequest();

      request.open("GET", "static/hello.ogg", true);

      request.responseType = "arraybuffer";

      request.onload = function() {
        var audioData = request.response;
        audioCtx.decodeAudioData(
          audioData,
          function(buffer) {
            source.buffer = buffer;

            source.connect(audioCtx.destination);
            source.loop = true;
          },

          function(e) {
            "Error with decoding audio data" + e.err;
          }
        );
      };

      request.send();
    }
  }
};
</script>

<style>
</style>
