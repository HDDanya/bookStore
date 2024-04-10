import { ErrorReponce } from 'shared/types';
export function ErrorHandler(
  err: unknown,
  setErrMsg: React.Dispatch<React.SetStateAction<string>>
) {
  if (!(err as ErrorReponce).data) {
    setErrMsg('No Server Response');
  } else if ((err as ErrorReponce).status === 400) {
    setErrMsg((err as ErrorReponce)?.data?.messege);
  } else if ((err as ErrorReponce).status === 401) {
    setErrMsg((err as ErrorReponce)?.data?.messege);
  } else {
    setErrMsg('Registartion Failed');
  }
}
