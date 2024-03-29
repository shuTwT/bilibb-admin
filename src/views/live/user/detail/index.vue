<script setup lang="ts">
import { useUserDetail } from "./utils/hook";

const {
  dataList1,
  dataList2,
  loading,
  userInfo,
  columns1,
  columns2,
  refreshData,
  pagination1,
  pagination2
} = useUserDetail();
</script>

<template>
  <div style="max-width: 900px; margin: 0 auto">
    <el-row>
      <el-col :span="24">
        <el-image
          style="width: 100px; height: 100px; object-fit: cover"
          :src="userInfo.fa"
          alt="avatar"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col class="text-xl font-bold" :span="6">{{ userInfo.uname }}</el-col>
      <el-col class="text-xl font-bold" :span="6"
        >uid:{{ userInfo.uid }}</el-col
      >
      <el-col class="text-xl font-bold" :span="6"
        >性别:{{ userInfo.gender ?? "暂无" }}</el-col
      >
    </el-row>

    <el-row :gutter="20">
      <el-col :xs="12" :sm="6">
        <el-card>
          <template #header> 进房量</template>
          <template v-if="!loading" #default>
            {{ userInfo.UserEntry[0]?.num ?? "暂无" }}
          </template>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="6">
        <el-card>
          <template #header> 弹幕数量</template>
          <template v-if="!loading" #default>
            {{ userInfo.UserDanmu[0]?.num ?? "暂无" }}
          </template>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="6">
        <el-card>
          <template #header> 点赞次数</template>
          0
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="6">
        <el-card>
          <template #header> 送礼次数</template>
          0
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="12" :sm="6">
        <el-card>
          <template #header> 第一次进房</template>
          2024-03-15 03:35:48
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="6">
        <el-card>
          <template #header> 第一次发弹幕</template>
          <template v-if="!loading">
            {{ userInfo.UserDanmu[0]?.first ?? "暂无" }}
          </template>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="6">
        <el-card>
          <template #header> 上舰次数</template>
          0
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="6">
        <el-card>
          <template #header> 礼物价值(银瓜子)</template>
          0.00
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="12" :sm="6">
        <el-card>
          <template #header> 最后一次进房</template>
          <template #default> 2024-03-15 03:35:48 </template>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="6">
        <el-card>
          <template #header> 最后一次发弹幕</template>
          <template v-if="!loading" #default>
            {{ userInfo.UserDanmu[0]?.first ?? "暂无" }}
          </template>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="6">
        <el-card>
          <template #header> 第一次上舰</template>
          <template v-if="!loading" #default> 暂无 </template>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="6">
        <el-card>
          <template #header> 第一次送礼</template>
          <template #default> 暂无 </template>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-bottom: 20px">
      <el-col :span="24">
        <el-button type="success" @click="refreshData">更新数据</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :md="12">
        <el-card :body-style="{ padding: 0 }">
          <template #header> 弹幕</template>
          <template #default>
            <pure-table
              ref="tableRef"
              :loading="loading"
              :data="dataList1"
              :columns="columns1"
              :pagination="pagination1"
            />
          </template>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card :body-style="{ padding: 0 }">
          <template #header> 日志</template>
          <template #default>
            <pure-table
              ref="tableRef"
              :loading="loading"
              :data="dataList2"
              :columns="columns2"
              :pagination="pagination2"
            />
          </template>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.el-card {
  margin-bottom: 20px;
}
</style>
