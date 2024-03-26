import type { PaginationProps } from "@pureadmin/table";
import { onMounted, reactive, ref, toRaw } from "vue";
import { getUserList } from "@/api/live";

export function useUser() {
  const isShow = ref(false);
  const dataList = ref([]);
  const formRef = ref();
  const loading = ref(true);
  const form = reactive({
    roomId: "",
    title: "",
    date: ""
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
      label: "uid",
      prop: "uid"
    },
    {
      label: "用户名",
      prop: "uname"
    },
    {
      label: "头像",
      cellRenderer: scope => <el-image src={scope.row.fa} />
    },
    {
      label: "性别",
      prop: "gender"
    },
    {
      label: "等级",
      prop: "level"
    },
    {
      label: "粉丝团勋章",
      prop: "fans_bandage"
    },
    {
      label: "粉丝数",
      prop: "fansNum"
    },
    {
      label: "发言",
      prop: "speakNum"
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
  async function onSearch() {
    loading.value = true;
    const { data } = await getUserList(toRaw(form));
    dataList.value = data;
    // pagination.total = data.total;
    // pagination.pageSize = data.pageSize;
    // pagination.currentPage = data.currentPage;
    setTimeout(() => {
      loading.value = false;
    }, 500);
  }
  function handleSizeChange(val: number) {
    console.log(`${val} items per page`);
  }

  function handleCurrentChange(val: number) {
    console.log(`current page: ${val}`);
  }

  function handleSelectionChange(val) {
    console.log("handleSelectionChange", val);
  }
  const resetForm = formEl => {
    if (!formEl) return;
    formEl.resetFields();
    onSearch();
  };

  onMounted(async () => {
    onSearch();
  });
  return {
    form,
    formRef,
    isShow,
    columns,
    dataList,
    loading,
    pagination,
    onSearch,
    rowStyle,
    resetForm,
    handleSizeChange,
    handleCurrentChange,
    handleSelectionChange
  };
}
