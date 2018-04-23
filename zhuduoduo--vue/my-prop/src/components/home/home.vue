<template>
  <div class="home">
     <div class="items">
        <ul>
           <li class="item" v-for="(em,index) in home" v-show="num==index" :key="index">
             <img :src="em.imges">
           </li>
        </ul>
     </div>
     <v-cont></v-cont>
     <v-footer></v-footer>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      num:0,
      t:null,
      home:[
      {"imges":"/static/img/index-banner1.f7d54c5.jpg",tab:""},
      {"imges":"/static/img/index-banner3.82aea7e.jpg",tab:""},
      {"imges":"/static/img/new1.cc6662c.jpg",tab:""},
      {"imges":"/static/img/recruitLandlord_banner.4de46dc.jpg",tab:""},
      {"imges":"/static/img/short-rent-banner1.6cd736a.jpg",tab:""},
     ]
     
    }
  },
  computed:{
    
  },
  methods:{
   // getData(){
   // 	this.$http.get('../../../static/data.json').then((res)=>{
   //    // res.data()
   // 		this.data=res.data;
   //    console.log(res.data.home)
   // 	}).catch((error)=>{
   //    console.log(error)
   // 	})
   // 	console.log(1)
   // }
   lun(){
     this.t=setInterval(()=>{
          this.num++;
          if(this.num==5){
            this.num=0;
          }
        },4000);
   }
 },
  mounted(){
   // this.getData();
  this.lun();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
      width: 100%;
      /*height: 800px;*/
    }
    .items{
      width: 100%;
      height: 463px;
    }
    .items>ul{
      width: 100%;
      height: 463px;
      position: relative;
    }
   .item{
    width: 100%;
    height: 100%;
   }
   .item>img{
    width: 100%;
    height: 100%;
   }
   @media screen and (min-width: 1200px){
      
     }
   @media (min-width:1150px) and (max-width: 1199px){
      
    }
    @media (min-width:971px) and (max-width: 1149px){
     
    }
   @media (min-width:781px) and (max-width: 970px){
      
    }
    @media (min-width:601px) and (max-width: 780px){
     
    }
    @media screen and (max-width: 599px){
      
    }
</style>