<template>
    <slot>
        <div class="image-box">
            <img  
                v-if="this.image.format === 'img'" 
                :alt="this.image.name" 
                :src="this.image.img"
            />
        </div>
    </slot>
</template>

<script>

export default {
    name: 'DetailImage',
    props: ['image'],
}

</script>