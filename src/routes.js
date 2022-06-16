import { createWebHashHistory, createRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import login from "./components/login.vue";
import signup from "./components/signup.vue";
import pageNot from "./components/pageNot.vue";

const routes = [
  { name: "HelloWorld", path: "/", component: HelloWorld },
  { name: "login", path: "/login/:name", component: login },
  { name: "signup", path: "/signup", component: signup },
  { name: "pageNot", path: "/:pathMatch(.*)*", component: pageNot },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
export default router;
