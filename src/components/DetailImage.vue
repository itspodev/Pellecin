<template>
    <slot>
        <section class="container-detail">
            <div v-for="task in this.image" :key="task.name" :class="task.class">
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

        <!-- <section class="containerProjectLAETITIA">
            <div v-for="task in this.image" :key="task.name" :class="`${task.class} gridItems`">
                <img 
                    :alt="task.name" 
                    :src="task.img" 
                />
                <video 
                    loop="infinite" 
                    autoplay="autoplay" 
                    muted=''
                />
            </div>
        </section> -->
    </slot>
</template>

<script>
export default {
    name: 'DetailImage',
    props: ['image'],
}


</script>