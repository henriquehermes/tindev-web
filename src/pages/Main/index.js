/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import LogoTindev from '../../assets/logo.svg';
import Like from '../../assets/like.svg';
import Dislike from '../../assets/dislike.svg';

import {
  Container,
  Logo,
  UserImg,
  UserName,
  UserDescription,
  Row,
  Button,
  ButtonImg,
  Footer,
  UL,
  LI,
  Empty
} from './styles';

const Main = ({ match }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', { headers: { user: match.params.id } });

      setUsers(response.data);
    }

    loadUsers();
  }, [match.params.id]);

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, { headers: { user: match.params.id } });

    setUsers(users.filter(user => user._id !== id));
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, { headers: { user: match.params.id } });

    setUsers(users.filter(user => user._id !== id));
  }

  return (
    <Container>
      <Link to="/">
        <Logo src={LogoTindev} alt="Tindev" />
      </Link>
      {users.length > 0 ? (
        <UL>
          {users.map(user => (
            <LI key={user._id}>
              <UserImg src={user.avatar} alt={user.name} />
              <Footer>
                <UserName>{user.name}</UserName>
                <UserDescription>{user.bio}</UserDescription>
              </Footer>

              <Row>
                <Button type="button" onClick={() => handleDislike(user._id)}>
                  <ButtonImg src={Dislike} alt="Dislike" />
                </Button>
                <Button type="button" onClick={() => handleLike(user._id)}>
                  <ButtonImg src={Like} alt="Like" />
                </Button>
              </Row>
            </LI>
          ))}
        </UL>
      ) : (
        <Empty>Acabou</Empty>
      )}
    </Container>
  );
};

export default Main;
