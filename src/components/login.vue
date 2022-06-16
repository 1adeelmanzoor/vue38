<template>
  <h1>login user name : {{ profile }}</h1>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "logIn",
  date() {
    return {
      profile: "",
    };
  },

  mounted() {
    const route = useRoute();
    this.profile = route.params.name;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
