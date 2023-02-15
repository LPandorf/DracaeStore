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
  margin-top: 100px;
  color: black;
  background-color: white;
  top: 0;
  left: 0;
  padding: 20px;
`;
