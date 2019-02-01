
<template>
  <main>
    <input name="border-style" id="pb" type="radio" >
    <label for="pb">padding-box</label>
    <input name="border-style" id="cb" type="radio">
    <label for="cb">content-box</label>
    <div class="content">山寺清幽，直踞千寻云岭</div>
  </main>
</template>
<script>
</script>
<style scoped>
main {
  height: 100vh;
  width: 100%;
  padding: 60px 80px 80px;
}
.content {
  padding: 12px;
  margin: 40px auto;
  background: white;
  border: 10px solid hsla(0, 0%, 100%, 0.5);
}
label {
  color: #050505;
}
input[id="pb"]:checked ~ .content {
  background-clip: padding-box;
}
input[id="cb"]:checked ~ .content {
  background-clip: content-box;
}
</style>