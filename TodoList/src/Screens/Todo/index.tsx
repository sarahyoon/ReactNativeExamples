import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View
`
flex:1;
`;

interface Props{}

const Todo = ({} : Props) => {
    return (
        <Container>
            <TodoListView/>
            <AddTodo />
        </Container>
    );
};

export default Todo;