

<template>
    <header>
        <nav class="bloc">   
            <slot></slot>
            <div class="navBar">
                <a href="/"><img src="../assets/img/Logo-Pepenome1.png" alt="" class='logo-pepenome'/></a>
                <ul>
                    <li><a href="/projets">MES PROJETS</a></li>
                    <li><a href="/about">À PROPOS</a></li>
                    <li><a href="/contact">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default{
    name: 'navbar'
};
</script>
