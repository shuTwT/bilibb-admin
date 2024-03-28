<script setup lang="ts">
import { useUserDetail } from "./utils/hook";

const { loading, userInfo } = useUserDetail();
</script>

<template>
  <div style="max-width: 900px; margin: 0 auto">
    <template v-if="!loading">
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
        <el-col :span="6">{{ userInfo.uname }}</el-col>
        <el-col :span="6">uid:{{ userInfo.uid }}</el-col>
        <el-col :span="6">性别:{{ userInfo.gender ?? "暂无" }}</el-col>
      </el-row>

      <el-row>
        <el-col :xs="12" :sm="6">
          <el-card>
            <template #header> 进房量 </template>
            {{ userInfo.UserEntry[0].num }}
          </el-card>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-card>
            <template #header> 弹幕数量 </template>
            {{ userInfo.UserDanmu[0].num }}
          </el-card>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-card>
            <template #header> 点赞次数 </template>
            0
          </el-card>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-card>
            <template #header> 送礼次数 </template>
            0
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="12" :sm="6">
          <el-card>
            <template #header> 第一次进房 </template>
            2024-03-15 03:35:48
          </el-card>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-card>
            <template #header> 第一次发弹幕 </template>
            {{ userInfo.UserDanmu[0].first }}
          </el-card>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-card>
            <template #header> 上舰次数 </template>
            0
          </el-card>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-card>
            <template #header> 礼物价值(银瓜子) </template>
            0.00
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="12" :sm="6">
          <el-card>
            <template #header> 最后一次进房 </template>
            2024-03-15 03:35:48
          </el-card>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-card>
            <template #header> 最后一次发弹幕 </template>
            {{ userInfo.UserDanmu[0].first }}
          </el-card>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-card>
            <template #header> 第一次上舰 </template>
            暂无
          </el-card>
        </el-col>
        <el-col :xs="12" :sm="6">
          <el-card>
            <template #header> 第一次送礼</template>
            暂无
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-button type="success">更新数据</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :md="12">
          <el-card>
            <template #header> 弹幕 </template>
            <template #default>
              <pure-table />
            </template>
          </el-card>
        </el-col>
        <el-col :md="12">
          <el-card>
            <template #header> 日志 </template>
            <template #default>
              <pure-table />
            </template>
          </el-card>
        </el-col>
      </el-row>
    </template>
  </div>
</template>

<style>
.layui-card-body.number {
  font-size: 29px;
  line-height: 60px;
}
</style>
