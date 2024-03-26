<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getLiveOption, saveLiveOption } from "@/api/live";
import { ElMessage, ElMessageBox } from "element-plus";
const formData = ref<{
  roomId: string;
  bili_ticket: string;
  uid: string;
  dedeUserID: string;
  bili_ticket_expires: string;
  buvid: string;
  host: string;
  sessData: string;
  bili_jct: string;
}>({
  roomId: "",
  bili_ticket: "",
  uid: "",
  dedeUserID: "",
  bili_ticket_expires: "",
  buvid: "",
  host: "",
  sessData: "",
  bili_jct: ""
});
onMounted(() => {
  getLiveOption().then(res => {
    const obj = Object.fromEntries(
      res.data.map(item => {
        return [item.optionName, item.optionValue];
      })
    );
    formData.value = obj as any;
  });
});
const onSubmit = () => {
  ElMessageBox.confirm("确认提交")
    .then(() => {
      saveLiveOption(formData.value).then(() => {
        ElMessage({
          type: "success",
          message: "提交成功"
        });
      });
    })
    .catch(() => {});
};
</script>
<template>
  <div class="main">
    <el-card>
      <el-form :model="formData">
        <el-form-item label="我的直播间id">
          <el-input v-model="formData.roomId" />
        </el-form-item>
        <el-form-item label="我的uid">
          <el-input v-model="formData.uid" />
        </el-form-item>
        <el-form-item label="buvid">
          <el-input v-model="formData.buvid" />
        </el-form-item>
        <el-form-item label="sessData">
          <el-input v-model="formData.sessData" />
        </el-form-item>
        <el-form-item label="dedeUserID">
          <el-input v-model="formData.dedeUserID" />
        </el-form-item>
        <el-form-item label="bili_ticket">
          <el-input v-model="formData.bili_ticket" />
        </el-form-item>
        <el-form-item label="bili_ticket_expires">
          <el-input v-model="formData.bili_ticket_expires" />
        </el-form-item>
        <el-form-item label="bili_jct">
          <el-input v-model="formData.bili_jct" />
        </el-form-item>
        <el-form-item label="外部访问地址">
          <el-input v-model="formData.host"
        /></el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
