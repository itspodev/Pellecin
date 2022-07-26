<template>
        <slot>
        </slot>
</template>

<script>
export default {
    name: 'ReviewCarousel',
    data: () => {
        return {
            index: 0,
            slides: [],
        }
    },
}
</script>