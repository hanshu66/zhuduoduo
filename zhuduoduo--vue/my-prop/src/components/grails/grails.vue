
<template>
  <div class="grails">
    
   <!-- <div class="grails-box">
   	   
   </div> -->
  </div>
</template>

<script>
export default {
  name: 'grails',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .grails{
    	height: auto;
    }
    /*.grails-box{
    	width: 100%;
    	background:url(../../assets/index-banner2.jpg) center center no-repeat;
    	background-size: cover;
    }*/
   @media screen and (min-width: 1200px){
      .grails-box{
      	height: 466px;
      }
     }
   @media (min-width:1150px) and (max-width: 1199px){
      .grails-box{
      	height: 393px;
      }
    }
    @media (min-width:971px) and (max-width: 1149px){
     .grails-box{
      	height: 332px;
      }
    }
   @media (min-width:781px) and (max-width: 970px){
      .grails-box{
      	height: 267px;
      }
    }
    @media (min-width:601px) and (max-width: 780px){
       .grails-box{
      	height: 470px;
      }
    }
    @media screen and (max-width: 599px){
      .grails-box{
      	height: 350px;
      }
    }
</style>