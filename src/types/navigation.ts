export type RootStackParamList = {
    Home: undefined;
    Map: undefined;
    Games: undefined;
  };
  
  declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }