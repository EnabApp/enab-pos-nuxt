import { presetAnu, presetIconExtraProperties } from "anu-vue";
import { presetThemeDefault } from "@anu-vue/preset-theme-default";
import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  presetAttributify,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: presetIconExtraProperties,
    }),

    presetAttributify(),

    // anu-vue preset
    presetAnu(),

    // default theme preset
    presetThemeDefault(),

    presetWebFonts({
      provider: "google",
      fonts: {
        sans: ["Tajawal:200,300,400,500,600,700,800,900"],
      },
    }),
  ],

  preflights: [
    {
      getCSS: ({ theme }) => `
          * {
            font-family: ${theme["fontFamily"]["sans"]};
          }
        `,
    },
  ],

  include: [/.*\/anu-vue\.js(.*)?$/, "./**/*.vue", "./**/*.md"],

  theme: {
    colors: {
      tertiary: "#615F5B",
    },
  },
});
