import styled from 'styled-components';
import { images } from '../images/Images';
import Image from "next/image";

const Login = () => {
  return (
    <LoginContainer>
      <Logo src={images.main_logo} alt="logo" />
      <Character src={images.main_character} alt="Character" />

      <SocialLoginContainer>
        <IconButton aria-label="Naver Login">
          <Image src={images.naver_login} alt="Naver Login" />
        </IconButton>
        <IconButton aria-label="Kakao Login">
          <Image src={images.kakao_login} alt="Kakao Login" />
        </IconButton>
        <IconButton aria-label="Google Login">
          <Image src={images.google_login} alt="Google Login" />
        </IconButton>
      </SocialLoginContainer>

      <ButtonContainer>
        <TextButton>이메일 회원가입</TextButton>
        <span> | </span>
        <TextButton>이메일 로그인</TextButton>
      </ButtonContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.main`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Logo = styled(Image)`
  width: 50%;
  margin: 20px;
`;

const Character = styled(Image)`
  width: 50%;
  margin: 20px;
`;

const SocialLoginContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconButton = styled.button`
  display: flex;
  border: none;
  background: none;
  cursor: pointer;
  margin: 10px;
  width: 60px;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
`;

const ButtonContainer = styled.nav`
  display: flex;
  gap: 5px;
  font-size: 0.9em;
  color: #b0b0b0;
`;

const TextButton = styled.button`
  background-color: white;
  border: none;
  padding: 0;
  font-size: 0.9em;
  color: #b0b0b0;
  cursor: pointer;
`;

