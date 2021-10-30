<template>
  <div class="item">
    <h3>{{ name }} ({{ year }})</h3>
    <hr />
    <template v-if="summary.length > 0">
      <p>{{ summary }}</p>
      <br />
    </template>
    <b>Score: {{ score }}</b>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    name: String,
    summary: String,
    year: String,
    score: String,
  },
})
export default class MovieItem extends Vue {
  private name!: string;
  private summary!: string;
  private score!: string;
  private year!: string;
}
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  border-radius: 1rem;
  border: 2px solid grey;

  h3,
  p {
    padding-left: 1rem;
    text-align: start;
  }
}
</style>
