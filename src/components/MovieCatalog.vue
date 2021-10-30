<template>
  <div class="container">
    <h3>Catalog</h3>
    <hr />
    <MovieItem
      v-for="movie in movies"
      :key="movie.id"
      :name="movie.name"
      :summary="movie.summary.String"
      :score="movie.score"
      :year="movie.year"
    />
    <hr />
    <p>TODO: Pagination</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MovieItem from "./MovieItem.vue";
import Movie from "@/types/Movie";

@Options({
  components: {
    MovieItem,
  },
  props: {
    movies: Array,
  },
})
export default class MovieCatalog extends Vue {
  movies!: Movie[];
}
</script>

<style lang="scss" scoped>
div {
  width: 50%;
}
</style>
