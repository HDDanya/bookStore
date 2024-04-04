import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// const MainPage = lazy(() => import('./Main'));
import { Public } from './Public';
import { LayoutApp } from './Layout';
import { RequireAuth } from 'features/auth';

const BookPage = lazy(() => import('./Books'));
export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutApp />}>
        <Route index element={<Public />} />
        <Route element={<RequireAuth />}>
          <Route path="books" element={<BookPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
