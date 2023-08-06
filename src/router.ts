import { createRouter, createWebHistory } from 'vue-router';
import SectionA from "./components/views/SectionA.vue";
import SectionB from "./components/views/SectionB.vue"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/section-a',
        component: SectionA,        
      },{
        path: '/section-b',
        component: SectionB,        
      },
    ],
  })