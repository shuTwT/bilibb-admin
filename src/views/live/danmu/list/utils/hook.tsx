import { getRoomDanmuList } from "@/api/live";
import type { PaginationProps } from "@pureadmin/table";
import { onMounted, reactive, ref, toRaw } from "vue";
import { useRouter, useRoute } from "vue-router";

export function useList() {
  const route = useRoute();
  const router = useRouter();
  const formRef = ref();
  const isShow = ref(false);
  const dataList = ref([]);
  const loading = ref(true);
  const form = reactive({
    uname: "",
    content: ""
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
      label: "用户名",
      prop: "User.uname"
    },
    {
      label: "头像",
      cellRenderer: scope => <el-image src={scope.row.User.fa} />
    },
    {
      label: "弹幕内容",
      prop: "content"
    },
    {
      label: "时间",
      prop: "date"
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
      background: id === curRow.value?.id ? "var(--el-fill-color-light)" : "",
      height: "160px"
    };
  }

  function handleDetail(row) {
    router.push({
      path: `/live/user/${row.uid}/${row.roomId}`
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
    console.log(route.params.roomId);
    loading.value = true;
    const { data } = await getRoomDanmuList(route.params.roomId, {
      ...toRaw(form),
      pageSize: pagination.pageSize,
      pageNum: pagination.currentPage
    });
    dataList.value = data.list as any;
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
    console.log(route.query);
    onSearch();
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
