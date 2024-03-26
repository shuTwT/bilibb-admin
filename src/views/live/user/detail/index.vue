<script setup lang="ts">
import { useUserDetail } from "./utils/hook";

useUserDetail();
</script>

<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space10">
      <div class="layui-col">
        <div class="layui-row" style="display: flex; align-items: center">
          <div class="layui-col avatar">
            <img
              style="width: 100px; height: 100px; object-fit: cover"
              src="https://i2.hdslb.com/bfs/face/f48ca43199f93b07f0548b80eaad51d8b0a92049.jpg"
              alt="avatar"
            />
          </div>
        </div>
        <div class="layui-row">
          <div class="layui-col layui-col-xs4">
            <h2>南方今天摸鱼了吗</h2>
          </div>
          <div class="layui-col layui-col-xs4">
            <h3>uid:8368505</h3>
          </div>
          <div class="layui-col layui-col-xs4">
            <span>性别:暂无</span>
          </div>
        </div>

        <div class="layui-row">
          <div class="layui-col layui-col-xs3">
            <div class="layui-card">
              <div class="layui-card-header">进房量</div>
              <div class="layui-card-body number">1</div>
            </div>
          </div>
          <div class="layui-col layui-col-xs3">
            <div class="layui-card">
              <div class="layui-card-header">弹幕数量</div>
              <div class="layui-card-body number">2</div>
            </div>
          </div>
          <div class="layui-col layui-col-xs3">
            <div class="layui-card">
              <div class="layui-card-header">点赞次数</div>
              <div class="layui-card-body number">0</div>
            </div>
          </div>
          <div class="layui-col layui-col-xs3">
            <div class="layui-card">
              <div class="layui-card-header">送礼次数</div>
              <div class="layui-card-body number">0</div>
            </div>
          </div>
        </div>
        <div class="layui-row">
          <div class="layui-col layui-col-xs3">
            <div class="layui-card">
              <div class="layui-card-header">第一次进房</div>
              <div class="layui-card-body">2024-03-15 03:35:48</div>
            </div>
          </div>
          <div class="layui-col layui-col-xs3">
            <div class="layui-card">
              <div class="layui-card-header">第一次发弹幕</div>
              <div class="layui-card-body">2024-03-15 03:37:10</div>
            </div>
          </div>
          <div class="layui-col layui-col-xs3">
            <div class="layui-card">
              <div class="layui-card-header">上舰次数</div>
              <div class="layui-card-body number">0</div>
            </div>
          </div>
          <div class="layui-col layui-col-xs3">
            <div class="layui-card">
              <div class="layui-card-header">礼物价值(银瓜子)</div>
              <div class="layui-card-body number">0.00</div>
            </div>
          </div>
        </div>
        <div class="layui-row">
          <div class="layui-col layui-col-xs3">
            <div class="layui-card">
              <div class="layui-card-header">最后一次进房</div>
              <div class="layui-card-body">2024-03-15 03:35:48</div>
            </div>
          </div>
          <div class="layui-col layui-col-xs3">
            <div class="layui-card">
              <div class="layui-card-header">最后一次发弹幕</div>
              <div class="layui-card-body">2024-03-15 03:40:50</div>
            </div>
          </div>
          <div class="layui-col layui-col-xs3">
            <div class="layui-card">
              <div class="layui-card-header">第一次上舰</div>
              <div class="layui-card-body">暂无</div>
            </div>
          </div>
          <div class="layui-col layui-col-xs3">
            <div class="layui-card">
              <div class="layui-card-header">第一次送礼</div>
              <div class="layui-card-body">暂无</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="layui-row layui-col-space10">
      <div class="layui-col-xs12">
        <button class="layui-btn">更新数据</button>
      </div>
    </div>
    <div class="layui-row layui-col-space10">
      <div class="layui-col-xs12">
        <div class="layui-card layui-col-md6 layui-col-space10">
          <div class="layui-card-header">speak</div>
          <div class="layui-card-body">
            <table
              id="speak-table"
              class="layui-table"
              lay-filter="speak-table"
            />
          </div>
        </div>
        <div class="layui-card layui-col-md6 layui-col-space10">
          <div class="layui-card-header">日志</div>
          <div class="layui-card-body">
            <table id="log-table" class="layui-table" lay-filter="log-table" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
