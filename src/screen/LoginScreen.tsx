import React from "react";

export interface LoginScreenProps {
  username?: string;
  password: string;
}

const LoginScreen = ({ username, password }: LoginScreenProps) => {
  return (
    <div>
      LoginScreen
    </div>
  );
};

export default LoginScreen;
