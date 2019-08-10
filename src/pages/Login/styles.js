import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
`;

export const Input = styled.input`
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 48px;
  padding: 0 20px;
  font-size: 16px;
  color: #666;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #999;
  }
  :-ms-input-placeholder {
    color: #999;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  border: 0px;
  border-radius: 4px;
  height: 48px;
  font-size: 16px;
  background: #df4723;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;
