<template>
  <div class="container" id="catalog">
    <h3>Catalog</h3>
    <hr />
    <MovieItem
      v-for="movie in moviesOnPage"
      :key="movie.id"
      :name="movie.name"
      :summary="movie.summary.String"
      :score="movie.score"
      :year="movie.year"
    />
    <hr />
    <Paginator
      :rows="movies.length"
      :currentIndex="startIndex"
      :pageSize="pageSize"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MovieItem from "./MovieItem.vue";
import Movie from "@/types/Movie";
import Paginator from "@/components/Paginator.vue";

@Options({
  components: {
    MovieItem,
    Paginator,
  },
  props: {
    movies: Array,
  },
})
export default class MovieCatalog extends Vue {
  startIndex = 1;
  pageSize = 3;

  movies!: Movie[];
  moviesOnPage: Movie[] = this.getMoviesOnPage(this.startIndex);

  onIndexChanged(index: number): void {
    this.moviesOnPage = this.getMoviesOnPage(index);
  }

  getMoviesOnPage(index: number): Movie[] {
    return this.movies.slice(
      this.pageSize * (index - 1),
      this.pageSize * index
    );
  }
}
</script>

<style lang="scss" scoped>
#catalog {
  width: 50%;
}
</style>
