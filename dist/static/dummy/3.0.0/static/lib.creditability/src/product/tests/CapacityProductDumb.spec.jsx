import React from 'react'
import { shallow } from 'enzyme'
import { Link } from '@sbol/lib.ui'

import { CapacityProductDumb, getPathImage } from '../CapacityProductDumb'
import { STATUS } from '../status'

const version = process.env.VERSION

describe('<CapacityProduct />', () => {
    describe('<CapacityProductDumb />', () => {
        it('should proper select background image', () => {
            expect(getPathImage(STATUS.LC_ACCEPTED)).toEqual('/common//img/statuses/female-done')
            expect(getPathImage(STATUS.LC_CALCULATION_IN_PROGRESS)).toEqual('/common//img/statuses/female-waiting')
            expect(getPathImage(STATUS.LC_CALCULATION_TIMEOUT_ERROR)).toEqual('/common//img/statuses/female-error')
            expect(getPathImage(STATUS.LC_DECLINED)).toEqual('/common//img/statuses/female-error')
            expect(getPathImage(STATUS.LC_ERROR)).toEqual(`/lib.creditability/${version}/assets/images/ruler`)
            expect(getPathImage(STATUS.LC_EXPIRED)).toEqual('/common//img/statuses/female-info')
            expect(getPathImage(STATUS.LC_NEED_MORE_INFORMATION)).toEqual('/common//img/statuses/female-info')
            expect(getPathImage(STATUS.LC_NOT_CALCULATED)).toEqual(`/lib.creditability/${version}/assets/images/ruler`)
            expect(getPathImage('SOME_STRANGE_STATUS')).toEqual(`/lib.creditability/${version}/assets/images/ruler`)
        })

        it('should renders correctly with scale and button', () => {
            const onClickSpy = jest.fn()
            const wrapper = shallow(<CapacityProductDumb
                status="LC_ACCEPTED"
                system="Reactive"
                locales={{
                    title: 'Кредитный потенциал рассчитан',
                    description: 'Узнать какая сумма вам одобрена',
                    button: 'Узнать'
                }}
                parts={{
                    available: 2000,
                    used: 500,
                    reserved: 250
                }}
                link="/loans/creditability"
                onButtonClick={onClickSpy}
            />)

            const button = wrapper.find(Link)
            button.simulate('click')
            expect(wrapper).toMatchSnapshot()
            expect(onClickSpy).toHaveBeenCalled()
        })

        it('should renders correctly without scale and button', () => {
            const wrapper = shallow(<CapacityProductDumb
                status="LC_DECLINED"
                locales={{
                    title: 'Кредитный потенциал рассчитан',
                    description: 'Узнать результат расчёта'
                }}
                link="/loans/creditability"
                onButtonClick={void 0}
            />)

            expect(wrapper).toMatchSnapshot()
        })
    })
})
