<template>
  <div class="favorite">
    <table width="100%">
      <tr>
        <th v-for="(value,name,index) in favoriteCars[0]" :key="index">{{name}}</th>
        <th></th>
      </tr>
      <tr v-for="car in favoriteCars" :key="car.id">
        <td v-for="(value,name,index) in car" :key="index">
            <img v-if="name==='url'"  :src="value" style="width: 50px;height: 50px">
            <div v-else>{{value}}</div>
        </td>
        <td><button @click="favorite(car)">unfavorite</button></td>
      </tr></table>
  </div>
</template>
<script>
export default
{
  name:'FavoriteCars',
 computed:{
    favoriteCars()
    {
      return this.$store.state.favoriteCars
    }
 },
  methods:
      {
        favorite(car)
        {
          this.$store.commit('removeFavorite',car);
        }
      }
}
</script>
