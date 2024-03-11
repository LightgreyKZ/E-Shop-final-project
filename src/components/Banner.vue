<template>
    <div class="banner_wrapper">
        <div class="header"></div>
        <div class="art">
            <img src="src/assets/images/7d358341307a4566291263f5856958f5.png" alt="laughing girl" class="head_art" width="100%" height="100%">
            <img src="src/assets/images/path82.png" alt="big heart" class="heart_art1" >
            <img src="src/assets/images/path40.png" alt="big heart" class="heart_art2">
            <img src="src/assets/images/path78.png" alt="big heart" class="heart_art3">
        </div>
    </div>
</template>

<script>
export default {
    name: "Banner"
}

</script>

<style scoped>

.banner_wrapper {
    display: flex;
    flex-direction: row;
    height: 552px;
    width: 1440px;
    margin: 0 auto;
}

.header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(183, 142, 142);
    height: 100%;
    border: 1px solid blue;
    flex-grow: 1;
}

.art {
    display: flex;
    height: 100%;
    width: 756px;
    border: 1px solid red;
    background-color: white;
    position: relative;
}

.head_art {
    position: absolute; 
    object-fit: cover;
    top: 0; 
    left: 0;
    z-index: 10;
}
.heart_art1 {
    position: absolute; 
    top: 125px; 
    left: 100px;
    z-index: 9;
}

.heart_art2 {
    position: absolute; 
    top: 467px; 
    left: 580px;
    z-index: 8;
}
.heart_art3 {
    position: absolute; 
    top: 46px; 
    left: 50px;
    z-index: 8;
}
</style>