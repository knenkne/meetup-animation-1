export {
    omittere,
    inputMetaOmitter,
    metaOmitter,
    themeKiller,
    experimental,
    deprecate,
    errorAdapterFactory,
    a11yRelocation
} from './hoc'
export {
    handlePreventDefault,
    handleStopPropagation,
    handleSelectAll,

    eventCheckedHandler,
    eventValueHandler,
    disableHandler,
    preventHandler,
    stopPropagationHandler,
    selectAllHandler,

    argsResolver
} from './handlers'
export { pluralize } from './pluralize'
export { scrollToElement } from './scroll-to'
export { formatPhoneNumber } from './format-phone-number'
export { memoizeFuncWithArgs } from './memoize-func-with-args'
export { autoTopCheckByWindow } from './auto-top-check-by-window'
export { getDisplayName } from './get-display-name'
export { mergeTheme } from './merge-theme'
export {
    isTouchable,
    isNotTouchable,
    applyForTouchable,

    isMobile, /* isMobilePlatform */
    isMobilePlatform,
    isDesktopPlatform,

    isDesktopViewport,
    isTabletViewport,
    isPhoneViewport
} from './adaptive'
export { PseudoButton } from './pseudo'
export { getCardIcon } from './get-card-icon'
export { getInvestmentIcon } from './get-ivestments-icon'
export { getMetalIcon } from './get-metal-icon'
export { getTargetIcon } from './get-target-icon'
export { setProjectId } from './set-project-id'
export { parseDirection, makeDirection } from './make-direction'
export { showError } from './show-error'
