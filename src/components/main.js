import { FormSubmit } from '../scripts/FormSubmit'
import { ModalControl } from '../scripts/ModalControl'
import { Popup } from './Popup/Popup'

const theUrl = './'

window.submitStatus = false
window.openPopup = false

window.formStatus = {
    status: false,
    description: 'Other error'
}

setInterval(() => {
    const popupElement = document.querySelector('.app-container > .popup')
    if (window.openPopup) {
        if (!popupElement) {
            document.querySelector('.app-container').append(Popup())
        } else {
            popupElement.parentNode.removeChild(popupElement)
            document.querySelector('.app-container').append(Popup())
        }
        document.querySelector('.popup').addEventListener('click', () => { window.openPopup = false })
        document.querySelector('.popup__closeBtn').addEventListener('click', () => { window.openPopup = false })
        document.querySelector('.popup__container').addEventListener('click', (event) => { event.stopPropagation() })
    } else {
        popupElement.parentNode.removeChild(popupElement)
        window.formStatus = {
            status: false,
            description: 'Other error'
        }
    }
}, 500)

window.onload = function () {
    const modalElement = document.querySelector('.modal')
    window.modalControl = new ModalControl(modalElement)

    const formSubmit = new FormSubmit({ theUrl })

    document.querySelector('.intersted_to_woek_with_our_team__btn').addEventListener('click', () => { window.modalControl.openModal() })

    document.querySelector('.modal').addEventListener('click', () => { window.modalControl.closeModal() })
    document.querySelector('.modal__closeBtn').addEventListener('click', () => { window.modalControl.closeModal() })
    document.querySelector('.modal__container').addEventListener('click', (event) => { event.stopPropagation() })

    document.querySelector('.form').onsubmit = (e) => {
        e.preventDefault()
        formSubmit.sendForm(e)
    }
}
