/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="redux-persist" />
// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
import { colors } from '@styles/theme';

declare module 'styled-components' {
  interface DefaultTheme {
    GRAY_BG: colors.GRAY_BG;
    GRAY_LIGHT: colors.GRAY_LIGHT;
    GRAY_MEDIUM: colors.GRAY_MEDIUM;
    GRAY_DARK: colors.GRAY_DARK;
    NAVY: colors.NAVY;
    BLUE: colors.BLUE;
    RED: colors.RED;
    YELLOW: colors.YELLOW;
    YELLOW_BG: colors.YELLOW_BG;
  }
}
