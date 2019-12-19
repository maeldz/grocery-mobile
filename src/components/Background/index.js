import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

import bg from '../../assets/bg.png';

export default styled(ImageBackground).attrs({
  source: bg,
})`
  width: 100%;
  height: 100%;
`;
