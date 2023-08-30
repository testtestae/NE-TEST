import './main.sass'

/* eslint-disable no-unused-vars */
import { Hero } from './Hero/Hero'
import { WhatWeDo } from './WhatWeDo/WhatWeDo'
import { FooterArea } from './FooterArea/FooterArea'
import { Modal } from './Modal/Modal'
/* eslint-enable no-unused-vars */

import './main'

import bringTechnologyCardIcon from '../images/card__Bring Technology.svg'
import makeYourBusinessCardIcon from '../images/card__Make Your business.svg'
import buildYourDigitalProductCardIcon from '../images/card__Build Your Digital Product.svg'

const whatWeDoCards = [
    {
        title: 'Bring Technology To Your Comfrotable Home',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: bringTechnologyCardIcon
    },
    {
        title: 'Make Your business To Be Better Famous In Internet',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: makeYourBusinessCardIcon
    },
    {
        title: 'Build Your Digital Product That Suitable For Your Need',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: buildYourDigitalProductCardIcon
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
