import styled from 'styled-components';

export const Container = styled.div`

   display: grid;
  grid-template-columns: 1fr;
 
  grid-gap: ${p => p.theme.fontSize.m}px;
  padding-bottom: 24px;
  padding-bottom: ${p => p.theme.fontSize.xs*2}px;
`;