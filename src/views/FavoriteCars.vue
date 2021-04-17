<template>
  <div class="favorite">
    <table width="100%">
      <tr>
        <th v-for="(value,name,index) in favoriteCars[0]" :key="index">{{name}}</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="(car,idx) in favoriteCars" :key="car.id">
        <td v-for="(value,name,index) in car" :key="index">
          <div v-if="text[idx]==='edit'">
          <img v-if="name==='url'"  :src="value" style="width: 50px;height: 50px">
          <div v-else-if="name==='price'">{{value}}$</div>
          <div v-else>{{value}}</div>
          </div>
          <div v-else><input type="text" v-model="car[name]"></div>
        </td>
        <td><button @click="favorite(car)">unfavorite</button></td>
        <td><button @click="$router.push(`/car/${car.id}`)">View</button></td>
        <td><button @click="edit(idx,car)">{{text[idx]}}</button></td>
      </tr></table>
  </div>
</template>
<script>
export default
{
  name:'FavoriteCars',
  data()
  {
    return{
      text:[]
    }
  },
 computed:{
    favoriteCars()
    {
      return this.$store.state.favoriteCars;
    }
 },
  mounted() {

    for (let i = 0; i < this.$store.state.favoriteCars.length; i++) {
      this.text[i]='edit';
    }
    console.log(this.text);
  },
  methods:
      {
        favorite(car)
        {
          this.$store.commit('removeFavorite',car);
        },
        edit(id,car)
        {
          if (this.text[id]==='edit'){
            this.text[id]='save'}
          else {
            this.$store.dispatch('newCar',car)
            this.text[id]='edit'
          }
        }
      }
}
</script>
