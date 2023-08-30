export function WhatWeDo__Card({imgObject, title, text, link = "#", id}) {
    return(
        <div class={
            "card what-we-do__card" + (Number(id) + 1)
        }>
            <img 
                class="card__img" 
                src={imgObject} 
                alt="cardImg" 
            />
            <h4 class="card__title">
                {title}
            </h4>
            <p class="card__text">
                {text}
            </p>
            <a 
                class="card__link" 
                href={link}
            >
                Learn more&nbsp;&nbsp;&nbsp;&nbsp;→
            </a>
        </div>
    )
}