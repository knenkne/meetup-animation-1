import React from 'react'

import {
    Wrapper, TextBlock, BlockImage
} from './template.style'

import designImage from './02-develop.png'

const Develop = () => (
    <Wrapper image="./01-design.png">
        <BlockImage src={designImage} alt=""/>
        <TextBlock>
            Чык-чырык!
        </TextBlock>
    </Wrapper>
)

export default Develop
