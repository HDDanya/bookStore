import { useLogoutMutation } from 'entities/auth';
import { useAppDispatch } from 'shared/hooks';
import { logOut } from 'entities/auth';
import { Button } from 'antd';
export const LogOut = () => {
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();
  const handleSubmit = async () => {
    try {
      await logout().unwrap();
      dispatch(logOut());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button type="link" onClick={handleSubmit}>
      LOGOUT
    </Button>
  );
};
