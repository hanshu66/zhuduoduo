<template>
	<div class="cont">
		<ul class="cont-inner">
			<li v-for="v in list" class="lis" >
				<router-link to="knowApp">
					<img :src="v.tu">
					<div class="sss">
					
				    </div>
				</router-link>
				
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'v-cont',
		data(){
			return{
              list:[
			      {"tu":"/static/img/index-img-list1.f3acb4c.jpg"},
			      {"tu":"/static/img/index-img-list2.b9cfa91.jpg"},
			      {"tu":"/static/img/index-img-list3.ee073a9.jpg"},
			      {"tu":"/static/img/index-img-list4.d08b5bf.jpg"}
     			]
			}
		}
	}
</script>
<style scoped>
.cont{
	width: 100%;
   }
    .lis{
    	float: left;
    	
    }
    .d{
    	display: none;
    	/*background: red;*/
    	
    }
    .lis>a{
    	display: block;
    	margin: 8px 2px 0px;
    	border:1px solid #ccc;
    	position: relative;
    	
    }
    .lis>a:hover>.sss{
    	display: block;
    	width: 100%;
    	height: 100%;
    	position: absolute;
    	left: 0;
    	top: 0;
    	background: #000;
    	opacity: 0.3;
    }
    .lis>a>img{
    	width: 100%;
        height: 100%;
    }
	@media screen and (min-width: 1200px){
      .lis{
      	width: 25%;
      	height: 168px;
      }
      .cont{
      	height: 180px;
      }
     }
   @media (min-width:1150px) and (max-width: 1199px){
      .lis{
      	width: 50%;
      	height: 251px;
      }
      .cont{
      	height: 534px;
      }
    }
    @media (min-width:971px) and (max-width: 1149px){
         .lis{
      	width: 50%;
      	height: 251px;
      }
      .cont{
      	height: 534px;
      }
    }
   @media (min-width:781px) and (max-width: 970px){
       .lis{
      	width: 50%;
      	height: 208px;
      }
      .cont{
      	height: 437px;
      }
    }
    @media (min-width:601px) and (max-width: 780px){
      .lis{
      	width: 50%;
      	height: 157px;
      }
      .cont{
      	height: 356px;
      }
    }
    @media screen and (max-width: 599px){
      .lis{
      	width: 100%;
      	height: 241px;
      }
      .cont{
      	height: 1001px;
      }
    }
</style>