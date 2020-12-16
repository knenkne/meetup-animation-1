import { createSelector } from 'reselect'
import { getFeatureOption } from '@sbol/lib.app'

import { DARK_THEME, LIGHT_THEME, SBERBANK1_THEME, PRIVATE_BANKING_THEME, PREMIER_THEME } from '../../../personal-menu/theme-wrapper/theme-colors'
import { managerTypeSelector, isSberbank1, isPrivateBanking, isPremier } from '../profile/manager'
import { checkFeature } from '../../../../utils/check-feature'

const PKG_NAME = 'region.scaffold'

const getDarkTheme = (managerType) => {
    const managerThemeAllowed = checkFeature('AllowManagerThemes', PKG_NAME)
    if (managerThemeAllowed) {
        switch (true) {
            case isSberbank1(managerType):
                return SBERBANK1_THEME
            case isPrivateBanking(managerType):
                return PRIVATE_BANKING_THEME
            case isPremier(managerType):
                return PREMIER_THEME
            default:
                return DARK_THEME
        }
    }

    return DARK_THEME
}

const getTheme = (theme, {
    managerType
}) => {
    switch (theme) {
        case getFeatureOption('ProductRegionThemeEnabled', 'Light', PKG_NAME):
            return LIGHT_THEME
        case getFeatureOption('ProductRegionThemeEnabled', 'Dark', PKG_NAME):
            return getDarkTheme(managerType)
        default:
            return DARK_THEME
    }
}

export const rootThemeSelector = (state) => state.theme

export const themeSelector = createSelector(
    rootThemeSelector,
    managerTypeSelector,
    (theme, managerType) => getTheme(theme, {
        managerType
    })
)
