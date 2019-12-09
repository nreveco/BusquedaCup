
<template>
  <div>  
    <div class="vld-parent">
        <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>
    </div>
<b-container class="bv-example-row">
  <b-row>
    <b-col cols="12" md="12">
    <b-input-group class="mt-3">
    <b-form-input style="border:1px solid #000" v-model="search"></b-form-input>
    <b-button variant="info" v-on:click="searchProductos()">Buscar</b-button>
    </b-input-group>
    </b-col>

    <b-col cols="6" md="3" v-for="item of items" v-bind:key="item.id">
      <b-card 
    :title="item.name"
    :img-src="item.image" 
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2" >
      <b-card-text>
        {{item.name}}
        {{item.species}}
      </b-card-text>
    </b-card>
    </b-col>
  </b-row>
</b-container>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { mapState, mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions([]),
      searchProductos() {
        this.isLoading= true;
        this.items=[];
        this.axios.get('http://localhost/apiCN/public/Productos/'+this.search)
          .then(response => {
            response.data.map(item => {  
              this.items.push({id:item.id, image: item.imagen, name: item.titulo, precio: item.precio });
              this.isLoading= false;
            });
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      doAjax() {
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                  this.isLoading = false
                },5000)
      },
      onCancel() {
              console.log('User cancelled the loader.')
      }
    },
    mounted(){
        this.isLoading= true;
        this.axios.get('http://localhost/apiCN/public/Productos/0')
          .then(response => {
            response.data.map(item => {
            this.items.push({id:item.id, image: item.imagen, name: item.titulo, precio: item.precio });
            this.isLoading= false;
            });
          })
          .catch(function (error) {
            console.log(error)
          })
    },  
    data() {
      return {
        // Note 'isActive' is left out and will not appear in the rendered table
        items: [],
        search:'',
        isLoading: false,
        fullPage: true   
      }
    },
    components: {
            Loading
        },
    computed: {
      ...mapState([])
      }
  }
</script>