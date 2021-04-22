<template>
  <div v-for="(value,name,index) in car" :key="index">
    <div v-if="text1==='edit'">
    <img v-if="name==='url'"  :src="value" style="width: 50px;height: 50px">
    <div v-else-if="name==='price'">{{value}}$</div>
    <div v-else>{{value}}</div>
  </div>
    <div v-else><input type="text" v-model="car[name]" :disabled="name==='id'"></div>
  </div>
  <button @click="favorite(car)">{{text}}</button>
  <button @click="edit(car)">{{text1}}</button>
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
      text1:'edit'
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
      },
    edit(car)
    {
      if (this.text1==='edit'){
        this.text1='save'}
      else {
        this.$store.dispatch('changeCar',car)
        this.text1='edit'}
    }

  }
}
</script>