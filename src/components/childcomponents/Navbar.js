import styled from "styled-components";
import logo from "../../assets/logo.png";

export default function Navbar(){
    return (
        <Wrapper>
            <Left>
                <ion-icon name="menu"></ion-icon>
                <Margin/>
                <SearchBar>
                    <ion-icon name="search-outline"></ion-icon>
                    <Margin/>
                    Buscar
                </SearchBar>
            </Left>
            <Logo>
                <img src={logo} alt="Dracae" />
            </Logo>
            <Right>
                <ion-icon name="person"></ion-icon>
                <Margin/>
                <Basket><ion-icon name="basket"></ion-icon></Basket>
            </Right>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    color: black;
    background-color: white;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    border-bottom: 2px solid black;
    position: fixed;
    width: 100%;
`;

const SearchBar=styled.div`
    color: black;
    border: 2px solid black;
    border-radius: 20px;
    width: 220px;
    padding: 5px;
    font-size: 20px;
    height: 25px;
    display: flex;
    @media only screen and (max-width: 600px) {
        width: 100px;
        display: flex;
    }
`;

const Left=styled.div`
    margin-left: 30px;
    margin-top: 10px;
    display: flex;
    width: 270px;
    justify-content: flex-start;
    font-size: 40px;
`;

const Logo=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & img{
        height: 100px;
    }
    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

const Right=styled.div`
    margin-right: 30px;
    margin-top: 10px;
    display: flex;
    width: 270px;
    justify-content: flex-end;
    font-size: 35px;
`;

const Basket=styled.div`
    font-size:40px;
`;

const Margin= styled.div`
    margin-right: 10px;
`;