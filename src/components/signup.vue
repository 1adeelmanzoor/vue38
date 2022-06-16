<template>
  <h1>sign up</h1>
</template>

<script>
export default {
  name: "signUp",

  emits: ["response"],
  created() {
    this.$emit("response", "message from emit child");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
