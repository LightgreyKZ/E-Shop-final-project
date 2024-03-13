<template>
    <div class="modal-wrapper" v-if="showModal">
        <div class="modal">
            <div class="modal-header">
                <button @click="closeModal">Закрыть</button>
            </div>
            <div class="modal-body">
                <slot></slot>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        showModal: Boolean
    },
    methods: {
        // openModal() {
        //     this.$emit('openModalWindow', this.showModal)
        //     // this.showModal = true;
        // },
        closeModal() {
            this.$emit('close-modal'); // Генерируем событие для родительского компонента
        }
    }
}

</script>

<style scoped>
.modal-wrapper {
    position: fixed;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 200px;
    background-color: #FAFAFF;
    border: 1px solid #ECECEC;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.modal-header button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #DC2840;
}
.modal-body {
  color: black;
}

</style>