import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Public } from './Public';
import { LayoutApp } from './Layout';
import { RequireAuth } from 'features/auth';


const BookPage = lazy(() => import('./Books'));
const  BasketPage  = lazy(() => import('./Basket'));
export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutApp />}>
        <Route index element={<Public />} />
        <Route element={<RequireAuth />}>
          <Route path="books" element={<BookPage />} />
          <Route path="basket" element={<BasketPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
