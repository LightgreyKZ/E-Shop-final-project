<template>
    <div class="goodsCard" >
        <div class="cardImage" :style="backgroundImage" ></div>
        <div class="cardInfo">
            <h3 class="cardTitle">{{ products.title }}</h3>
            <div class="addinfo">
                <slot name="instock"></slot>
                <slot name="discount"></slot>
            
            <p class="cardPrice">{{ products.price }}</p>
            <p class="cardCategory">{{ products.category }}</p> 
            </div>
            
        </div>
        <button class="addToCart" @click="add_To_Cart()">+</button>
    </div>
    
    <!-- <div :class="SetClass" class = 'goodsCard' >
        <span class="cross" @click="delTask">✖</span>
        <h4>{{ title }}</h4>
        <p>{{ desc }}</p>
        <button @click="showDetails">Details</button><br>
        <input type="checkbox" class="checkbox" v-model="ischeck" @change="SetStatus">Done!
    </div>
    <Transition>
          <div class="details" v-if="isDetails" @click="showDetails">
            <slot></slot>
          </div>
    </Transition> -->
</template>

<script>
import { mapState, mapActions } from 'vuex';


export default {
    name: "Catalog-item",
    data() {
        return {
            backgroundImage: `background-image: url('${this.products.image}')`
        }
    },
    props: ['addinfo','products'],
    methods: {
        ...mapActions(['addToCart']),
        add_To_Cart() {
            //над этим просидел часов 5: (чтобы добавить кол-во в корзину)
            this.addToCart({...this.products, quantity: 1});
        }
    },
    computed: {
        ...mapState(['cartArray'])
    }
}


</script>

<style scoped>

.goodsCard {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  height: 100%;
  border: 1px solid rgb(255, 53, 30);
  /* background-color: coral; */
}

.cardImage {
  display: block; 
  width: 100%; 
  height: 60%;  
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1rem;
  transition: 0.4s;
}

.cardInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    height: 40%;
    /* border: 1px solid salmon; */
}

.cardImage:hover {
  transform: scale(1.03); 
  cursor: grabbing; 
}


.addToCart {
    width: 3rem;
    height: 2rem;
    background-color: rgb(165, 165, 165);
    color: black;
    font-weight: bold;
    border-radius: 8px;
    transition: 0.3s;
    border: none;
}

.addToCart:hover {
  transform: scale(1.05); 
  background-color: red;
  color: white;
}




</style>