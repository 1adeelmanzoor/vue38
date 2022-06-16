<template>
  <router-link to="/">Home</router-link><br />
  <router-link to="/login/danish">login danish </router-link><br />
  <router-link to="/login/sarmad">login sarmad</router-link><br />
  <router-link to="/login/awais">login awais</router-link><br />
  <router-link to="/signup">sign up</router-link><br />

  <!-- router-view will display the component that corresponds to the url -->

  <router-view></router-view>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="newTodo" />
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="item in filteredTodos" :key="item.id">
      <input type="checkbox" v-model="item.done" />
      <span :class="{ done: item.done }">{{ item.text }}</span>
      <button @click="removeTodo(item)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? "Show all" : "Hide completed" }}
  </button>
  <br /><br />

  <input type="text" placeholder="email" v-model="email" />
  <br />
  <br />

  <input type="text" placeholder="password" v-model="password" />
  <br />
  <br />
  <button @click="postData">post</button>

  <ul v-for="item in list" :key="item">
    <li>{{ item.id }}</li>
    <li>{{ item.email }}</li>
    <li>{{ item.avatar }}</li>
    <li><img :src="item.avatar" alt="not found" /></li>
  </ul>
  <signupVue @response="(mes) => (emitMsg = mes)" />
  <p>{{ emitMsg }}</p>

  <!-- <HelloWorldVue msg="new route" /> -->
</template>

<script>
let id = 0;
import signupVue from "./components/signup.vue";
// import HelloWorldVue from "./components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      emitMsg: "not passed from emit child",
      hideCompleted: false,
      list: [],
      email: "",
      password: "",
      newTodo: "",
      todos: [
        { id: id++, text: "new todo1", done: true },
        { id: id++, text: "new todo2", done: true },
        { id: id++, text: "new todo3", done: false },
      ],
    };
  },
  components: { signupVue },
  computed: {
    filteredTodos() {
      return this.hideCompleted
        ? this.todos.filter((t) => !t.done)
        : this.todos;
    },
  },

  // components: {
  //   HelloWorldVue,
  // },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo });
      this.newTodo = "";
    },
    removeTodo(item) {
      this.todos = this.todos.filter((it) => it !== item);
    },
    async postData() {
      let result = await axios.post("https://reqres.in/api/users?page=1", {
        email: this.email,
        password: this.password,
      });
      let res = result.data;
      console.log(res.email + ":" + res.password);
    },
  },
  async mounted() {
    let result = await axios.get("https://reqres.in/api/users?page=1");
    // console.log(result.data.data);
    this.list = result.data.data;
  },
};
</script>

<style>
ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.done {
  text-decoration: line-through;
}
</style>
