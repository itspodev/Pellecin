<template>
    <slot>
        <div>
            <p>{{this.description}}</p>
            <h1>{{this.description.nameOfProject}}</h1>
            <div class="hp-navbar">
                <h2 class="nav-hp"></h2>
            </div>
            <h3></h3>
            <p></p>
            <div>
                <h2></h2>
            </div>
        </div>
    </slot>
</template>

<script>

export default {
    name: 'DetailElement',
    props: ['description']
}

</script>