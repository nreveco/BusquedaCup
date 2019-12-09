
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
    <b-table striped hover :items="items"></b-table>
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
        this.axios.get('http://localhost/apiCN/public/Busquedas')
          .then(response => {
            response.data.map(item => {
            this.items.push({titulo:item.titulo, texto: item.valor})
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