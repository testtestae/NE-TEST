export const ModalControl = class {
    constructor(modalElement){
        this.modal = modalElement
    }
    closeModal() {
        this.modal.style.display="none"
        document.querySelector(".modal #name").value = ""
        document.querySelector(".modal #email").value = ""
        document.querySelector(".modal #message").value = ""
        document.body.style.overflowY = ''
    }
    openModal() {
        this.modal.style.display="flex";
        document.body.style.overflowY = 'hidden'
    }
}