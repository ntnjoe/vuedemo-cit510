<template>
    <v-container>
   
  
  <v-text-field label="Enter Text" v-model="input"></v-text-field>
  <v-btn @click="onSubmit()">
  count
  </v-btn>
  <p> Vowels: {{vowels}}</p>
  <p> Consonants: {{consonant}}</p>
  <p>
  Numbers: {{numbers}}
  </p>
  <p>
  Converted Vowels to *: {{string}}
  </p>
    </v-container>
  
  </template>
  
  <script>
  // @ is an alias to /src
  
  export default {
    
    name: 'HomeView',
    components: {
  
    },
    data: function(){
      return{
        vowels: 0,
        consonant:0,
        numbers: 0,
        string: '',
        input: ''
   
      }
    },
    methods: {
      onSubmit: function(){
   
      var b = this.input;
      this.matchesvowel=b.match(/[aeiou]/gi)
      this.matchescons= b.match(/[bcdfghjklmnpqrstvwxyz]/gi);
      this.matchesnumber=b.match(/[0-9]/gi);
      if(this.matchesvowel!=null)
      {
        this.vowels = b.match(/[aeiouAEIOU]/gi).length;
      }
      else
      {
         this.vowels=0;
       }
      if(this.matchescons!=null)
      {
      this.consonant= b.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
      }
      else
      {
      this.consonant=0;
      }
   
      if(this.matchesnumber!=null)
   {
   this.numbers=b.match(/[0-9]/gi).length;
     }
    else
    {
      this.numbers=0;
      }
       this.string=b.replace(/[aeiou]/gi, "*")
       }
   }
    
  }
  </script>
  