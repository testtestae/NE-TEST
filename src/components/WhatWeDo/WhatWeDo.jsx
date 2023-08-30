import { WhatWeDo__Card } from './WhatWeDo__Card/WhatWeDo__Card'

import './WhatWeDo.sass'

let currentElement = 0

export function WhatWeDo({elements}) {
    return(
        <section class="what-we-do">
            <h3 class="what-we-do__title">What we do to help our client grow in digital&nbsp;era,</h3>
                        
            <WhatWeDo__Card 
                imgObject={elements[currentElement].img}
                title={elements[currentElement].title}
                text={elements[currentElement].text}
                id={currentElement}
            />

            <WhatWeDo__Card 
                imgObject={elements[1].img}
                title={elements[1].title}
                text={elements[1].text}
                id="1"
            />
            
            <WhatWeDo__Card 
                imgObject={elements[2].img}
                title={elements[2].title}
                text={elements[2].text}
                id="2"
            />
            
        </section>
    )
}