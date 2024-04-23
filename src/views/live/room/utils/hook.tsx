import { getRoomList } from "@/api/live";
import type { PaginationProps } from "@pureadmin/table";
import { onMounted, reactive, ref, toRaw } from "vue";
import { useRouter } from "vue-router";

export function useRoom() {
  const router = useRouter();
  const formRef = ref();
  const isShow = ref(false);
  const dataList = ref([]);
  const loading = ref(true);
  const form = reactive({
    roomId: "",
    title: ""
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
      label: "房间号",
      prop: "roomId"
    },
    {
      label: "标题",
      prop: "title"
    },
    {
      label: "标签",
      prop: "tags"
    },
    {
      label: "关键帧",
      cellRenderer: scope => <el-image src={scope.row.keyframe} />
    },
    {
      label: "封面",
      cellRenderer: scope => <el-image src={scope.row.userCover} />
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

  function handleDetail(row) {
    router.push({
      path: "/live/danmu/list/" + row.roomId
    });
  }

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
    const { data } = await getRoomList({
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
    resetForm,
    rowStyle,
    handleDetail,
    handleSizeChange,
    handleCurrentChange,
    handleSelectionChange
  };
}
