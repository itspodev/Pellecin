<template>
    <p v-bind:index="index">Index: {{index}}</p>
    <slot>
    </slot>
</template>

<script>
export default {
    name: 'ReviewCarouselSlide',
    data: () => {
        return {
            data: () => {
            },
            reviews: [
                { index: 0, textPt1: 'Très heureux du travail de Noémie.', textPt2: 'Nous avons d\'ailleurs décidé de la placer en priorité dans nos futurs projets de graphisme.', author: 'Boxing culture' }
            ]
        }
    },
    props: [ 'i']
}
</script>