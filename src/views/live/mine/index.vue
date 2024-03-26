<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getConnectList } from "@/api/live";
const tableData = ref([]);
onMounted(() => {
  getConnectList().then(res => {
    console.log(res);
    tableData.value = res.data;
  });
});
</script>
<template>
  <div class="main">
    <el-table style="width: 100%">
      <el-table-column prop="roomId" label="房间号" />
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="tags" label="标签" />
      <el-table-column prop="keyframe" label="关键帧" />
      <el-table-column prop="userCover" label="封面" />
      <el-table-column label="操作" />
    </el-table>
  </div>
</template>
