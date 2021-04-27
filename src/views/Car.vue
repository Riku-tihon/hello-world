<template>
  <div v-for="(value,name,index) in car" :key="index">
    <div v-if="editCar==='edit'">
    <img v-if="name==='url'"  :src="value" style="width: 50px;height: 50px">
    <div v-else-if="name==='price'">{{value}}$</div>
    <div v-else>{{value}}</div>
  </div>
    <div v-else><input type="text" v-model="car[name]" :disabled="name==='id'"></div>
  </div>
  <button @click="favorite(car)">{{favorites}}</button>
  <button @click="edit(car)">{{editCar}}</button>
</template>
<script>
export default
{
  props:['id'],
  name:'Car',
  data()
  {
    return{
      favorites:'favorite',
      editCar:'edit'
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
      this.favorites='unfavorite'
    }
      this.$store.commit('price')
  },
  methods:
  {
      favorite(car)
      {
        if (this.favorites==='favorite')
        {
          this.$store.commit('addFavorite',car)
          this.favorites='unfavorite';
        }
        else
        {
          this.$store.commit('removeFavorite',car)
          this.favorites='favorite';
        }
      },
    edit(car)
    {
      if (this.editCar==='edit'){
        this.editCar='save'}
      else {
        this.$store.commit('changeCar',car);
        if (this.$store.state.favoriteCars.find(item=>item.id===car.id)!==undefined){
          this.$store.commit('changeFavorite',car);}
        this.editCar='edit'}
    }

  }
}
</script>