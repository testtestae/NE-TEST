import './main.sass'

import { Hero } from './Hero/Hero'
import { WhatWeDo } from './WhatWeDo/WhatWeDo'
import { FooterArea } from './FooterArea/FooterArea'
import { Modal } from './Modal/Modal'

import './main'

import card__bringTechnology from '../images/card__Bring Technology.svg'
import card__MakeYourBusiness from '../images/card__Make Your business.svg'
import card__BuildYourDigitalProduct from '../images/card__Build Your Digital Product.svg'

let whatWeDoCards = [
    {
        "title": "Bring Technology To Your Comfrotable Home"
        ,"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ,"img":  card__bringTechnology
    }
    ,{
        "title": "Make Your business To Be Better Famous In Internet"
        ,"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ,"img":  card__MakeYourBusiness
    }
    ,{
        "title": "Build Your Digital Product That Suitable For Your Need"
        ,"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ,"img":  card__BuildYourDigitalProduct
    }
]



export const MainTemplate = (
    <div class='app-container'>
        <Hero />
        <WhatWeDo elements={whatWeDoCards} />
        <FooterArea />
        <Modal />
    </div>
)