import './Popup.sass'
import closeIcon from '../../images/close.svg'
import okIcon from '../../images/ok.svg'

export function Popup(){
    return(
        <div 
            class="popup"
        >
            <div class="popup__container">
                <div class="popup__closeBtn">
                    <img src={closeIcon} alt="" />
                </div>
                <div class="form">
                    <div 
                        class={`popup__status-icon ${window.formStatus.status ? 'background-good' : 'backgroudn-error'}`}
                    >
                        <img 
                            src={ window.formStatus.status ? okIcon : closeIcon } 
                            alt="ok" 
                        />
                    </div>
                    <div class="popup__payload">
                        <h2>{ window.formStatus.status?"All Good!":"Error!" }</h2>
                        <p>{ window.formStatus.description }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}