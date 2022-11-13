<template>
    <span>
        <button @click="count++" localStorage.setItem(counter, JSON.stringify(count))>
            
            <font-awesome-icon icon="fa-solid fa-heart" class="text-pink-300 hover:scale-125 hover:text-red-800 transition duration-200 animate-bounce scale-105"/>
        </button>


        
        <div>{{count}}</div>
    </span>                                                                                                                                                                               
    
    <div>
        <button @click="dropdown=!dropdown">menu</button>
        <div class="rounded-Lg" v-if="dropdown"> this is dropdown </div>

        <div>this is onchange</div>
        <input class="p-2 border-2" type="text" @change="count++">
        <div>
            count is {{count}}
        </div>
        <div>this is v-model</div>
        <input v-model="name">
        <div>{{name}}</div>
        

    </div>
    


</template>
<script>
export default {
    data()
    {
        return {
            count : localStorage.getItem('counter') || 1 ,
            dropdown : false,
            name: "cream"
        } 
    }

}
</script>