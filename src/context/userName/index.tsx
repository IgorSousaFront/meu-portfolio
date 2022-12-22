import { createContext, useMemo, useState } from "react";

export type IUserName = {
  userName: string | undefined;
  setUserName: (name: string) => void;
}

export const UserNameContext = createContext<IUserName>({
  userName: '',
  setUserName: () => {},
});

type ProviderProps = {
  children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
};

export const UserNameProvider:React.FC<ProviderProps> = ({children}) => {
  const [userName, setUserName] = useState<string>('Igor');

  const value = useMemo(
    () => ({userName, setUserName}),
    [userName]
  )

  return(
    <UserNameContext.Provider value={value}>
      {children}
    </UserNameContext.Provider>
  )
}