export interface AuthType {}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface UserType {
  name: string | null;
  email: string | null;
  image: string | null;
}

export interface TokenType {
  token: string | null;
  refresh: string | null;
}
