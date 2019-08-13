import React, { useState } from 'react';

import {
 Container, Logo, Form, Input, Button 
} from './styles';
import LogoTindev from '../../assets/logo.svg';
import api from '../../services/api';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      username
    });

    const { _id } = response.data;
    if (_id) history.push(`/dev/${_id}`);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Logo src={LogoTindev} alt="Tindev" />
        <Input
          placeholder="Adicione seu usuario do Github"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
};

export default Login;
