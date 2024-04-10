import { BookCards } from 'features/book';
import { EditBookPopUp, DeleteBook } from 'features/book';

import * as React from 'react';
export const buttonsContext = React.createContext<
  React.ElementType[] | undefined
>(undefined);

export const BookWidget = () => {
  return (
    <>
      <buttonsContext.Provider value={[EditBookPopUp, DeleteBook]}>
        <BookCards />
      </buttonsContext.Provider>
    </>
  );
};
