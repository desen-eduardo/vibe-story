import React, { createContext, useState, ReactNode } from 'react';
import { Alert } from 'react-native';

type CartContextType = {
  count: number;
  addItem: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);


type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider(props: CartProviderProps) {
  const [count, setCount] = useState<number>(0);

  function addItem() {
    Alert.alert('Sucesso', 'Item adicionado ao seu carrinho com sucesso.');
    setCount((prev) => prev + 1);
  }

  return (
    <CartContext.Provider value={{ count, addItem }}>
      {props.children}
    </CartContext.Provider>
  );
}