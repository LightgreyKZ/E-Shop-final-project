<template>
    <div class="goodsCard">
        <img src="{{ imgsrc }}" alt="{{ title }}">
        <h3>{{ title }}</h3>
        <slot name="instock"></slot>
        <slot name="discount"></slot>
        <p>{{ price }}</p>
        <p>{{ category }}</p>
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
export default {
    data() {
        return {
            ischeck: false,
            isDetails: false
        }
    },
    props: ['addinfo','imgsrc','title','price','category'],
    methods: {
        // delTask() {
        //     this.$emit('del', this.index);
        // },
        // SetStatus() {
        //     this.$emit('sendStatus', this.ischeck, this.index);
        // },
        // showDetails() {
        //   this.isDetails = !this.isDetails;
        // }
    },
    computed: {
        // SetClass: function() {
        //     return {
        //         'taskcardYellow'    : this.index%2 === 0,
        //         'taskcardPink'      : this.index%2 === 1,
        //         'finished'          : this.iscompleted
        //     }
        // }
    }
}

</script>

<style scoped>

.goodsCard {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: coral;
}

.cardCommon:hover {
  transform: rotate(-3deg);  
}

.taskcardYellow {
  background: rgba(255, 251, 14, 0.97);
  transform: rotate(3deg);
}

.taskcardPink {
  background: rgba(239, 155, 238, 0.97);
  transform: rotate(-2.5deg);
}

.finished {
  background:rgba(0, 189, 41, 0.97);
  transform: rotate(0);
}

/* Стили для крестика */
.cross {
  position: absolute;
  top: 3px;
  right: 5px;
  cursor: pointer;
}
.checkbox {
  position: relative;
  bottom: 3px;
  left: 5px;
  cursor: pointer;
  font-family: 'Courier New', Courier, monospace;
  margin: 15px;
  transform:scale(1.3);
  opacity:0.9;
}

.details {
    display: block;
    background-color: rgb(9, 190, 130);
    position: absolute;
    padding-left: 10px;
    padding-top: 10px;
    height: 200px;
    width: 600px;
    margin-top: -100px;
    margin-left: -300px;
    top: 50%;
    left: 50%;
    border: 1PX solid rgb(40, 40, 40);
    border-radius: 5px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.6), 10px 10px 70px rgba(0, 0, 0, 0.6);
    z-index: 1;
    
}

.details:hover {
  /* тут я пытался придумать как сделать так, чтобы когда нажимаешь на нескольких карточках на Details каждое окно показывалось со смещением относительно предыдущего
  но не придумал, оставил просто hover :^) */
  transform:  translate(0, -5px); 
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* button {
    border: 1px solid #63a0f5;
    border-radius: 5px;
    padding: 10px 15px;
    background-color: #63a0f5;
    color: #ffffff;
  } */


</style>