import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f92a82;
`;

const AppTitle = styled.h1`
  color: white;
  font-size: 3rem;
`;

const AppSubtitle = styled.h3`
  color: white;
  font-size: 2rem;
`;

const App = () => (
  <Container>
    <AppTitle>Server running in</AppTitle>
    <AppSubtitle>https:localhost:4000/graphql</AppSubtitle>
  </Container>
);

export default App;
