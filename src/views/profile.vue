<template >
<body class="h-screen bg-no-repeat bg-cover bg-center" style="background-image: url(https://i.pinimg.com/originals/0c/73/ac/0c73ac2c27831c222c774b69bd033e33.png)">
    <div>
      <button class="shadow-md  box-content p-2 border-2  text-white bg-stone-600 transition duration 300 hover:bg-gray-200 hover:text-black hover:scale-150 hover:underline ...">
      <RouterLink to ="/">Home</RouterLink>
    </button>
    <button class="shadow-md  box-content p-2 border-2 text-white bg-stone-600 transition duration 300 hover:bg-gray-200 hover:text-black hover:scale-150 hover:underline ...">
    <RouterLink to ="/profile">Profile</RouterLink>

  </button>
    </div>
    

    <div class="flex flex-row">
        <profileCard v-for="member in members" :key="member" class="w-1/3"
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
