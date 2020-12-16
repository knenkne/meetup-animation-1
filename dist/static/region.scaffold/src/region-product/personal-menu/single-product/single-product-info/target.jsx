import React from 'react'
import { PropTypes } from 'prop-types'
import i18next from 'i18next'

import {
    isTargetOk,
    isTargetStatusLate,
    isTargetStatusOutdated,
} from '../../utils/helpers'
import { ContentRow, Name, Value, CurrencyValue } from '../../partials'
import { WARNING_TEXT, SUCCESS_TEXT, ADDITIONAL } from '../../../style-constants'
import { ProgressBarLine } from '../progress-bar-line'

import {
    ProductInfoStyled
} from './single-product-info.styles'

// eslint-disable-next-line complexity, comment: TODO: разнести по компонентам
export const TargetInfo = ({
    name,
    message = {},
    currency,
    endDate,
    currentSum,
    progressWidth,
    progressColor,
    progressStatus = null
}) => (
    <ProductInfoStyled>
        <ContentRow main>
            {name && (
                <Name content={name} />
            )}
            { currentSum &&
                <Value
                    textStyle={
                        (isTargetStatusLate(progressStatus) && WARNING_TEXT) ||
                        (isTargetOk(progressStatus) && SUCCESS_TEXT)
                    }
                >
                    <CurrencyValue sum={currentSum} />
                </Value>
            }
        </ContentRow>
        <ContentRow messageStyle={ADDITIONAL}>
            { endDate &&
                <Name
                    textStyle={isTargetStatusOutdated(progressStatus) && WARNING_TEXT}
                    content={i18next.t('target.before', { endDate })}
                />
            }
            {currency && (
                <Value>
                    <CurrencyValue sum={currency} />
                </Value>
            )}
        </ContentRow>
        {
            progressWidth &&
                <ProgressBarLine
                    progressWidth={progressWidth}
                    progressColor={progressColor}
                />
        }
        { message.text &&
            <ContentRow messageStyle={message.style || ADDITIONAL}>
                {i18next.t(message.text)}
            </ContentRow>
        }
    </ProductInfoStyled>
)

TargetInfo.displayName = 'TargetInfo'

TargetInfo.defaultProps = {
    message: {},
    currency: null,
    endDate: null,
    currentSum: null,
    progressWidth: '',
    progressColor: '',
    progressStatus: null
}

TargetInfo.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.object,
    currency: PropTypes.object,
    endDate: PropTypes.string,
    currentSum: PropTypes.object,
    progressWidth: PropTypes.string,
    progressColor: PropTypes.string,
    progressStatus: PropTypes.string
}
