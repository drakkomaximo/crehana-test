import styled from 'styled-components';

export const SelectStyled = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 1rem;
  width: 18rem;
  border-radius: 12px;
  margin: 0rem 1rem;
  font-size: 20px;
  text-align-last: center;
  font-size: 20px;
  font-weight: 700;
  color: #4B22F4;

  @media (max-width: 960px) {
    margin: 0rem 1rem 1rem;
  }
`

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const OptionStyled = styled.option`
  text-align: center;
`

export const TitleStyled = styled.h1`
  text-align: center;
  font-size: 20px;
  color: white;
  margin: 0rem 0rem 1rem;
  width: 100vw;
`