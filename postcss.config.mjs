import postcssPresetMantine from "postcss-preset-mantine";
import postcssSimpleVars from "postcss-simple-vars";
// import tailwindcss from "@tailwindcss/postcss"; // ✅ dùng đúng gói mới
// import autoprefixer from "autoprefixer";

const config = {
  plugins: {
    "postcss-preset-mantine": postcssPresetMantine(),
    "postcss-simple-vars": postcssSimpleVars({
      variables: {
        "mantine-breakpoint-xs": "36em",
        "mantine-breakpoint-sm": "48em",
        "mantine-breakpoint-md": "62em",
        "mantine-breakpoint-lg": "75em",
        "mantine-breakpoint-xl": "88em",
      },
    }),
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};

export default config;
