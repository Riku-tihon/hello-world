<template><div class="newcar">
  <input type="number" disabled v-model="car.id"><br>
  <input type="text" v-model="car.car_make"><br>
  <input type="text" v-model="car.car_model"><br>
  <input type="number" v-model="car.car_year"><br>
  <input type="text" v-model="car.url"><br>
  <input type="text" v-model="car.price"> <br>
  <button @click="newCar">new car</button>
</div></template>
<script>export default
{
  name:'NewCar',
  data()
  {
    return{
      car:{},
    }
  },
  methods:
      {
        newCar()
        {
          this.$store.commit('newCar',this.car);
          this.car={};
          this.car.id= +this.$store.state.inventory[this.$store.state.inventory.length-1].id +1;
        }
      },
  mounted() {
    this.car.id= +this.$store.state.inventory[this.$store.state.inventory.length-1].id +1;
  },
}</script>