import { createRouter, createWebHistory } from 'vue-router';
import SectionA from "./components/views/SectionA.vue";
import SectionB from "./components/views/SectionB.vue"
import SectionC from "./components/views/SectionC.vue"
import SectionD from "./components/views/SectionD.vue"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/section-a',
        component: SectionA,        
      },{
        path: '/section-b',
        component: SectionB,        
        },{
            path: '/section-c',
            component: SectionC,        
        },{
            path: '/section-d',
            component: SectionD,        
        },
    ],
  })