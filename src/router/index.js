import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import HomeView from '../views/Dashboard.vue'
import ProfileTabView from '../views/ProfileTabView.vue'
import AboutProg from '../views/AboutProg.vue'
import AboutTIP from '../views/AboutTIP.vue'
import ProgramSkill from '../views/ProgramSkill.vue'
import StringManipulation from '../views/StringManipulation.vue'
import ResearchView from '../views/ResearchView.vue'
import AreaCalculator from '../views/AreaCalculator.vue'
import AxiosDemo from '../views/AxiosDemo.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView
    },
    {
      path: '/research',
      name: 'ResearchMath',
      component: ResearchView
      },
   {
    path: '/myprofile',
    name: 'myProfile',
    component: ProfileTabView
   },
  {
    path: '/programskill',
    name: 'ProgramSkill',
    component: ProgramSkill
  },
  {
    path: '/myprogram',
    name: 'AboutProg',
    component: AboutProg
  },
  {
    path: '/abouttip',
    name: 'AboutTIP',
    component: AboutTIP
  },
  {
    path: '/stringmani',
    name: 'StringManipulation',
    component: StringManipulation
  },
  {
    path: '/area',
    name: 'AreaCalculator',
    component: AreaCalculator
  },
  {
    path: '/axiosdemo',
    name: 'AxiosDemo',
    component: AxiosDemo
  }

  

  ]
})

export default router
