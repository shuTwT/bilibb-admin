import { getGenList, importTable } from "@/api/tool";
import type { PaginationProps } from "@pureadmin/table";
import editForm from "../form.vue";
import { onMounted, reactive, h, ref, toRaw } from "vue";
import { addDialog } from "@/components/ReDialog";
import { deviceDetection } from "@pureadmin/utils";
import { message } from "@/utils/message";

export function useCodeGen() {
  const formRef = ref();
  const isShow = ref(false);
  const dataList = ref([]);
  const loading = ref(true);
  const form = reactive({
    tableName: "",
    tableComment: ""
  });
  const curRow = ref();
  const pagination = reactive<PaginationProps>({
    total: 0,
    pageSize: 10,
    currentPage: 1,
    background: true
  });
  const columns: TableColumnList = [
    {
      label: "序号",
      prop: "tableId"
    },
    {
      label: "表名称",
      prop: "tableName"
    },
    {
      label: "表描述",
      prop: "tableComment"
    },
    {
      label: "实体",
      prop: "model"
    },
    {
      label: "创建时间",
      prop: "createTime"
    },
    {
      label: "更新时间",
      prop: "updateTime"
    },
    {
      label: "操作",
      fixed: "right",
      width: 210,
      slot: "operation"
    }
  ];
  /** 高亮当前权限选中行 */
  function rowStyle({ row: { id } }) {
    return {
      cursor: "pointer",
      background: id === curRow.value?.id ? "var(--el-fill-color-light)" : ""
    };
  }

  function handleDetail() {}

  function handleSizeChange(val: number) {
    onSearch();
    console.log(`${val} items per page`);
  }

  function handleCurrentChange(val: number) {
    onSearch();
    console.log(`current page: ${val}`);
  }

  function handleSelectionChange(val) {
    onSearch();
    console.log("handleSelectionChange", val);
  }
  async function onSearch() {
    loading.value = true;
    const { data } = await getGenList({
      ...toRaw(form),
      pageSize: pagination.pageSize,
      pageNum: pagination.currentPage
    });
    dataList.value = data.list;
    pagination.total = data.total;
    setTimeout(() => {
      loading.value = false;
    }, 500);
  }
  const resetForm = formEl => {
    if (!formEl) return;
    formEl.resetFields();
    onSearch();
  };

  function openDialog(title = "导入表") {
    addDialog({
      title: `${title}`,
      width: "55%",
      draggable: true,
      fullscreenIcon: true,
      closeOnClickModal: false,
      fullscreen: deviceDetection(),
      contentRenderer: () => h(editForm, { ref: formRef }),
      beforeSure: done => {
        const selections: any[] = formRef.value.getSelections();
        function chores() {
          done(); // 关闭弹框
          onSearch(); // 刷新表格数据
        }

        console.log("selections", selections);
        // 表单规则校验通过
        if (title === "导入表") {
          // 实际开发先调用新增接口，再进行下面操作
          importTable({
            tableNames: selections.join(",")
          }).then(() => {
            message("新增成功", {
              type: "success"
            });
            chores();
          });
        } else {
          // 实际开发先调用修改接口，再进行下面操作
          chores();
        }
      }
    });
  }

  onMounted(async () => {
    await onSearch();
  });
  return {
    isShow,
    dataList,
    columns,
    form,
    formRef,
    loading,
    pagination,
    onSearch,
    openDialog,
    resetForm,
    rowStyle,
    handleDetail,
    handleSizeChange,
    handleCurrentChange,
    handleSelectionChange
  };
}
