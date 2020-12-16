import styled from '@emotion/styled'

import { focusStyles } from '../../../style-constants'

export const ManagerWrapperStyled = styled.ul`
    padding: 0;
    list-style: none;
    width: 240px;
    border: 8px;
    overflow: hidden;
    margin: 12px auto 0;
    ${({ theme }) => `
         color: ${theme.mainFontColor};
    `}
`

export const ManagerHeaderStyled = styled.div`
    padding: 4px 8px;
    width: 100%;
    text-align: center;
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: -0.3px;
    cursor: pointer;
    margin: 0;
    ${({ theme }) => `
        background: ${theme.managerHeaderBg};
        &:hover {
            background: ${theme.managerHeaderBgOnHover};
        }
        
    `}
`

export const ManageHeaderInnerStyled = styled.button`
    margin: 0;
    background: none;
    width: 100%;
    padding: 4px;
    cursor: pointer;
    ${({ theme }) => `
        color: ${theme.mainFontColor};
        ${focusStyles(theme)};
    `}
`

export const ManagerContainerStyled = styled.div`
    padding: 16px;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${({ theme }) => `
        background: ${theme.managerContainerBg}
    `}
`

export const PersonalManagerCardStyled = styled.li`
  ${ManagerHeaderStyled} {
    border-radius: 8px 8px 0 0;
  }
  ${ManagerContainerStyled} {
    border-radius: 0;
  }
  &:last-child {
    ${ManagerHeaderStyled} {
        ${({ isClosed }) => isClosed && `
            border-radius: 8px;
        `}
    }
    ${ManagerContainerStyled} {
      border-radius: 0 0 8px 8px;
    }
  }
  &:nth-of-type(2) {
    ${({ theme }) => `
        border-top: 1px solid ${theme.managerBlockDivider};
    `}
  }
  &:nth-of-type(2) {
    ${ManagerHeaderStyled} {
      border-radius: 0;
      ${({ isClosed }) => isClosed && `
        border-radius: 0 0 8px 8px;
      `}
    }
  }
`

export const ManagerContactStyled = styled.a`
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: -0.3px;
    text-decoration: none;
    display: block;

    &:not(:last-child) {
        margin-bottom: 4px;
    }
    
    ${({ theme }) => `
        color: ${theme.mainFontColor}
    `}
`

export const ManagerStyled = styled.div`
    display: flex;
    font-weight: 600;
    justify-content: space-between;
`

export const ManagerContactsBlockStyled = styled.div`
    margin-top: 16px;
`
