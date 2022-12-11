export interface LoginScreenProps {
    getPassword: () => Promise<string>;
    children: JSX.Element
  }