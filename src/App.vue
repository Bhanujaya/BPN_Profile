
<template>
<component :is="layout">
  <RouterView />
</component>
  
</template>

<script>
import Main from "@/layout/main.vue";
import Default from "@/layout/default.vue";
export default {
  components:{
    Main,
    Default,
  },

  computed: {
  layout() {
    console.log(this.$route.meta);
    return this.$route.meta.layout || Default ;
  },
  },
};
    


</script>

