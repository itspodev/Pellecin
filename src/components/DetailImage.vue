<template>
    <slot>
        <section class="container-detail">
            <div v-for="task in this.image" :key="task.name" :class="task.class">
                <img
                    v-if="task.format === 'img'" 
                    :alt="task.name" 
                    :src="task.img" 
                    
                />
            </div>
        </section>
    </slot>
</template>

<script>
export default {
    name: 'DetailImage',
    props: ['image'],
}


</script>