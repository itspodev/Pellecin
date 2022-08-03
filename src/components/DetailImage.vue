<template>
    <slot>
        <div v-for="task in this.image" :key="task.name" class="image-box">
            <img
                v-if="task.format === 'img'" 
                :alt="task.name" 
                :src="task.img" 
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