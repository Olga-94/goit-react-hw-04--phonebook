import styled from 'styled-components';

export const ContactsList= styled.ul`
  display: flex;
  flex-direction: column;
  width: 450px ;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  & svg {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius:  ${p => p.theme.radii.normal};
  border-style: none;
  cursor: pointer;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color:  ${p => p.theme.colors.default};
  background: ${p => p.theme.colors.backgroundButton};
  margin-left: auto;
  
  & svg {
    color: ${p => p.theme.colors.default};
    height: 18px;
    width: 18px;
    margin-right: 10px;
  }
`;
