import { getLiveList } from "@/api/live";
import { onMounted, reactive, ref, toRaw } from "vue";
import type { PaginationProps } from "@pureadmin/table";

export function useLive() {
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
      label: "房间号",
      prop: "roomId"
    },
    {
      label: "标题",
      prop: "Room.title"
    },
    {
      label: "封面",
      cellRenderer: scope => (
        <el-image
          preview-teleported={true}
          preview-src-list={Array.of(scope.row.Room.userCover)}
          src={scope.row.Room.userCover}
        />
      )
    },
    {
      label: "进房",
      prop: "entryNum"
    },
    {
      label: "粉丝",
      prop: "fans"
    },
    {
      label: "粉丝团",
      prop: "fansClub"
    },
    {
      label: "礼物",
      prop: "giftNum"
    },
    {
      label: "点赞",
      prop: "likeNum"
    },
    {
      label: "警告",
      prop: "redNoticeNum"
    },
    {
      label: "发言",
      prop: "speakNum"
    },
    {
      label: "日期",
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
      background: id === curRow.value?.id ? "var(--el-fill-color-light)" : ""
    };
  }
  async function onSearch() {
    loading.value = true;
    const { data } = await getLiveList({
      ...toRaw(form),
      pageSize: pagination.pageSize,
      pageNum: pagination.currentPage
    });
    dataList.value = data.list;
    pagination.total = data.total;
    // pagination.pageSize = data.pageSize;
    // pagination.currentPage = data.currentPage;
    setTimeout(() => {
      loading.value = false;
    }, 500);
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
