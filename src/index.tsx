import { NativeModules } from 'react-native';

type ZhoupuUiType = {
  multiply(a: number, b: number): Promise<number>;
};

const { ZhoupuUi } = NativeModules;

export default ZhoupuUi as ZhoupuUiType;
