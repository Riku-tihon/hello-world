<template><div class="calculator" @click="changeScrollfromdown();changeScrolltodown()">
  <div>from</div>
  <div></div>
  <span v-for="(item,index) in fromrates" :key="index"> <button @click="selectFrom(item)" :disabled="froml===item">{{item}}</button></span>
  <button @click="changeScrollfrom($event);changeScrolltodown()" :disabled="!scrollfrom">V</button>
  <input type="number" v-model.lazy="fromNumber">
  <div  class="scroll" :hidden="scrollfrom" @click="stp($event)">
    <div><input v-model="fromExample" style="width: 90%"></div>
    <div v-for="(value,name,index) in rates" :key="index"><button @click="selectFrom(name)" v-if="name.includes(fromExample.toUpperCase())" :disabled="froml===name" style="width: 100%">{{name}}</button></div></div>
  <div> to</div>
  <span v-for="(item,index) in torates" :key="index"> <button @click="selectTo(item)" :disabled="to===item">{{item}}</button></span>
  <button @click="changeScrollto($event);changeScrollfromdown()" :disabled="!scrollto">V</button>
  <input v-model="toNumber" disabled>
  <div  class="scroll" :hidden="scrollto" @click="stp($event)">
    <div><input v-model="toExample"></div>
    <div v-for="(value,name,index) in rates" :key="index"><button @click="selectTo(name)" v-if="name.includes(toExample.toUpperCase())" :disabled="to===name" style="width: 100%">{{name}}</button></div></div>
  <br>
  <button @click="transfer">transfer</button>
</div>
</template>
<script>
import axios from "axios";
export default {
  name: 'Calculator',
  data()
  {
    return{
      fromrates:['USD','EUR','MDL','RUB','RON','UAH'],
      torates:['USD','EUR','MDL','RUB','RON','UAH'],
      scrollfrom:true,
      scrollto:true,
      fromNumber:0,
      toNumber:0,
      to:'USD',
      midle:0,
      froml:'USD',
      toPath:1,
      fromPath:1,
      rates:[],
      fromExample:'',
      toExample:'',
    }
  },
  watch:
      {
      fromNumber:function (val)
      {
        axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=ffc83a532d7bc161548fe3379d4e7bc5`)
            .then((response)=>{
              this.midle=val/(+response.data.rates[this.froml]);
              this.toNumber=this.midle*(+response.data.rates[this.to]);
            })
            .catch((error)=>{
              console.log(error)})
      }
      },
  computed:
      {

      },
  methods:
      {
        transfer()
        {
          if (this.to!==this.froml&&this.fromNumber!==0){
          axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=ffc83a532d7bc161548fe3379d4e7bc5`)
              .then((response)=>{
                this.midle=this.fromNumber/(+response.data.rates[this.froml]);
                this.toNumber=this.midle*(+response.data.rates[this.to]);
              })
              .catch((error)=>{
                console.log(error)})}
          else
          {
            this.toNumber=this.fromNumber
          }
        },
        changeScrollfrom(e)
        {
          e.stopPropagation()
          this.scrollfrom=false;
        },
        changeScrollto(e)
        {
          e.stopPropagation()
          this.scrollto=false;
        },
        changeScrollfromdown()
        {
          this.scrollfrom=true;
          this.fromExample='';
        },
        changeScrolltodown()
        {
          this.scrollto=true;
          this.toExample='';
        },
        stp(e)
        {
          e.stopPropagation()
        },
        selectFrom(name){
          if (!this.fromrates.includes(name)){
        this.fromrates.pop();
        this.fromrates.push(name)}
          this.froml=name;
        },
        selectTo(name)
        {if (!this.torates.includes(name)){
          this.torates.pop();
          this.torates.push(name)}
          this.to=name;
        }
      },
  mounted() {
    axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=ffc83a532d7bc161548fe3379d4e7bc5`)
        .then((response)=>{
          this.rates=response.data.rates
        })
        .catch((error)=>{
          console.log(error)})
  }
}
</script>
<style>
.scroll
{
  position: relative;
  left: 47.6%;
  overflow-y: scroll;
  height: 100px;
  width: 100px;
  text-align: center;
}
</style>