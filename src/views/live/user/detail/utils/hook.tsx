import { ref, reactive, onMounted, shallowRef } from "vue";
import { useRoute } from "vue-router";
import { getRoomDanmuList, getUserInfoRoom, getUserLogs } from "@/api/live";
import type { PaginationProps } from "@pureadmin/table";

export function useUserDetail() {
  const loading = shallowRef(true);
  const route = useRoute();
  const dataList1 = ref([]);
  const dataList2 = ref([]);
  const userInfo = ref({
    id: 1,
    uid: "",
    uname: "",
    fansNum: 0,
    speakNum: 0,
    fa: "",
    sign: null,
    gender: null,
    level: null,
    jointime: 0,
    moral: 0,
    silence: 0,
    fans_badge: false,
    Speak: [] as {
      id: number;
      uid: string;
      roomId: string;
      content: string;
      date: string;
    }[],
    UserLog: [],
    UserCaptain: [],
    UserDanmu: [] as {
      id: number;
      uid: string;
      roomId: string;
      first: string;
      latest: string;
      content: string;
      num: number;
    }[],
    UserEntry: [] as {
      id: number;
      uid: string;
      roomId: string;
      first: string;
      latest: string;
      num: number;
    }[],
    _count: {} as {
      Speak: number;
      UserLog: number;
      UserCaptain: number;
      UserDanmu: number;
    }
  });
  const pagination1 = reactive<PaginationProps>({
    total: 0,
    pageSize: 10,
    currentPage: 1,
    background: true
  });
  const pagination2 = reactive<PaginationProps>({
    total: 0,
    pageSize: 10,
    currentPage: 1,
    background: true
  });
  const columns1: TableColumnList = [
    {
      label: "内容",
      prop: "content"
    },
    {
      label: "时间",
      prop: "date"
    }
  ];

  const columns2: TableColumnList = [
    {
      label: "内容",
      prop: "content"
    },
    {
      label: "时间",
      prop: "date"
    }
  ];

  async function getUserInfoData() {
    const uid = route.params.uid as string;
    const roomId = route.params.roomId as string;
    const { data } = await getUserInfoRoom(uid, roomId);
    userInfo.value = data;
  }

  async function getDanmuList() {
    const uid = route.params.uid as string;
    const roomId = route.params.roomId as string;
    const { data } = await getRoomDanmuList(roomId, {
      uid: uid,
      pageSize: pagination1.pageSize,
      pageNum: pagination1.currentPage
    });
    dataList1.value = data.list;
    pagination1.total = data.total;
  }

  async function getUserLogList() {
    const uid = route.params.uid as string;
    const { data } = await getUserLogs(uid, {
      pageSize: pagination2.pageSize,
      pageNum: pagination2.currentPage
    });
    dataList2.value = data.list;
    pagination2.total = data.total;
  }

  async function refreshData() {
    loading.value = true;
    await getUserInfoData();
    await getDanmuList();
    await getUserLogList();
    loading.value = false;
  }

  onMounted(async () => {
    await getUserInfoData();
    await getDanmuList();
    await getUserLogList();
    loading.value = false;
  });

  return {
    dataList1,
    dataList2,
    userInfo,
    loading,
    columns1,
    columns2,
    refreshData,
    pagination1,
    pagination2
  };
}
