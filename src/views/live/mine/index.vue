<script setup lang="ts">
import { useMine } from "./utils/hook";
const { chart1Ref, chart2Ref } = useMine();
</script>
<template>
  <div class="main">
    <el-row style="margin-bottom: 5px">
      <el-button>近7天</el-button>
      <el-button>近3周</el-button>
      <el-button>近3月</el-button>
      <el-button>近6月</el-button>
      <el-button>近12月</el-button>
    </el-row>
    <el-row>
      <el-col :md="8">
        <el-row style="margin-bottom: 5px">
          <el-col :span="12">
            <div class="flex flex-col text-xl">
              <div class="font-bold">新进房量</div>
              <div>0</div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="flex flex-col text-xl">
              <div class="font-bold">进房量</div>
              <div>0</div>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 5px">
          <el-col :span="12">
            <div class="flex flex-col text-xl">
              <div class="font-bold">发言人数</div>
              <div>0</div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="flex flex-col text-xl">
              <div class="font-bold">礼物金额</div>
              <div>0</div>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 5px">
          <el-col :span="12">
            <div class="flex flex-col text-xl">
              <div class="font-bold">弹幕数量</div>
              <div>0</div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="flex flex-col text-xl">
              <div class="font-bold">礼物</div>
              <div>0</div>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 5px">
          <el-col :span="12">
            <div class="flex flex-col text-xl">
              <div class="font-bold">分享</div>
              <div>0</div>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 5px">
          <el-col :span="12">
            <div class="flex flex-col text-xl">
              <div class="font-bold">点赞</div>
              <div>0</div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="flex flex-col text-xl">
              <div class="font-bold">关注</div>
              <div>0</div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :md="16">
        <el-row>
          <el-col :span="24">
            <div class="text-2xl font-bold">进房量</div>
            <div ref="chart1Ref" class="h-[260px]" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="text-2xl font-bold">弹幕数量</div>
            <div ref="chart2Ref" class="h-[260px]" />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
