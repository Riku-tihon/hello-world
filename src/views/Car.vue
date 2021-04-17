<template>
  <div v-for="(value,name,index) in car" :key="index">
    <img v-if="name==='url'" :src="value" alt="" width="150" height="150">
    <div v-else>{{value}}</div>
  </div>
  <button @click="favorite(car)">{{text}}</button>
</template>
<script>
export default
{
  props:['id'],
  name:'Car',
  data()
  {
    return{
      text:'favorite',
    }
  },
  computed:
      {
        car(){
          return this.$store.state.inventory.find(item=>item.id=== +this.id);
        }
      },
  mounted() {
    if (this.$store.state.favoriteCars.includes(this.car))
    {
      this.text='unfavorite'
    }
      this.$store.commit('price')
  },
  methods:
  {

      favorite(car)
      {
        if (this.text==='favorite')
        {
          this.$store.commit('addFavorite',car)
          this.text='unfavorite';
        }
        else
        {
          this.$store.commit('removeFavorite',car)
          this.text='favorite';
        }
      }

  }
}
</script>