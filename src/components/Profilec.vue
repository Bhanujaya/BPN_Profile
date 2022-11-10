<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap');
</style>

<template>
    <body >
        <div class="mx auto shadow-md rounded box-content p-10 border-2 border-black bg-zinc-700 transition duration 300 hover:bg-stone-800 ..."  >
            <span class="text-3xl rounded box-decoration-slice bg-transparent text-white px-2 font-manrope">
        <b>My Profile</b>
            </span>


        <div class="rounded-full w-56 h-56 bg-cover font-manrope" :style="getUrlImage(image)"> </div>

         
         <div class="text-white text-xl font-manrope">{{name}}</div>
         <div class="text-white font-manrope">{{nickname}}</div>
         <div class ="text-white font-manrope">{{age}}</div>
        <div class ="text-white font-manrope">{{birthdate}}</div>
        <border-top>
         
        </border-top>
    
    
      </div>
    
        

    </body>
      
    
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