<template>
  <MovieCreateForm :onMovieCreated="this.onMovieCreated" />
  <MovieCatalog :movies="this.movies" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MovieCatalog from "@/components/MovieCatalog.vue";
import MovieCreateForm from "@/components/MovieCreateForm.vue";
import Movie from "@/types/Movie";

@Options({
  components: {
    MovieCreateForm,
    MovieCatalog,
  },
})
export default class Home extends Vue {
  private movies: Movie[] = [];

  created(): void {
    fetch("http://localhost:8090/movies")
      .then((res) => res.json())
      .then((data: Movie[]) => (this.movies = data));
  }

  onMovieCreated(movie: Movie): void {
    this.movies.push(movie);
  }
}
</script>
