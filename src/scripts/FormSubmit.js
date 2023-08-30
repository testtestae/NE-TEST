export const FormSubmit = class {
    descriptionErrors = []
    constructor({theUrl, closeModal, }) {
        this.xhr = new XMLHttpRequest();
        this.theUrl = theUrl
        this.closeModal = closeModal
    }

    validate() {
        let result = true
        
        this.form.target.querySelectorAll('input').forEach(input => {
            if (input.type !== "submit") {
                if (input.value.trim().length < 2) {
                    result = false
                    this.descriptionErrors.push(`${input.name}: lenght error`)
                    input.parentNode.classList.add('form__elem-error')
                } else {
                    input.parentNode.classList.remove('form__elem-error')
                    if (input.type === "email") {
                        const email  = input.value.replace(/\s+/g, "")
                        let emailValidateStatus = false
                        if (email.includes("@")) {
                            if(email.split("@")[0].length > 1){
                                if (email?.split("@")[1]?.includes(".")) {
                                    if (
                                        !(email?.split("@")[1]?.split(".")[1].length < 1
                                        || email?.split("@")[1]?.split(".")[0].length < 1)
                                    ) {
                                        emailValidateStatus = true
                                    } else {
                                        this.descriptionErrors.push('Incorrected email')
                                    }
                                }
                            }
                        }
                        if (emailValidateStatus) {
                            input.parentNode.classList.remove('form__elem-error')
                        } else {
                            input.parentNode.classList.add('form__elem-error')
                            result = false
                        }
                    }
                }
            }
        });

        return result
    }

    submit (form = this.form) {
        const {xhr, theUrl} = this
            xhr.open("POST", theUrl)
            xhr.onreadystatechange = ()=>{
                if(xhr.readyState == 4) {
                    if (xhr.status  === 404) {
                        window.formStatus = {
                            "status": false,
                            "description": `Error 404`
                        }
                        this.descriptionErrors.push('Network error (404)')
                        return(
                            {
                                "status": false,
                                "description": `Error 404`
                            }
                        )
                    }
                }
            }

            let sendObject = {}

            this.form.target.querySelectorAll('input').forEach(input => {
                if (input.type !== "submit") {
                    sendObject[input.name] = input.value
                }
            })

            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
            xhr.send(JSON.stringify(sendObject))
            xhr.onload = function() {
                if (xhr.status != 200) {
                    const currentStatus = {
                        "status": false,
                        "description": `Error ${xhr.status}: ${xhr.statusText}`
                    }
                    this.descriptionErrors.push(`Network error (${xhr.status}: ${xhr.statusText}`)
                    return( currentStatus );
                } else { 
                    const currentStatus = {
                        "status": true,
                        "description": `Your message successfully sent`
                    }
                    return(currentStatus)
                }
            }
    }

    sendForm(form) {
        this.form = form;
        if(this.validate()){
            // const submit = this.submit()
            
            if(this.descriptionErrors.length <= 0){
                window.modalControl.closeModal()
                window.openPopup = true
                const currentStatus = {
                    "status": true,
                    "description": "Form send."
                }
                window.formStatus = currentStatus
                return (currentStatus)
            } else {
                window.modalControl.closeModal()
                window.openPopup = true
                const currentStatus = {
                    "status": false,
                    "description": `Form send error. ${this.descriptionErrors.toString()}`
                }
                window.formStatus = currentStatus
                return (currentStatus)
            }

        }
    }
    
}
