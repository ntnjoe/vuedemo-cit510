<template>
  <v-container>
  <v-text-field label="First Input" v-model="num1"></v-text-field>
  <v-text-field label="Second Input" v-model="num2"></v-text-field>
  <br />
  <br />
  <p>sum = {{sumanswer}}</p>
  <p>Difference = {{difference}}</p>
  <p>Product = {{product}}</p>
  <p>Quotient = {{quotient}}</p>
  <p>Average = {{average}}</p>
  
  </v-container>
</template>
<script>

export default {
  name: 'AboutView',
  components: {

  },
  data: function(){
    return{
      num1: "",
    num2: "",
    sum: 0,
    diff: 0,
    prod: 0,
    quo: 0,
    ave: 0
    }
  },
  computed: {
    sumanswer: function(){
      var sum = parseInt(this.num1) + parseInt(this.num2)

      return sum
    },
    difference: function() {
      var diff = this.num1 - this.num2
      return diff
    },
    product: function() {
      var prod = this.num1 * this.num2
      return prod
    },
    quotient: function() {
      var quo = this.num1 / this.num2
      return quo
    },
    average: function() {
      var ave = parseInt(this.num1) + parseInt(this.num2)
      ave = this.ave / 2
      return ave
    }
  
  }
}
</script>
