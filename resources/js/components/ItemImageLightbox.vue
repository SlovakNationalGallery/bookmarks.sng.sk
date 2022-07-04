<template>
    <a href="#" class="block h-full w-full relative overflow-hidden" @click.prevent="visible = true">
         <div
             class ="block w-full h-full relative"
             :style ="{marginTop: `-${marginY ? `${marginY}px` : 0}`}"
             >
         <ItemImage :item="item" :marginY="marginY" />
         </div>
         <svg class="absolute top-36 left-3 w-8" fill="none" viewBox="0 0 32 35" xmlns="http://www.w3.org/2000/svg">            <g filter="url(#a)" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="m21 6h5v5"/>
            <path d="m19 13 7-7"/>
            <path d="M11 26H6V21"/>
            <path d="m13 19-7 7"/>
            <path d="m26 21v5h-5"/>
            <path d="m19 19 7 7"/>
            <path d="m6 11v-5h5"/>
            <path d="m13 13-7-7"/>
            </g>
            <defs>
            <filter id="a" x="-4" y="0" width="40" height="40" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2433_18536"/>
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_2433_18536" result="shape"/>
            </filter>
            </defs>
        </svg>
    </a>
    <div
        class="fixed inset-0 z-50 flex justify-center items-center"
        v-if="visible"
        @click="visible = false"
    >
        <div
            class="bg-black opacity-70 absolute inset-0 cursor-zoom-out"
            @click="visible = false"
        />
        <div class="relative max-h-full w-full md:max-w-lg" @click.stop="visible = false">
            <img :src="item.image_src" />
            <div
                class="absolute cursor-pointer p-1 bg-white top-0 right-0"
                @click.stop="visible = false"
            >
                <svg class="w-9 h-9"><path d="M36 0H0v36h36V0Z" fill="#fff"/><path d="m28.125 7.875-20.25 20.25M28.125 28.125 7.875 7.875" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ItemImage from "./ItemImage.vue";
const props = defineProps({
    "item": Object,
    "marginY": Number
});

const visible = ref(false);
</script>