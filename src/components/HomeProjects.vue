<template>
<div class="hp-container">
    <div class="hp-head">
        <h3>PEPENOME</h3>
        <h1>MES PROJETS</h1>
        <hr>
    </div>
    <div class="hp-navbar">
        <h3>motion design</h3>
        <h3>illustration</h3>
        <h3>branding</h3>
        <h3>graphisme</h3>
        <h3>édition</h3>
        <h3>web</h3>
    </div>

    <div class="hp-grid">
        <div class="hp-grid-1"><img src="../assets/PAGE D'ACCEUIL/cycliste.jpg"/></div>
        <div class="hp-grid-2"><video src="../assets/PAGE D'ACCEUIL/Introduction-Vidéo1.mp4" loop="infinite" autoplay="autoplay" muted=''/></div>
        <div class="hp-grid-3"><img src="../assets/PAGE D'ACCEUIL/vynil.jpg"/></div>
        <div class="hp-grid-4"><img src="../assets/PAGE D'ACCEUIL/Société inclusive.gif"/></div>
        <div class="hp-grid-1"></div>
        <div class="hp-grid-2"></div>
        <div class="hp-grid-3"></div>
        <div class="hp-grid-4"></div>
    </div>
</div>



</template>



<script>
export default {
    name: 'home-project'
}
</script>

<style>

.hp-container {
    width:100%;
    margin:auto;
    color:white;
    background:black;
    padding:50px 0
}

.hp-container h3 {
    font-weight:300
}

.hp-head {
    width:18%;
    margin:auto;
    text-align:center
}
.hp-head h1 {
    margin-bottom:0
}

.hp-navbar {
    margin: 40px auto;
    text-transform: uppercase;
    display:flex;
    justify-content:space-between;
    width:70%;
}

.hp-grid-1 img,
.hp-grid-4 img {
    width:100%;
    height:auto
}

.hp-grid-2 video {
    width:100%;
    height:auto
}

.hp-grid-3 img {
    width:100%;
    height:inherit
}

.hp-grid-4 img {
    width:100%;
    height:inherit
}

.hp-grid {
width:80%;
margin:auto;
display: grid;
grid-template-columns: repeat(9, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 15px;
grid-row-gap: 15px;
}
.hp-grid div {
    margin:auto
}

.hp-grid-1 { 
    grid-area: 1 / 1 / 2 / 4;
    height:309px;
    width:309px;
 }
.hp-grid-2 {
    grid-area: 1 / 4 / 2 / 10;
    height:309px;
    width:547px;
}
.hp-grid-3 {
    grid-area: 2 / 1 / 3 / 7;
    height:311px;
    width:465px;
}
.hp-grid-4 {
    grid-area: 2 / 7 / 3 / 10;
    height:311px;
    width:311px;
}

</style>