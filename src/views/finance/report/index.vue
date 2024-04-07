<script setup lang="ts">
import {
  delay,
  subBefore,
  deviceDetection,
  useResizeObserver
} from "@pureadmin/utils";
</script>

<template>
  <div class="main">
    <el-row :gutter="20">
      <el-col :span="12" :md="6" class="mb-3">
        <el-card>
          <template #header> 收入 </template>
          0.00
        </el-card>
      </el-col>
      <el-col :span="12" :md="6" class="mb-3">
        <el-card>
          <template #header> 支出 </template>
          0.00
        </el-card></el-col
      >
      <el-col :span="12" :md="6" class="mb-3">
        <el-card>
          <template #header> 金仓鼠 </template>
          0.00
        </el-card></el-col
      >
      <el-col :span="12" :md="6" class="mb-3">
        <el-card>
          <template #header>贝壳</template>
          0.00
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
