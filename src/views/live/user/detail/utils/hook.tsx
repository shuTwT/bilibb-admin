import { ref, onMounted, shallowRef } from "vue";
import { useRoute } from "vue-router";
import { getUserInfoRoom } from "@/api/live";

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
  async function getUserInfoData() {
    const uid = route.params.uid as string;
    const roomId = route.params.roomId as string;
    const { data } = await getUserInfoRoom(uid, roomId);
    userInfo.value = data;
  }
  onMounted(async () => {
    await getUserInfoData();
    loading.value = false;
  });
  return { dataList1, dataList2, userInfo, loading };
}
