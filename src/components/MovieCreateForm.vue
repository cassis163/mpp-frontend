<template>
  <div class="container">
    <h3>Create a movie</h3>
    <hr />
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" name="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="year">Year:</label>
        <input
          type="number"
          name="year"
          v-model="year"
          min="1900"
          max="2030"
          required
        />
      </div>
      <div class="form-group">
        <label for="score">Score:</label>
        <input type="number" name="score" v-model="score" required />
      </div>
      <div class="form-group">
        <label for="summary">Summary:</label>
        <textarea name="summary" v-model="summary" />
      </div>
      <hr />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import Movie from "@/types/Movie";
import { Options, Vue } from "vue-class-component";
import { v4 as uuid } from "uuid";

@Options({
  props: {
    onMovieCreated: Function,
  },
})
export default class MovieCreateForm extends Vue {
  name = "";
  year = 2021;
  score = 7;
  summary = "";

  onMovieCreated!: (movie: Movie) => void;

  onSubmit(): void {
    fetch("http://localhost:8090/movies", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        // TODO: Get rid of uuid and get an actual id
        id: uuid(),
        name: this.name,
        year: this.year.toString(),
        score: this.score.toString(),
        summary: {
          String: this.summary,
          Valid: true,
        },
      }),
    })
      .then((res) => res.json())
      .then((data: Movie) => this.onMovieCreated(data));
  }
}
</script>

<style lang="scss" scoped>
form {
  .form-group {
    display: flex;
    justify-content: space-between;

    margin: 0.5rem;

    label {
      display: flex;
      align-items: center;
    }

    input,
    textarea {
      width: 50%;
    }
  }
}
</style>
