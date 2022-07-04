<template>
    <img
        :class="`${marginY ? `h-auto` : `h-full object-cover` } w-full`"
        :alt="`${ item.author }: ${ item.title }`"
        :src="item.image_src"
        :srcset="item.image_srcset"
        sizes="1px"
        onload="window.requestAnimationFrame(function(){if(!(size=getBoundingClientRect().width))return;onload=null;sizes=Math.ceil(size/window.innerWidth*100)+'vw';});"
    />
</template>

<script setup>
    const props = defineProps(['item', "marginY"])
</script>
