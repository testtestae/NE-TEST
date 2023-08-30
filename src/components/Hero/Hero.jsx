import illustration from '../../images/illustration.svg'
import './Hero.sass'

export function Hero () {
    return(
        <section class="hero">
            <div class="hero__text">
                    <h1>New&nbsp;Automation <br/>Tool&nbsp;for&nbsp;Your&nbsp;Home</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.</p>
                    <button>See Our Project</button>
            </div>
            <div class="hero__illustration">
                    <img src={ illustration } alt="triangle with equal sides"/>
            </div>
        </section>
    )
}