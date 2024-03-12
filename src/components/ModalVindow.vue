<template>
    <div class="modal-wrapper">
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
    data() {
        return {
            showModal: false
        };
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        }
    }
}

</script>

<style scoped>
.modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 500px;
    height: 300px;
    background-color: #FAFAFF;
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