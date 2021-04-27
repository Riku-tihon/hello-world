<template>
  <div class="home">
    <div>{{id}}</div>
<div>
    <button @click="$router.push(`/${+this.id -1}`)"  :disabled="id<2">  {{+id-1}}</button>
    <button @click="$router.push(`/${+this.id +1}`)" :disabled="(+id+1)>(pages)">{{+id+1}}</button>
</div>
    <input type="number" v-model="pagination" @change="newPagination">
    <div v-if="gridsOrTable==='table'">
    <table v-if="inventory.length>0" style="width: 100%">
      <tr>
        <th v-for="(value,name,index) in inventory[0]" :key="index">{{name}}</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    <tr v-for="car in inventory" :key="car.id">
      <td v-for="(value,name,index) in car" :key="index">
        <div v-if="edits[car.id-1]==='edit'">
        <img v-if="name==='url'"  :src="value" style="width: 50px;height: 50px">
        <div v-else-if="name==='price'">{{value}}$</div>
          <div v-else>{{value}}</div>
        </div>
        <div v-else><input type="text" v-model="car[name]" :disabled="name==='id'"></div>
      </td>
      <td><button @click="edit(car.id-1,car)">{{edits[car.id-1]}}</button></td>
      <td><button @click="$router.push(`/car/${car.id}`)">View</button></td>
      <td><button @click="favorite(car.id-1,car)">{{favorites[car.id-1]}}</button></td>
    </tr>
    </table>
    </div>
    <div v-else>
      <div v-if="inventory.length>0" >
        <div v-for="car in inventory" :key="car.id" style="width: 25%;border: solid black 1px; display: inline-block">
          <div v-for="(value,name,index) in car" :key="index">
          <div v-if="edits[car.id-1]==='edit'">
            <img v-if="name==='url'"  :src="value" style="width: 50px;height: 50px">
            <div v-else-if="name==='price'">{{value}}$</div>
            <div v-else>{{value}}</div>
          </div>
          <div v-else><input type="text" v-model="car[name]" :disabled="name==='id'">
          </div>
        </div>
          <button @click="edit(car.id-1,car)">{{edits[car.id-1]}}</button>
          <button @click="$router.push(`/car/${car.id}`)">View</button>
          <button @click="favorite(car.id-1,car)">{{favorites[car.id-1]}}</button>
        </div>
      </div>
    </div>
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
      edits:[],
      favorites:[],
      car1:{},
      favoriteCar:this.$store.state.favoriteCars,
    }
  },
  computed:
      {
        gridsOrTable()
        {
          return this.$store.state.gridsOrTable
        },
        inventory()
        {
          return this.$store.state.inventory.filter(item=>item.id>(+ this.id -1)*this.pagination&&item.id<= +this.id *this.pagination)
        },
        pages()
        {
          return Math.ceil(this.$store.state.inventory.length/this.pagination)

        }
      },
  mounted() {
    for (let i = 0; i < this.$store.state.inventory.length; i++) {
      this.edits[i]='edit';
    }
    for (let i = 0; i < this.$store.state.inventory.length; i++) {
      if (this.favoriteCar.includes(this.inventory[i])) {
        this.favorites[i] = 'unfavorite';
      } else {
        this.favorites[i] = 'favorite';
      }
    }
    if (this.$store.state.inventory[0].price===undefined)
    {
    this.$store.commit('price');}
    if(this.inventory.length===0)
    {
      this.$router.push('/1')
    }
  },
  methods:
      {
        edit(id,car)
        {
          if (this.edits[id]==='edit'){
          this.edits[id]='save'}
          else {
            this.$store.commit('changeCar',car);
            if (this.$store.state.favoriteCars.find(item=>item.id===car.id)!==undefined){
              this.$store.commit('changeFavorite',car);}
            this.edits[id]='edit'}
        },
        newPagination() {
          if (this.pagination<=0)
          {
            this.$store.commit('newPagination',1);
            this.pagination=1;
            this.$store.commit('price');
          }
          else
          {
            this.$store.commit('newPagination',this.pagination);
            if(this.inventory.length===0)
            {
              this.$router.push('/1')
            }
          }
        },
        favorite(id,car)
        {
          if (this.favorites[id]==='favorite')
          {
            this.$store.commit('addFavorite',car)
            this.favorites[id]='unfavorite';
          }
          else
          {
            this.$store.commit('removeFavorite',car)
            this.favorites[id]='favorite';
          }
        }
      }
}
</script>
