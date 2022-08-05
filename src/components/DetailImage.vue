<template>
    <slot>
        <section class="containerProjectLAETITIA">
            <div v-for="task in this.image" :key="task.name" :class="`${task.class} gridItems`">
                <img
                    v-if="task.format === 'img'" 
                    :alt="task.name" 
                    :src="task.img" 
                />
                <video 
                v-else 
                    :src="task.img" 
                    loop="infinite" 
                    autoplay="autoplay" 
                    muted=''
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