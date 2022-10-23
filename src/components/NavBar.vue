
<template>
  <nav>
      <v-toolbar app>
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light">Vuetify </span>
        <span>Demo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Dropdown
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
      
      
      </v-toolbar>

     <v-navigation-drawer app v-model="drawer" >
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'
    
  const drawer = ref(false)

  const  items =  ref([
           { title: 'Simple Calculator', icon: 'mdi-view-dashboard', path: '/' },
           { title: 'Math', icon: 'mdi-plus-one', path: '/basicMath' },
           { title: 'String App', icon: 'mdi-help-box', path: '/stringApp'},
           { title: 'About Program', icon: 'mdi-help-box', path: '/myprogram'},
           { title: 'About TIP', icon: 'mdi-help-box', path: '/abouttip'},
           { title: 'Profile', icon: 'mdi-help-box', path: '/myprofile'},
           { title: 'Program Skill', icon: 'mdi-help-box', path: '/programskill'},
           { title: 'String Counter', icon: 'mdi-help-box', path: '/stringmani'},
           { title: 'About Vue', icon: 'mdi-help-box', path: '/research'},
           { title: 'Area Calculator', icon: 'mdi-help-box', path: '/area'},
           { title: 'Axios Demo', icon: 'mdi-help-box', path: '/axiosdemo'}
           

        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 
</script>