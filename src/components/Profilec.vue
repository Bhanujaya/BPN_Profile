<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap');
</style>

<template>
  
        <div class="flow-root mx auto shadow-md rounded box-content p-10 border-2 border-black bg-zinc-700 transition duration-300 hover:bg-stone-800 hover:scale-105 "  >
         
            <div class="text-3xl rounded box-decoration-slice bg-transparent text-white font-manrope">
        <b>My Profile</b>
            </div>
        <div class="rounded-full float-left w-56 h-56 bg-cover m-2 font-manrope" :style="getUrlImage(image)"> </div>
        <br>
        <span> <button class="text-white invisible hover:visible">Hello</button>
        <font-awesome-icon icon="fa-brands fa-instagram" class="float-right text-5xl hover:scale-110 mr-2 transition duration-300 hover:text-white " title="instagram"/>
        </span><br><br><br>
        <font-awesome-icon icon="fa-brands fa-square-twitter" class="ml-32 mr-2 float-right text-5xl hover:scale-110 transition duration-300 hover:text-white" title="twitter"/>
        <br><br><br>
        <font-awesome-icon icon="fa-brands fa-line" class="ml-32 mr-2 float-right text-5xl hover:scale-110 transition duration-300 hover:text-white  " title="line"/>
       <br><br><br><br>
         <div class="float-left text-white text-xl font-manrope">{{name}}</div>
         <div class="float-left mr-96 text-lg text-white font-manrope">{{nickname}}</div><br>
         <div class ="float-left mr-96 text-lg text-white font-manrope">{{age}}</div><br>
         <div class ="float-left mr-84 text-md text-white font-manrope">{{birthdate}}</div>
       
    
    
      </div>
    
        

      
    
</template>
<script>
export default {
            props: {
             name: {
                type: String,
                default: "A B",
             },
             nickname: {
                type: String,
                default: "C"
             },
             age: {
                type: String,
                default: "18"

             },
             birthdate: {
                type: String,
                default: "8 January 2004"
             },
             image: {
                type:  String,
                default: "/assets/cat.jpg",

             },
            },
            methods: {
                getUrlImage(imagePath) {
                    return { 'background-image': 'url("./src/' + imagePath + '")' };
            },
            
            }
}
</script>