import React from 'react';

import {
 Container, Logo, Form, Input, Button 
} from './styles';
import LogoTindev from '../../assets/logo.svg';

const Login = () => (
  <Container>
    <Form>
      <Logo src={LogoTindev} alt="Tindev" />
      <Input placeholder="Adicione seu usuario do Github" />
      <Button type="submit">Enviar</Button>
    </Form>
  </Container>
);

export default Login;
