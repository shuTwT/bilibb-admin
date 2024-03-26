import { ref, h, toRaw, reactive, onMounted } from "vue";
import editForm from "../form.vue";
import { message } from "@/utils/message";
import { addDialog } from "@/components/ReDialog";
import type { FormItemProps } from "./types";
import { getConnectList, addConnect, removeConnect } from "@/api/live";
import { deviceDetection } from "@pureadmin/utils";
import type { PaginationProps } from "@pureadmin/table";

export function useConnect() {
  const form = reactive({});
  const formRef = ref();
  const isShow = ref(false);
  const dataList = ref([]);
  const loading = ref(true);
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
      prop: "roomId"
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

  function handleDelete(row) {
    removeConnect(row.roomId).then(() => {
      message(`您关闭了房间号为${row.roomId}的这条连接`, { type: "success" });
      onSearch();
    });
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

  async function onSearch() {
    loading.value = true;
    const { data } = await getConnectList(toRaw(form));
    dataList.value = data;
    // pagination.total = data.total;
    // pagination.pageSize = data.pageSize;
    // pagination.currentPage = data.currentPage;
    setTimeout(() => {
      loading.value = false;
    }, 500);
  }

  function openDialog(title = "新增", row?: FormItemProps) {
    addDialog({
      title: `${title}连接`,
      props: {
        formInline: {
          roomId: row?.roomId ?? ""
        }
      },
      width: "40%",
      draggable: true,
      fullscreenIcon: true,
      closeOnClickModal: false,
      fullscreen: deviceDetection(),
      contentRenderer: () => h(editForm, { ref: formRef }),
      beforeSure: (done, { options }) => {
        const FormRef = formRef.value.getRef();
        const curData = options.props.formInline as FormItemProps;
        function chores() {
          done(); // 关闭弹框
          onSearch(); // 刷新表格数据
        }
        FormRef.validate(valid => {
          if (valid) {
            console.log("curData", curData);
            // 表单规则校验通过
            if (title === "新增") {
              addConnect({
                roomId: curData.roomId
              }).then(() => {
                // 实际开发先调用新增接口，再进行下面操作
                chores();
              });
            } else {
              // 实际开发先调用修改接口，再进行下面操作
              chores();
            }
          }
        });
      }
    });
  }
  onMounted(async () => {
    onSearch();
  });
  return {
    isShow,
    dataList,
    loading,
    columns,
    pagination,
    rowStyle,
    onSearch,
    openDialog,
    handleDelete,
    handleSizeChange,
    handleCurrentChange,
    handleSelectionChange
  };
}
