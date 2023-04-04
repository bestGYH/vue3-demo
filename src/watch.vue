<template>
    <button @click="person.name+='~'">改变名字</button>
   <p> {{person.name}}</p>
    <button @click="person.age+=1">改变年龄</button>
    <p>
      {{person.age}}
    </p>
  
  </template>
  
  <script>
  import{reactive, watch } from 'vue'
  export default {
    name: 'App',
    components: {
    },
    setup(){
      let person = reactive({
        name:"张三",
        age:32
      })
      watch(person,(newValue,oldValue)=>{
        console.log("person变化了",newValue,oldValue)
      })
      return {
        person
      }
    },
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  