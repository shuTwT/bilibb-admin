import { ref } from "vue";

export function useFansRank() {
  const selectOpen = ref(false);
  const selectValue = ref("七日排行");
  function selectChange(value: string) {
    selectValue.value = value;
    selectOpen.value = false;
  }
  return {
    selectOpen,
    selectChange,
    selectValue
  };
}
