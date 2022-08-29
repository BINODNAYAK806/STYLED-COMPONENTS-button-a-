// import logo from './logo.svg';
import './App.css';
import styled, { css } from 'styled-components'
// import styled from 'styled-components';

<script src="https://unpkg.com/styled-components/dist/styled-components.min.js"></script>



function App() {


  const Button = styled.button`
  background: blue;
  border-radius: 3px;
  border: 2px solid ;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  
  ${props => props.link && css`
    background: transparent;
    color: blue;
  `}
  ${props => props.primary && css`
    background: transparent;
    color: black;
  `}
  ${props => props.sec && css`
    background: transparent;
    color: black;
     border: 2px dashed black ;
    
  `}
  ${props => props.def && css`
    background: transparent;
    color: black;
     border: 2px solid black ;
    
  `}
`;

const Container = styled.div`
  text-align: center;
`
  return (
    
      <Container>
        <h1>binod</h1>
    <Button>Primary Button</Button>
    <Button def>Default Button</Button>
    <Button sec>sec Button</Button>
    <Button primary>text button</Button>
    
    <Button link>link Button</Button>
    
  </Container>
     
  );
}

export default App;
