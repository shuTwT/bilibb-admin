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
        <el-form-item label="我的直播间id" label-width="100px">
          <el-input v-model="formData.roomId" type="textarea" />
        </el-form-item>
        <el-form-item label="我的uid" label-width="100px">
          <el-input v-model="formData.uid" type="textarea" />
        </el-form-item>
        <el-form-item label="buvid" label-width="100px">
          <el-input v-model="formData.buvid" type="textarea" />
        </el-form-item>
        <el-form-item label="sessData" label-width="100px">
          <el-input v-model="formData.sessData" type="textarea" />
        </el-form-item>
        <el-form-item label="dedeUserID" label-width="100px">
          <el-input v-model="formData.dedeUserID" type="textarea" />
        </el-form-item>
        <el-form-item label="bili_ticket" label-width="100px">
          <el-input v-model="formData.bili_ticket" type="textarea" />
        </el-form-item>
        <el-form-item label="bili_ticket_expires" label-width="100px">
          <el-input v-model="formData.bili_ticket_expires" type="textarea" />
        </el-form-item>
        <el-form-item label="bili_jct" label-width="100px">
          <el-input v-model="formData.bili_jct" type="textarea" />
        </el-form-item>
        <el-form-item label="外部访问地址" label-width="100px">
          <el-input v-model="formData.host" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
