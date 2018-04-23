<template>
	<div class="footer">
		<div class="foot">
			<p>
				<span class="fs">联系电话：023-67728163</span>
			</p>
			<p>重庆住多多科技有限责任公司  网站备案/许可证号： 渝ICP备17011499号-1</p>
		</div>
		
	</div>
</template>
<script>
	export default{
		name:'v-footer',
		data(){
			return{
              
			}
		}
	}
</script>
<style scoped>
.foot{
	position: relative;
	padding: 50px 17px 20px 10px;
	box-sizing: border-box;
	font-size: 14px;
}
p{
	margin: 0;
	padding-bottom: 10px;
	color: #999999;
	text-align: center;
}
.fs{
	padding: 4px 0 2px 30px;
	background: url(../../assets/phone-icon.png) no-repeat scroll -160px -86px;
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