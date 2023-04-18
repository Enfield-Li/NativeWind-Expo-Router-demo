import { NavigatorScreenParams } from "@react-navigation/native";

export {};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList {
      landing: undefined;
      main: undefined;
      sign_in: undefined;
      my_test: undefined;

      auth: undefined;
      "auth/confirm_email": undefined;
      "auth/SSO_login": undefined;
      "auth/sign_in_with_password": undefined;
    }
  }
}
