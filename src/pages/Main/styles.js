import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
`;

export const UL = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 230px);
  grid-gap: 30px;
  margin-top: 50px;
  overflow: hidden;
`;

export const LI = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

export const Footer = styled.footer`
  flex: 1;
  background: #fff;
  border: 1px solid #eee;
  border-top: 0;
  padding: 15px 20px;
  text-align: left;
  border-radius: 0px 0px 5px 5px;
`;

export const Logo = styled.img``;

export const UserImg = styled.img`
  max-width: 99.75%;
  border-radius: 5px 5px 0px 0px;
`;

export const UserName = styled.strong`
  font-size: 16px;
  color: #333;
`;

export const UserDescription = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #999;
  margin-top: 5px;
`;

export const Row = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 109px);
  grid-gap: 10px;
`;

export const Button = styled.button`
  height: 50px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
  border: 0;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;

  &:hover img {
    transform: translateY(-5px);
    transition: all 0.2s;
  }
`;

export const ButtonImg = styled.img``;

export const Empty = styled.p`
  font-size: 32px;
  color: #999;
  margin-top: 300px;
`;
