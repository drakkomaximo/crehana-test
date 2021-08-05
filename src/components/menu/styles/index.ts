import styled from 'styled-components';

interface INav {
  open: boolean;
  href?: string;
}

export const StickyContainer = styled.div`
  position: sticky;
  top: 0px;
}
`

export const StyledBurger = styled.div<INav>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 30px;
  right: 20px;
  z-index: 20;
  display: none;
  font-family: 'Zilla Slab';

  @media (max-width: 920px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    margin-top: -5px;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => props.open ? 'white' : 'white'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${(props) => props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props) => props.open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${(props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
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
  padding: 0rem 1rem 0rem 0rem;

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

export const Ul = styled.ul<INav>`
  font-family: 'arial';
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  right: 8px;
  justify-content: flex-end;
  margin-top: 0px;
  align-items: center;
  font-size: 18px;
  height: 90px;
  margin: 0rem 0rem 0rem 1%;

  a {
    text-decoration: none;
    text-transform: none;
    color: white;
    font-weight: 600;
    text-align: center;
    width: 100%;
    heiht: 90px;
    cursor: pointer;

    &:hover {
      color: #749c75;
    }
  }

  li {
    padding: 36px 10px;

    @media (max-width: 920px) {
      padding: 10px 10rem;
    }
  }

  @media (max-width: 920px) {
    flex-flow: column nowrap;
    background-color: #1D1A05;
    transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    right:0;
    height: 100%;
    width: 100vw;
    position:fixed;
    top: 0;
    padding-top: 5.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: normal;

    li {
      color: white;

      &:first-child{
        padding: 1rem;
      }

      &:hover {
/*         color: #e3170a;
        background-color: white; */
      }
    }
  }
`

export const Logo = styled.img`
  margin: 0;
  width: 110px;
  height: 90px;
  object-fit: contain;
`

export const LogoUl = styled.img`
    position: absolute;
    top: 1.5rem;
    left: 4rem;
    display: none;

    @media (max-width: 920px) {
      display:block;
    }

  @media (max-width: 920px) {
    display: flex;
    width: 110px;
    height: 90px;
    object-fit: contain;
    margin-top: -5px;
    margin-left: -30px
  }
`
export const Icon = styled.div`
  width: 100vw;
  height: calc(100vh - 112px);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    height: 150px;
    pointer-events: none;
    object-fit: contain;

    @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin infinite 20s linear;
    }
  }

    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
  }
`