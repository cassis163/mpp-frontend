<template>
  <div>
    <button>Previous</button>
    <b>{{ currentIndex }}</b>
    <button>Next</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    currentIndex: Number,
    pageSize: Number,
    rows: Number,
  },
})
export default class Paginator extends Vue {
  private currentIndex!: number;
  private pageSize!: number;
  private rows!: number;
}
</script>

<style lang="scss" scoped>
div {
  margin-left: 25%;
  width: 50%;

  display: flex;
  justify-content: space-between;

  b {
    display: flex;
    align-items: center;
  }
}
</style>
