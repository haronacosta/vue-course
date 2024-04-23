<template>
  <h2>{{ customTitle }}!!</h2>

  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>

  <button @click="increase">+1</button>

  <button @click="decrease">-1</button>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  start: {
    type: Number,
    required: true,
    default: 11,
    validator: (value) => {
      return value > 10
    }
  }
})

const title = props.title

const counter = ref(props.start)

const customTitle = computed(() => title || 'Counter')

const squareCounter = computed(() => {
  return counter.value * counter.value
})

const increase = () => {
  counter.value = counter.value + 1
}

const decrease = () => {
  counter.value--
}

// const getSquareValue = (value) => {
//   console.log('getSquareValue')
//   return value * value
// }
</script>

<style scoped>
button {
  background-color: #64bb87;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>
