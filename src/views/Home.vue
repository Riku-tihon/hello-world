<template>
  <div class="home">
    <div>{{id}}</div>
    <input type="number" v-model="pagination" @change="newPagination">
    <table v-if="inventory.length>0" style="width: 100%">
      <tr>
        <th v-for="(value,name,index) in inventory[0]" :key="index">{{name}}</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    <tr v-for="car in inventory" :key="car.id">
      <td v-for="(value,name,index) in car" :key="index">
        <div v-if="text[car.id-1]==='edit'">
        <img v-if="name==='url'"  :src="value" style="width: 50px;height: 50px">
        <div v-else>{{value}}</div></div>
        <div v-else><input type="text" v-model="car[name]"></div>
      </td>
      <td><button @click="edit(car.id-1,car)">{{text[car.id-1]}}</button></td>
      <td><button @click="$router.push(`/car/${car.id}`)">View</button></td>
      <td><button @click="favorite(car.id-1,car)">{{text1[car.id-1]}}</button></td>
    </tr>
    </table>
    <button @click="bii">b</button>
    <button @click="$router.push(`/${+this.id -1}`)"  :disabled="id<2">  1</button>
    <button @click="$router.push(`/${+this.id +1}`)" :disabled="(+id+1)>(pages)"> ></button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  props:['id'],
  name: 'Home',
  data()
  {
    return {
    pagination:this.$store.state.pagination,
    b: (+this.id)-3,
      text:[],
      text1:[],
      car1:{},
      favoriteCar:this.$store.state.favoriteCars,
    }
  },
  computed:
      {
        inventory()
        {
          return this.$store.state.inventory.filter(item=>item.id>(+ this.id -1)*this.pagination&&item.id<= +this.id *this.pagination)
        },
        pages()
        {
          return this.$store.state.inventory.length/this.pagination
        }
      },
  mounted() {
    for (let i = 0; i < 50; i++) {
      this.text[i]='edit';
    }
    for (let i = 0; i < 50; i++) {
      if (this.favoriteCar.includes(this.inventory[i]))
      {
        this.text1[i]='unfavorite';
      }
      else {this.text1[i]='favorite';}
    }
    this.$store.commit('price')
    console.log(this.inventory)
  },
  methods:
      {
        edit(id,car)
        {
          if (this.text[id]==='edit'){
          this.text[id]='save'}
          else {
            this.$store.dispatch('newCar',car)
            this.text[id]='edit'}
        },
        newPagination() {
          this.$store.commit('newPagination',this.pagination);
        },
        favorite(id,car)
        {
          if (this.text1[id]==='favorite')
          {
            this.$store.commit('addFavorite',car)
            this.text1[id]='unfavorite';
          }
          else
          {
            this.$store.commit('removeFavorite',car)
            this.text1[id]='favorite';
          }
        }
      }
}
</script>
