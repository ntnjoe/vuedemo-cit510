<template>
    <v-container>
    <h1>URBAN DICTIONARY [Axios Demo]</h1>
    <v-text-field  v-model="userInput" label="Enter a word and press define"></v-text-field>
    <v-btn @click="getDefinition()">Define</v-btn>
    <v-list>        
        <v-list-item
          v-for="item in definitions"
          :key="item.definition">
          <v-divider></v-divider>
          <v-list-item-title>{{item.definition}}</v-list-item-title>
          <v-list-item-subtitle>{{item.example}}</v-list-item-subtitle>
          <v-divider></v-divider>
        </v-list-item>
    </v-list>
</v-container>
</template>

<script setup>
import axios from "axios";
import {ref} from 'vue'

const userInput = ref('');
const definitions = ref([]);

function getDefinition(){
axios({
  method: 'GET',
  url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
  params: {term: userInput.value},
  headers: {
    'X-RapidAPI-Key': '10c8f7567amshb0a927da2a9ff30p181888jsn87048d977f57',
    'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
  }
}).then(response => {
definitions.value=(response.data.list)
console.log(definitions.value)
});
}
</script>

