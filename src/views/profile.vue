<template >
  <button class="shadow-md rounded box-content m-5 hover:scale-150 hover:underline hover:placeholder-show "
      placeholder="cat.jpg">
      <a href="https://stackoverflow.com/questions/37251458/text-inside-button-not-centered">Hello</a>
    
  </button>

 <body class="h-screen bg-no-repeat bg-cover bg-center" style="background-image: url(https://th.bing.com/th/id/R.74145ab250096349756ef7956cd14e07?rik=q11v60h5NWtqGQ&pid=ImgRaw&r=0)">
   
   























  <div class="bg-black flow-root">
  <span class="float-right mt-5 mr-6 ">
    <button class="shadow-md rounded box-content m-5 hover:scale-150 hover:underline ...">
      <RouterLink to ="/">
        <font-awesome-icon icon="fa-solid fa-house" class="text-white text-3xl transition duration-300 " />
      </RouterLink>
    </button>
 
    <button class="shadow-md rounded box-content mt-5 ml-2 hover:scale-150 hover:underline ...">
      <RouterLink to ="/profile">
        <font-awesome-icon icon="fa-solid fa-user" class="text-white text-3xl transition duration-300 " />
      </RouterLink>
    </button>

  </span>
   
    <div class="p-8 text-7xl text-center rounded box-decoration-slice  text-white px-3 font-manrope float-left mr-12 ...">
       <b>BPN</b> 
    </div> 
   
</div>
<br>


  <div class="flex flex-row">
      <profileCard v-for="member in members" :key="member" class="w-1/4 m-7"
          :name="member.name"
          :nickname="member.nickname"
          :age="member.age"
          :birthdate="member.birthdate"
          :image="member.image">
          
          
      </profileCard>

  
  </div>
  
</body>

     
</template>
<script>

  import profileCard from "../components/Profilec.vue";
  export default {
    data() {
        return  {
            members: [
                { 
                    name: "Bhanujaya",
                    nickname: "Cream",
                    age: "18",
                    birthdate: "8 January 2004",
                    image: "/assets/cream.jpg",
                },
                { 
                    name: "Phattanan",
                    nickname: "Mind",
                    age: "18",
                    birthdate: "5 July 2004",
                    image: "/assets/cat2.jpg",
                },
                { 
                    name: "Nichakan",
                    nickname: "Pleang",
                    age: "18",
                    birthdate: "7 March 2004",
                    image: "/assets/pleang.jpg",
                }
                
            ]
           
        };
    },
    components: {
        profileCard
    }
  }
</script>
