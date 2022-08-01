<template>
    <slot>
        <section class="project-text-box">
            <h1>{{this.description.nameOfProject}}</h1>
            <article class="project-text-box__navbar">
                <h2 v-for="tag1 of this.description.tag1" :key="tag1">{{tag1}}</h2>
            </article>
            <h3>{{this.description.mission}}</h3>
            <p v-for="mission of this.description.missionDesc" :key="mission">{{mission}}</p>
            <aside class="project-text-box__tags2-box">
                <h2>{{this.description.tag2.join(' - ')}}</h2>
            </aside>
        </section>
            <img  
                v-if="this.project.format === 'img'" 
                :alt="this.project.name" 
                :src="this.project.img"
            />
    </slot>
</template>

<script>

export default {
    name: 'DetailElement',
    props: ['description'],
}

</script>