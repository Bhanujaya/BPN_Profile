<template>
    <button class="shadow-md rounded box-content m-5 hover:scale-150 hover:underline hover:placeholder-show "
        placeholder="cat.jpg">
        <RouterLink to="http://localhost:5180/">
           Hello
        </RouterLink>
    </button>


    <body class="h-screen bg-no-repeat bg-cover bg-center" style="background-image: url(https://i.pinimg.com/originals/0c/73/ac/0c73ac2c27831c222c774b69bd033e33.png)">
      <div class="bg-black flow-root">
      <span class="float-right mt-5 mr-6 ">
        <button class="shadow-md rounded box-content m-5 hover:scale-150 hover:underline hover:placeholder-show " placeholder="cat.jpg">
          <RouterLink to ="www.google.com">
            <font-awesome-icon icon="fa-solid fa-house" class="text-white text-3xl transition duration-300" />
          </RouterLink>
        </button>
     
        <button class="shadow-md rounded box-content mt-5 ml-2 hover:scale-150 hover:underline ...">
          <RouterLink to ="/profile">
            <font-awesome-icon icon="fa-solid fa-user" class="text-white text-3xl transition duration-300" />
          </RouterLink>
        </button>
  
      </span>
       
        <div class="p-8 text-7xl text-center rounded box-decoration-slice  text-white px-3 font-manrope float-left mr-12 ">
           <b>BPN</b> 
        </div> 
       
    </div>
      <br>
      <br>
      <br>
   
    <div class="flow-root opacity-70"> 
      <img src="../assets/BPN.jpg" alt="" height="450" width="300" class="mt-6 ml-52 float-left ">
      <div class="box-content ml-96 mt-6 mr-52 text-white border-8 border-zinc-800 float-none font-dmsans bg-zinc-800 h-96">
        <p class="opacity-100 mt-24 ml-52 text-2xl">
          " <b>BPN</b> is a group that consists of three individuals who are always <br>
        eager for knowledge and new skills. Even though we are not that talented,<br>
        with practice, we hope that someday we can become professional developers."
        </p>
        <button class=" rounded box-content mt-16 ml-96 hover:scale-150 hover:underline ...">
          <RouterLink to ="/profile">
            --Learn more about us--
          </RouterLink>
        </button>
      </div>
  
    </div>
     
    </body>
    
    
  
</template>
  