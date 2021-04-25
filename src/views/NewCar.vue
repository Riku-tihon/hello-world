<template><div class="newcar">
  <input type="number" disabled v-model="car.id" @change="noCar"><br>
  <input type="text" v-model="car.car_make" @change="noCar"><br>
  <input type="text" v-model="car.car_model" @change="noCar"><br>
  <input type="number" v-model="car.car_year" @change="noCar"><br>
  <input type="text" v-model="car.url" @change="noCar"><br>
  <input type="text" v-model="car.price" @change="noCar"> <br>
  <button @click="newCar">new car</button>
</div></template>
<script>export default
{
  name:'NewCar',
  data()
  {
    return{
      car:this.$store.state.noCar,
    }
  },
  methods:
      {
        newCar()
        {
          this.$store.commit('newCar',{id:this.car.id,car_make:this.car.car_make,car_model:this.car.car_model,car_year:this.car_year,url:this.car.url,price:this.car.price});
          this.$store.commit('updateNoCar',{})
          this.car.id=this.id;
          this.$store.commit('updateNoCar',this.car)
        },
        noCar()
        {
          this.$store.commit('updateNoCar',this.car);
        }
      },
  mounted() {
    this.car.id= this.id;
  },
  computed:
      {
        id()
        {
          return +this.$store.state.inventory[this.$store.state.inventory.length-1].id +1
        }
      }
}</script>