import { Tooltip } from './tooltip'
import { Tip } from './tip'
import { HoverTooltip } from './hover-tooltip'
import { ClickTooltip } from './click-tooltip'
import defaultTheme from './style.css'

Tooltip.Tip = Tip
Tooltip.Hover = HoverTooltip
Tooltip.Click = ClickTooltip
Tooltip.theme = defaultTheme

export { Tooltip }
