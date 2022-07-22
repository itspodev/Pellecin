<template>
    <div :class="this.project.classContainer" v-if="this.project.tag.includes(this.filter)">
        <img v-if="this.project.format === 'img'" :class="this.project.classAsset" :src="this.project.img"/>
        <video v-else-if="this.project.format === 'video'" :class="this.project.classAsset" :src="this.project.img" loop="infinite" autoplay="autoplay" muted=''/>
        <div class="text-over">
            <h3>{{this.project.name}}</h3>
            <p>{{this.project.tag.join(' ')}}</p>
        </div>
    </div>
</template>

<script>
export default{
    name: 'GridElement',
    props:['project','filter']
};
</script>
