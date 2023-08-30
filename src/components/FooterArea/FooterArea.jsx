import './FooterArea.sass'

import { FooterArea__PreFooter } from './FooterArea__PreFooter/FooterArea__PreFooter'
import { FooterArea__PreboundingContainer } from './FooterArea__PreboundingContainer/FooterArea__PreboundingContainer'

export function FooterArea() {
    return(
        <div class="footer_area">
          <FooterArea__PreboundingContainer />
          <FooterArea__PreFooter />
        </div>
    )
}

