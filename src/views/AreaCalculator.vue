<template>
    <v-container>
        <v-alert-title>This program will calculate the area of the following</v-alert-title>
        <v-radio-group>
            <v-radio v-for="i in shapes"
          :key="i"
          :label="`${i}`"
          :value="i"
          @change="toggleShapes(i)"
          >

            </v-radio>
        </v-radio-group>
        <v-text-field v-show="circle" label="Enter the Radius of the circle" @input="doCircleArea()" v-model="radiusInput" ></v-text-field>
        <v-card-title v-show="circle">The area of the circle is {{circlearea}}</v-card-title>

        <v-text-field v-show="square" label="Enter the Side value of the square" @input="doSquareArea()" v-model="sideInput"></v-text-field>
        <v-card-title v-show="square">The area of the square is {{squarearea}}</v-card-title>

        <v-text-field v-show="rectangle" label="Enter the Length of the rectangle" @input="doRectangleArea()" v-model="lengthInput"></v-text-field>
        <v-text-field v-show="rectangle" label="Enter the Breadth of the rectangle" @input="doRectangleArea()" v-model="breadthInput"></v-text-field>
        <v-card-title v-show="rectangle">The area of the rectangle is {{rectanglearea}}</v-card-title>

        <v-text-field v-show="triangle" label="Enter the Base of the triangle" @input="doTriangleArea()" v-model="baseInput"></v-text-field>
        <v-text-field v-show="triangle" label="Enter the Height of the triangle" @input="doTriangleArea()" v-model="heightInput"></v-text-field>
        <v-card-title v-show="triangle">The area of the triangle is {{trianglearea}}</v-card-title>
    </v-container>
</template>
<script setup>
import {computed, ref} from 'vue'
const radiusInput= ref('')
const circlearea= ref('')

const squarearea= ref('')
const sideInput= ref('')

const lengthInput= ref('')
const breadthInput= ref('')
const rectanglearea= ref('')

const baseInput= ref('')
const heightInput= ref('')
const trianglearea= ref('')




const circle = ref(false)
const square = ref(false)
const rectangle = ref(false)
const triangle = ref(false)



const shapes = ['Circle', 'Square', 'Rectangle', 'Triangle']









function toggleShapes(i){
    if(i=="Circle"){
        circle.value=true
        square.value = rectangle.value = triangle.value = false
    }
    else if(i=="Square"){
        square.value=true
        circle.value = rectangle.value = triangle.value = false
    }
    else if(i=="Rectangle"){
        rectangle.value=true
        circle.value = square.value = triangle.value = false
    }
    else if(i=="Triangle"){
        triangle.value=true
        circle.value = rectangle.value = rectangle.value = false
    } 
}

function doCircleArea(){
    circlearea.value= 3.14159 * radiusInput.value * radiusInput.value
    return circlearea.value
}
function doSquareArea(){
    squarearea.value= sideInput.value * sideInput.value
    return squarearea.value
}
function doRectangleArea(){
    rectanglearea.value= lengthInput.value * breadthInput.value
    return rectanglearea.value
}
function doTriangleArea(){
    trianglearea.value= baseInput.value * heightInput.value / 2
    return trianglearea.value
}
   
</script>