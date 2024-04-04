import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from 'shared/hooks';
import { selectCurrentToken } from 'entities/auth';

export const RequireAuth = () => {
  const token = useAppSelector(selectCurrentToken);
  const location = useLocation();
  return (
    <>
      {token ? (
        <Outlet />
      ) : (
        <Navigate to={'/'} state={{ from: location }} replace />
      )}
    </>
  );
};
