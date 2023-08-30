import './Modal.sass'
import closeIcon from '../../images/close.svg'

export function Modal(){
    return(
        <div class="modal">
            <div class="modal__container">
                <div class="modal__closeBtn">
                    <img src={closeIcon} alt="" />
                </div>
                <h6>SEND US MESSAGE</h6>
                <form class="form">
                    <div class="form__elem">
                        <label for="name">
                            <p>Full Name</p>
                        </label>
                        <input type="text" name="name" id="name" placeholder="Your Name" formnovalidate=""/>
                    </div>
                    <div class="form__elem">
                        <label for="email">
                            <p>Email</p>
                        </label>
                        <input type="email" name="email" id="email" placeholder="Your Email" formnovalidate=""/>
                    </div>
                    <div class="form__elem">
                        <label for="message">
                            <p>Message</p>
                        </label>
                        <input type="text" name="message" id="message" placeholder="Your Message" formnovalidate=""/>
                    </div>
                    <div class="form__submit"> 
                        <input type="submit" class="button" value="SUBMIT" />
                    </div>
                </form>
            </div>
        </div>
    )
}