import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// 컴포넌트 전역 등록
//app.component('AppCard', AppCard);

app.provide('app-message', '앱 메시지 입니다.');

app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
