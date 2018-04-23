<template>
  <div class="admin">
     <div class="header">
     	<div class="header-inner">
     		<div class="logo">
     			<img src="../assets/logo.png">
     		</div>
     		<ul class="nav" v-for="item in $router.options.routes">
     			<li v-for="it in item.children" class="nav-item" v-if="!it.hidden">
     				<router-link :to="{path:item.path+it.path}" class="nav-item-a" >{{it.tab}}</router-link>
     			</li>
     		</ul>
        <div class="isshow" @click="aa">
          <span></span>
          <span></span>
          <span></span>
        </div>
     	</div>
      <div v-show="isshow">
        <ul class="show-nav" v-for="item in $router.options.routes">
         <li v-for="it in item.children" class="item" v-if="!it.hidden">
            <router-link :to="{path:item.path+it.path}" class="item-a" >{{it.tab}}</router-link>
          </li>
       </ul>
     </div>
     </div>
    <div class="show">

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {
       isshow:false
    }
  },
  methods:{
    aa(){
      this.isshow=!this.isshow;
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.show{
  position: relative;
  top: 60px;
  z-index: 0;
}
 .header{
 	width: 100%;
 	height: 60px;
 	outline: 1px solid red;
 	position: fixed;
  background: #fff;
  z-index: 5;
 }
 .nav-item-a{
  font-size: 14px;
  display: block;
  line-height: 57px;
  color: #333333;
  border-top:3px solid #fff;
 }
 .nav-item-a:hover{
   color:#E95456;
   border-top:3px solid #E95456;
 }
 .nav-item{
  float: left;
  position: relative;
 }
 .logo{
   	margin-top: 10px;
   	float: left;
    cursor: pointer;
   }
   .nav{
   	float: right;
    position: relative;
   }
@media screen and (min-width: 1200px){
   .header-inner{
   	   width: 1200px;
   	   height: 60px;
   	   margin: 0 auto;
   	   /*background:blue;*/
   }
   .router-link-active{
    border-top:3px solid #E95456;
    color:#E95456;
   }
   .nav-item-a{
    padding: 0 12px;
   }
   .logo>img{
   	width: 243px;
   	height: 36px;
   }
   .nav-item{
    margin-right: 15px;
   }
   .nav{
     top: 0px;
   }
   .show-nav{
    display: none;
   }
}
@media (min-width:1150px) and (max-width: 1199px){
   .header-inner{
	   	width: 100%;
	   	height: 60px;
	   	/*background: blue;*/
   }
   .logo>img{
   	width: 243px;
   	height: 36px;
   }
   .nav-item-a{
    padding: 0 12px;
   }
   .nav-item{
    margin-right: 15px;
   }
   .router-link-active{
    border-top:3px solid #E95456;
    color:#E95456;
   }
   .nav{
     top: 0px;
   }
   .show-nav{
    display: none;
   }
}
@media (min-width:971px) and (max-width: 1149px){
	.header-inner{
	   	width: 100%;
	   	/*background: blue;*/
	   	height: 60px;
   }
   .logo>img{
   	width: 180px;
   	height: 27px;
   }
   .nav-item{
    margin-right: 5px;
   }
   .nav-item-a{
    padding: 0 5px;
   }
   .router-link-active{
    border-top:3px solid #E95456;
    color:#E95456;
   }
   .nav{
     top: 0px;
   }
   .show-nav{
    display: none;
   }
}
@media (min-width:781px) and (max-width: 970px){
	.header-inner{
	   	width: 100%;
	   	/*background: blue;*/
	   	height: 60px;
   }
   .logo>img{
   	width: 180px;
   	height: 27px;
   }
   .nav-item{
    margin-right: 5px;
   }
   .nav-item-a{
    padding: 0 5px;
   }
   .router-link-active{
    border-top:3px solid #E95456;
    color:#E95456;
   }
   .nav{
     top: 0;
   }
   .show-nav{
    display: none;
   }
}
@media (min-width:601px) and (max-width: 780px){
	.header-inner{
	   	width: 100%;
	   	/*background: blue;*/
	   	height: 60px;
   }
   .logo>img{
   	width: 200px;
   	height: 30px;
   }
   .router-link-active{
    /*border-top:3px solid #E95456;*/
    color:#E95456;
   }
   .isshow{
    width: 35px;
    height: 35px;
    /*background: red;*/
    float: right;
   margin: 10px 10px 0 0;
   }
   .isshow>span{
    display: block;
    width: 20px;
    height: 5px;
    margin: 4px auto auto;
    margin-top: 3px;
    background: #E95456;
   }
  .nav{
    display: none;
  }
  .show-nav{
    width: 100%;
    height: 60px;
    overflow: auto;
    background: #fff;
  }
  .item{
    float: left;
    margin-right: 15px;
  }
  .item-a{
    padding: 0 12px;
    text-align: center;
    line-height: 60px;
    color: #333;
  }
}
@media screen and (max-width: 599px){
    .header-inner{
	   	width: 100%;
	   	/*background: blue;*/
	   	height: 60px;
   }
   .logo>img{
   	width: 200px;
   	height: 30px;
   }
  
   .router-link-active{
    /*border-top:3px solid #E95456;*/
    color:#E95456;
   }
   .nav{
    display: none;
   }
   .isshow{
    width: 35px;
    height: 35px;
    /*background: red;*/
    float: right;
   margin: 10px 10px 0 0;
   }
   .isshow>span{
    display: block;
    width: 20px;
    height: 5px;
    margin: 3px auto auto;
    margin-top: 3px;
    background: #E95456;
   }
   .show-nav{
    width: 100%;
    height: 60px;
    overflow: auto;
    background: #fff;
  }
  .item{
    float: left;
    margin-right: 15px;
  }
  .item-a{
    padding: 0 12px;
    text-align: center;
    line-height: 60px;
    color: #333;
  }
}
</style>
