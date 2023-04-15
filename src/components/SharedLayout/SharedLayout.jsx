import React from 'react';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/learn">Learn</Link>
          <Link to="/vocabulary">Vocabulary</Link>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
}
