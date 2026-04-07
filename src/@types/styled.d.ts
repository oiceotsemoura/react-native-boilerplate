import 'styled-components/native';

import {
  borderRadii,
  fontSizes,
  palette,
  spacing,
  fontWeights,
} from '@theme/index';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    spacing: typeof spacing;
    colors: typeof palette;
    borderRadius: typeof borderRadii;
    fontSizes: typeof fontSizes;
    fontWeights: typeof fontWeights;
  }
}
