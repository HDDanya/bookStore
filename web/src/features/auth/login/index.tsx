import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'shared/hooks';
import { setCredentials, useLoginMutation, AuthPopUp } from 'entities/auth';
import { ErrorHandler } from 'shared/lib';
export const Login = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [errMsg, setErrMsg] = React.useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  React.useEffect(() => {
    setErrMsg('');
  }, [email, password]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...userData }));
      setEmail('');
      setPassword('');
      navigate('/books');
    } catch (err) {
      ErrorHandler(err, setErrMsg);
    }
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  return (
    <AuthPopUp
      text="Login"
      email={email}
      password={password}
      errMsg={errMsg}
      handleUserInput={handleUserInput}
      handlePasswordInput={handlePasswordInput}
      handleSubmit={handleSubmit}
      setErrMsg={setErrMsg}
    />
  );
};
