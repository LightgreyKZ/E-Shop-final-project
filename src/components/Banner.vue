<template>
    <div class="banner_wrapper">
        <div class="header">
            <div class="title_block">
                <div class="title">Маркетплейс с душой</div>
                <div class="subtitle">плати людям, а не корпорациям</div>
                <div class="buttons">
                        <a href="#catalog_list">
                            <button class="button_to_goods">
                            К товарам
                            </button>   
                        </a>
                    <button class="button_about">О проекте</button>
                </div>
            </div>
        </div>
        <div class="art">
            <img src="src/assets/images/7d358341307a4566291263f5856958f5.png" alt="laughing girl" class="head_art" width="100%" height="100%">
            <img src="src/assets/images/path82.png" alt="big heart" class="heart_art1">
            <img src="src/assets/images/path40.png" alt="heart" class="heart_art2">
            <img src="src/assets/images/path78.png" alt="heart" class="heart_art3">
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
    background-color: white;
    height: 100%;
    /* border: 1px solid blue; */
    flex-grow: 1;
}
.title_block {
    display: flex;
    flex-direction: column;
    width: 630px;
    height: 300px;
    /* border: 1px solid fuchsia; */
    margin-left: 80px;
}
.title {
    font-weight: 700;
    font-size: 4rem;
    /* height: 156px; */
    /* line-height: 78px; */
}
.subtitle {
    font-weight: 500;
    font-size: 20px;
    color: #676767;
}
.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 292px;
    height: 56px;
    margin-top: 64px;
    gap: 8px;
    /* border: 1px solid salmon; */
}
.button_to_goods {
    width: 143px;
    height: 56px;
    padding: 15px;
    border-radius: 8px;
    background-color: #DC2840;
    color: #FAFAFF;
    border: none;
    /* font-family: Montserrat; */
    font-size: 20px;
    font-weight: 700;
    text-align: left;

}
.button_about {
    width: 149px;
    height: 56px;
    padding: 15px;
    border-radius: 8px;
    background-color: white;
    color: #676767;
    border: none;
    /* font-family: Montserrat; */
    font-size: 20px;
    font-weight: 500;
    text-align: left;
}
.button_to_goods:active,.button_about:active {
    border: 1px solid;
}
.art {
    display: flex;
    height: 100%;
    width: 756px;
    /* border: 1px solid red; */
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
    z-index: 11;
    transition: all 0.3s ease-in-out;
}
.heart_art3 {
    position: absolute; 
    top: 46px; 
    left: 50px;
    z-index: 12;
    transition: all 0.3s ease-in-out;
}

.rotate_heart {
    transition: all 0.3s ease-in-out;
}

.heart_art2:hover, .heart_art3:hover {
    transform: rotate(10deg) scale(1.1);
}

</style>