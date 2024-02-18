import { HomeStyled, Title, SubTitle, HomeBtn } from "./Home.styled";

const Home = () => {
  return (
    <HomeStyled>
      <div className="home-content">
        <Title>Car Rental App</Title>
        <SubTitle>Find the perfect car for you</SubTitle>
        <div>
          <HomeBtn to="/catalog">Get Started</HomeBtn>
        </div>
      </div>
    </HomeStyled>
  );
};

export default Home;
