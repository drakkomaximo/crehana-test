import { FC, ReactElement } from 'react'

import { ModalContainer, ModalContainerContent } from './styles'
/**
 * @param props props
 * @param props.openModal openModal
 * @param props.modalContainerContentSettings modalContainerContentSettings
 * @param props.children setOpenModal
 * @returns component
 */
export const SimpleContainerModal: FC<{
  openModal?: boolean
  modalContainerContentSettings?: string
  children: ReactElement
}> = ({ children, openModal = false, modalContainerContentSettings }) => {
  return (
    <ModalContainer
      activeModal={openModal}
    >
      <ModalContainerContent
        modalContainerContentSettings={modalContainerContentSettings}
      >
        {children}
      </ModalContainerContent>
    </ModalContainer>
  )
}
