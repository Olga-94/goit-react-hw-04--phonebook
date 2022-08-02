import styled from 'styled-components'

export const FormContact = styled.form``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  margin-right: 10px;
`;

export const Input = styled.input`
  width: 440px;
  border: ${p => p.theme.borders.normal} lightblue;
  border-radius: ${p => p.theme.radii.normal};
  font-size: 20px;
  &:focus {
    outline: none;
    border: ${p => p.theme.borders.normal} #8a2154;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px auto;
  min-width: 200px;
  padding: 2px 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: ${p => p.theme.radii.normal};
  border-style: none;
  cursor: pointer;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: ${p => p.theme.colors.default};
  background-color: #cf2d7b;
  & svg {
    height: 18px;
    width: 18px;
    margin-right: 10px;
  }
`;
