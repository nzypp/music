<template>
    <div id="swipercom">
        <div class="swiper-container" id="swiperIndex">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
                    <img :src="item.pic" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import "swiper/css/swiper.css"
import Swiper from "swiper"
import {getBanner} from "@/api/index.js"
export default {
    name: "swipercom",
    data(){
        return{
            imgs:[
                {pic:require("../assets/logo.png")},
                {pic:require("../assets/logo.png")},
                {pic:require("../assets/logo.png")},
                {pic:require("../assets/logo.png")},
                {pic:require("../assets/logo.png")},
                {pic:require("../assets/logo.png")},
                {pic:require("../assets/logo.png")}
                
            ]
        }
    },
    async mounted(){
        var res = await getBanner(1);
        this.imgs = res.data.banners;
        var myswiper = new Swiper("#swiperIndex",{
            autoplay:true,
            // loop:true
            // 分页器
            pagination:{
                el:".swiper-pagination",
                // 分页小圆点可以点击
                clickable:true
            }
        })
    }

}
</script>

<style lang="less">
    #swipercom{
        width: 7.5rem;
    #swiperIndex.swiper-container{
        width: 7.1rem;
        height: 2.6rem;
        border-radius: 0.1rem;
        
        .swiper-slide img{
            width: 100%;
        }
        .swiper-pagination-bullet-active{
            background-color: orangered;
        }
    
    }
    }
    </style>

