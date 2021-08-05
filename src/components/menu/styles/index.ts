import styled from 'styled-components';

export const StickyContainer = styled.div`
  position: sticky;
  top: 0px;
}
`

export const InputStyled = styled.input`
  width: 100vw;
  border: none;
  padding: 0.5rem;
  color: #4B22F4;
  font-weight: 700;
  font-size: 15px;
  text-align: right;
  
  &:focus{
    outline: 1px solid #4B22F4;
    border-radius: 10px;
  }


  @media (min-width: 613px) {
    margin-right: 1rem;
  }
}
`

export const ButtonStyled = styled.button`
  width: 100vw;
  background: transparent;
  border-radius: 13px;
  border: 1px solid #4B22F4;
  color: #4B22F4;
  

  @media (min-width: 426px) {
    width: 50%;
  }

  @media (min-width: 613px) {
    width: 80%;
    font-size: 15px
  }
}
`

export const Nav = styled.nav`
  font-family: 'Zilla Slab';
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #FFFFFF;
  align-items: center;
  position: sticky;
  top: 0;

  @media (max-width: 678px) {
    width: 100vw;
  }

  @media (min-width: 920px) {
    padding: 0rem;
  }

  span {
    font-size: 30px;
    @media only screen and (max-width: 600px) {
      font-size: 20px;
      :nth-child(2) {
        font-size: 16px !important;
        margin-top: 0px !important;
      }
    }
  }

`

export const Logo = styled.img`
  margin: 0;
  width: 110px;
  height: 90px;
  object-fit: contain;
  padding-left: 0.5rem;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  padding-right: 1rem;

  @media (max-width: 425px) {
    width: 11rem;
  }

  @media (min-width: 426px) {
    width: 16rem;
  }

  @media (min-width: 613px) {
    width: 27rem;
    flex-wrap: nowrap;
  }
}
`