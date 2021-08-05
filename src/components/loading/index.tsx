import { FC } from 'react'
import ReactLoading from "react-loading";
import { LoadingContainer, LoadingTitle } from './styles'

const Loading: FC = () => {
    return (
        <LoadingContainer>
            <LoadingTitle>
            Procesando...
        </LoadingTitle>
            <ReactLoading 
                type={'spinningBubbles'} 
                color="rgb(75,34,244)" 
                height={'200px'} width={'200px'}
                />
          </LoadingContainer>
    )
}

export default Loading
