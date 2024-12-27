import Home from "./views/Home.vue";
import Category from "./views/Category.vue";
import Platform from "./views/Platform.vue";
import Game from "./views/Game.vue";
import NotFound from "./views/NotFound.vue";
import TeamDev from "./views/TeamDev.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/category/:category", name: "category", component: Category },
  { path: "/platform/:platform", name: "platform", component: Platform },
  { path: "/game", name: "game", component: Game },
  { path: "/team-dev", name: "team_dev", component: TeamDev },
  { path: "/:pathMatch(.*)*", name: "notFound", component: NotFound },
];

export default routes;

/* const routes = createRouter({
  history: createWebHistory(),
  router,
});

export default routes; */
