
import React from 'react';
import Styled from 'styled-components/native';
import Counter from './Screens/Counter';

const Container = Styled.View
`
flex:1;
background-color:#EEE;
`;

const App= () => {
  return (
    <Container>
      <Counter title ="This is a counter App" initValue={0}/>
    </Container>
  );
};

export default App;
