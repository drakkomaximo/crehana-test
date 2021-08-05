import styled from 'styled-components'

export const ModalContainer = styled.div<{
  activeModal: boolean
  backgroundModal?: string
}>`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: ${({ backgroundModal }): string =>
    backgroundModal ? backgroundModal : 'rgb(8 7 7 / 80%)'};
  transition: all 500ms ease 0s;
  ${({ activeModal }): string =>
    activeModal
      ? `opacity: 1;
  visibility: visible;`
      : `opacity: 0;
  visibility: hidden;`}
/*   z-index: 2000000000000000000000000000000000000000000; */
`

export const ModalContainerContent = styled.div<{
  modalContainerContentSettings?: string
}>`
  background-color: var(--light);
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
  border-radius: 8px;
  display: flex;
  width: 90%;
  min-width: 17rem;
  height: auto;
  min-height: 12rem;
  margin: auto;
  transition: all 500ms ease 0s;
  flex-direction: column;
  place-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  background: white;
  max-width: 30rem;
  ${({ modalContainerContentSettings }): string =>
    modalContainerContentSettings ? modalContainerContentSettings : ''};
`

export const RewardButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  place-content: center;
  align-items: center;
  width: 100%;
}
`
