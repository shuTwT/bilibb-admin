<script setup lang="ts"></script>

<template>
  <div>
    <div role="heading" class="page-title">
      <span class="v-middle">场次数据</span
      ><!----><!----><!---->
    </div>
    <div>
      <div class="no-data" />
      <div class="no-data-msg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-title {
  margin: 0 0 20px;
  font-size: 24px;
  font-weight: normal;
  color: #333;
}

.v-middle {
  vertical-align: middle;
}

.no-data {
  height: 350px;
  margin: 20px auto;
  background: url("//s1.hdslb.com/bfs/static/blive/blfe-link-center/static/img/2.273d197.png")
    no-repeat center top #fff;
  border-radius: 12px;
}

.no-data-msg {
  width: 600px;
  margin: auto;
  color: #ff6c6c;
  text-align: center;
}
</style>
