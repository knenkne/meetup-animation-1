import React from 'react'

import {
    Wrapper, TextBlock, BlockImage
} from './template.style'
import designImage from './01-design.png'

const Design = () => (
    <Wrapper image="./01-design.png">
        <BlockImage src={designImage} alt="" />
        <TextBlock>
            Здесь скоро будет город-сад<br />
            И рожь взойдет, заколосится<br />
            И компонентов стройный ряд<br />
            В дизайн-гайдах он воплотится<br />
        </TextBlock>
    </Wrapper>
)

export default Design
