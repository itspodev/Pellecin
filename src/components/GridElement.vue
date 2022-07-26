<template>
    <div v-if="this.filter ? this.project.tag.includes(this.filter) : true" :class="`gridItems ${this.project.class}`">
        <img  
            v-if="this.project.format === 'img'" 
            :alt="this.project.name" 
            :src="this.project.img"
        />
        <video 
            v-else 
            :src="this.project.img" 
            loop="infinite" 
            autoplay="autoplay" 
            muted=''
        />
        <div class="text-over">
            <h3>{{this.project.name}}</h3>
            <p>{{this.tag.join(', ')}}</p>
        </div>
    </div>
</template>

<script>
export default{
    name: 'GridElement',
    props:['project','filter'],
    data() {
        return {
            tag: [] 
        }
    },
    methods: {
        getTag() {
            this.tag = this.project.tag.filter(tag => tag !== 'home')
        }
  },
  created() {
    this.getTag()
  }

};
</script>
