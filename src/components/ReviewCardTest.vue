<template>
    <div class="review-card">
        <div class="review-card__up">
            <p>Clients Satisfaits !</p>
            <h2>Les retours</h2>
        </div>
        <ReviewCarousel>
            <ReviewCarouselSlide>
            <div class="review-card__cite-box">
                <cite>&laquo; Très heureux du travail de Noémie.</cite>
                <cite>Nous avons d'ailleurs décidé de la placer en priorité dans nos futurs projets de graphisme. &raquo;</cite>
                <h3>Boxing culture</h3>
            </div>
            </ReviewCarouselSlide>

            <ReviewCarouselSlide>
            <div class="review-card__cite-box">
                <cite>&laquo; Très bonne collaboration sur le maquettage d'un kit pédagogique graphique sur les thématiques du handicap pour le Ministère des Solidarités et de la Santé en collaboration. Nous avons été impressionné par le travail réalisé ainsi que l'engagement.</cite>
                <cite>Noémie est disponible, à l'écoute et ses rendus ont harmonieusement illustré le kit !  Merci pour son aide !! &raquo;</cite>
                <h3>ALLIANCE C</h3>
            </div>
            </ReviewCarouselSlide>
        </ReviewCarousel>
    </div>
</template>

<script>
    import ReviewCarousel from './ReviewCarousel.vue';
    import ReviewCarouselSlide from './ReviewCarouselSlide.vue';
    export default {
        name: 'ReviewCardTest',
        components: {
            ReviewCarousel,
            ReviewCarouselSlide,
        }
    }
</script>