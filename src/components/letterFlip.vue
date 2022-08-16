<template>
    <div>
        <span class="letterFlip" v-for="(letter, index) in this.word" :style="'--i:'+index">{{letter === ' ' ? '&nbsp;&nbsp;' : letter }}</span>
    </div>
</template>

<script>
export default{
    name:'letterFlip',
    props:{
        word:{
            type:String
        }
    },
}
</script>