import TeamPage from '../pages/TeamPage.vue';
import Index from '../pages/Index.vue';
import UserPage from '../pages/UserPage.vue';
import SearchPage from '../pages/SearchPage.vue';
import UserEditPage from '../pages/UserEditPage.vue';
import SearchResultPage from '../pages/SearchResultPage.vue';
import UserLoginPage from '../pages/UserLoginPage.vue';
import UserEditImage from '../pages/UserEditImage.vue';
import UserLogoutPage from '../pages/UserLogoutPage.vue';
import UserRegisterPage from '../pages/UserRegisterPage.vue';
import ChatGpt from '../pages/ChatGpt.vue';

const routes = [
  { path: '/', component: Index, meta: { title: '主页' } },
  { path: '/team', component: TeamPage, meta: { title: '队伍' } },
  { path: '/user', component: UserPage, meta: { title: '个人' } },
  { path: '/search', component: SearchPage, meta: { title: '搜索' } },
  { path: '/user/edit', component: UserEditPage, meta: { title: '编辑' } },
  {
    path: '/user/editimage',
    component: UserEditImage,
    meta: { title: '编辑图片' },
  },
  { path: '/user/list', component: SearchResultPage, meta: { title: '搜索' } },
  { path: '/user/login', component: UserLoginPage, meta: { title: '登录' } },
  { path: '/user/logout', component: UserLogoutPage, meta: { title: '登出' } },
  {
    path: '/user/register',
    component: UserRegisterPage,
    meta: { title: '注册' },
  },
  {
    path: '/chatgpt',
    component: ChatGpt,
    meta: { title: 'ChatGPT' },
  },
];

export default routes;
