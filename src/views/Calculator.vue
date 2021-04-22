<template><div class="calculator">
  <div>from</div>
  <select v-model="froml">
    <option>USD</option>
    <option>CAD</option>
    <option>CHF</option>
    <option>EUR</option>
    <option>GBP</option>
  </select>
  <input type="number" v-model.lazy="fromNumber">
  <div> to</div>
  <select v-model="to">
    <option>USD</option>
    <option>CAD</option>
    <option>CHF</option>
    <option>EUR</option>
    <option>GBP</option>
  </select>
  <input type="number" v-model.lazy="toNumber">
</div></template>
<script>
import axios from "axios";
//const apiKey='ffc83a532d7bc161548fe3379d4e7bc5'
export default {
  name: 'Calculator',
  data()
  {
    return{
      fromNumber:0,
      toNumber:0,
      to:'USD',
      midle:0,
      froml:'USD',
      toPath:1,
      fromPath:1,
    }
  },
  watch:
      {
        fromNumber (val)
        {
            axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=ffc83a532d7bc161548fe3379d4e7bc5`)
                .then((response)=>{
                  this.midle=val/(+response.data.rates[this.froml]);
                  this.toNumber=this.midle*(+response.data.rates[this.to]);
                })
                .catch((error)=>{
                  console.log(error)})
        },
        toNumber: function (val)
        {
          axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=ffc83a532d7bc161548fe3379d4e7bc5`)
              .then((response)=>{
                this.midle=val/(+response.data.rates[this.to]);
                this.fromNumber=this.midle*(+response.data.rates[this.froml])
              })
              .catch((error)=>{
                console.log(error)})
        },
        froml: function (val)
        {

          axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=ffc83a532d7bc161548fe3379d4e7bc5`)
              .then((response)=>{
                this.midle=this.fromNumber/(+response.data.rates[val]);
                this.toNumber=this.midle*(+response.data.rates[this.to]);
              })
              .catch((error)=>{
                console.log(error)})
        },
        to:function (val)
        {

          axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=ffc83a532d7bc161548fe3379d4e7bc5`)
              .then((response)=>{
                this.midle=this.fromNumber/(+response.data.rates[this.froml]);
                this.toNumber=this.midle*(+response.data.rates[val]);
              })
              .catch((error)=>{
                console.log(error)})
        }
      }
}
</script>