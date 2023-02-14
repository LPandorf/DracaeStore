import styled from 'styled-components';
import Navbar from './childcomponents/Navbar';

export default function Home() {
  return (
    <>
        <Navbar/>
        <Wrapper>
            
        Home
        </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  color: black;
  background-color: crimson;
  top: 0;
  left: 0;
  padding: 20px;
`;
