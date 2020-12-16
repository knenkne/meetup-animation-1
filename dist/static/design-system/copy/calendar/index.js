import { DatePicker } from './date-picker/date-picker'
import { TimeInput } from './time-input/time-input'
import { YearPicker } from './year-picker/year-picker'
import { MonthPicker } from './month-picker/month-picker'
import { QuarterPicker } from './quarter-picker/quarter-picker'
import { RangePicker } from './range-picker/range-picker'
import { utils } from './utils'
import { constants } from './constants'
import { isMobileEnabled, enableMobile } from './mobile-enabler'
import style from './style.css'

const Calendar = DatePicker
Calendar.Time = () => void 0
Calendar.Time.displayName = 'Calendar.Time'
Calendar.Time.Input = TimeInput
Calendar.Year = YearPicker
Calendar.MonthYear = MonthPicker
Calendar.Quarter = QuarterPicker
Calendar.Range = RangePicker
Calendar.utils = utils
Calendar.constants = constants
Calendar.theme = style
Calendar.displayName = 'Calendar'
Calendar.isMobileEnabled = isMobileEnabled
Calendar.enableMobile = enableMobile

export { Calendar }
