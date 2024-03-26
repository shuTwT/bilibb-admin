import { ref, onMounted } from "vue";

export function useUserDetail() {
  const dataList = ref([]);
  onMounted(() => {});
  return { dataList };
}
