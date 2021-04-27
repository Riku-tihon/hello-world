<template>
  <div class="favorite">
    <div>{{id}}</div>
    <div>
      <button @click="$router.push(`/favoritecars/${+this.id -1}`)"  :disabled="id<2">  {{+id-1}}</button>
      <button @click="$router.push(`/favoritecars/${+this.id +1}`)" :disabled="(+id+1)>(pages)"> {{+id+1}}</button>
    </div>
    <input type="number" v-model="pagination" @change="newPagination">
    <div v-if="gridsOrTable==='table'">
    <table width="100%">
      <tr>
        <th v-for="(value,name,index) in favoriteCars[0]" :key="index">{{name}}</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="(car,idx) in favoriteCars" :key="car.id">
        <td v-for="(value,name,index) in car" :key="index">
          <div v-if="edits[idx]==='edit'">
          <img v-if="name==='url'"  :src="value" style="width: 50px;height: 50px">
          <div v-else-if="name==='price'">{{value}}$</div>
          <div v-else>{{value}}</div>
          </div>
          <div v-else><input type="text" v-model="car[name]" :disabled="name==='id'"></div>
        </td>
        <td><button @click="edit(idx,car)">{{edits[idx]}}</button></td>
        <td><button @click="$router.push(`/car/${car.id}`)">View</button></td>
        <td><button @click="favorite(car)">unfavorite</button></td>
      </tr></table>
    </div>
    <div v-else><div>
      <div v-for="(car,idx) in favoriteCars"  :key="car.id" style="width: 25%;border: solid black 1px; display: inline-block">
        <div v-for="(value,name,index) in car" :key="index">
          <div v-if="edits[idx]==='edit'">
            <img v-if="name==='url'"  :src="value" style="width: 50px;height: 50px">
            <div v-else-if="name==='price'">{{value}}$</div>
            <div v-else>{{value}}</div>
          </div>
          <div v-else><input type="text" v-model="car[name]" :disabled="name==='id'">
          </div>
        </div>
        <button @click="edit(idx,car)">{{edits[idx]}}</button>
        <button @click="$router.push(`/car/${car.id}`)">View</button>
        <button @click="favorite(car)">unfavorite</button>
      </div>
    </div></div>
    <div>
      <button @click="$router.push(`/favoritecars/${+this.id -1}`)"  :disabled="id<2">  1</button>
      <button @click="$router.push(`/favoritecars/${+this.id +1}`)" :disabled="(+id+1)>(pages)"> ></button>
    </div>
  </div>
</template>
<script>
export default
{
  props:['id'],
  name:'FavoriteCars',
  data()
  {
    return{
      pagination:this.$store.state.paginationFavorites,
      edits:[]
    }
  },
 computed:{
   gridsOrTable()
   {
     return this.$store.state.gridsOrTable
   },
    favoriteCars()
    {
      return this.$store.state.favoriteCars.filter(item=>item.id>(+ this.id -1)*this.pagination&&item.id<= +this.id *this.pagination);
    },
   pages()
   {
     return Math.ceil(this.$store.state.favoriteCars.length/this.pagination)

   }
 },
  mounted() {

    for (let i = 0; i < this.$store.state.favoriteCars.length; i++) {
      this.edits[i]='edit';
    }
    if(this.favoriteCars.length===0)
    {
      this.$router.push('/favoritecars/1')
    }

  },
  methods:
      {
        favorite(car)
        {
          this.$store.commit('removeFavorite',car);
        },
        newPagination() {
          if (this.pagination<=0)
          {
            this.$store.commit('newPaginationFavorite',1);
            this.pagination=1
          }
          else
          {
            if(this.favoriteCars.length===0)
            {
              this.$router.push('/favoritecars/1')
            }
          this.$store.commit('newPaginationFavorite',this.pagination);}
        },
        edit(id,car)
        {
          if (this.edits[id]==='edit'){
            this.edits[id]='save'}
          else {
            this.$store.commit('changeCar',car);
            if (this.$store.state.favoriteCars.find(item=>item.id===car.id)!==undefined){
              this.$store.commit('changeFavorite',car);}
            this.edits[id]='edit'
          }
        }
      }
}
</script>
