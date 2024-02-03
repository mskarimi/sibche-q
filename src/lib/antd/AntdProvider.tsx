import {ConfigProvider, ThemeConfig} from "antd";
import {PropsWithChildren} from "react";
import {fontFamily} from "tailwindcss/defaultTheme";
import {iranSans} from "@sibche-q/assets/fonts/iranSansFont";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#2196f3",
    borderRadius: 10,
    fontFamily: `var(${iranSans.variable}), ${fontFamily.sans.join(", ")}`,
    colorText: "#252a3c",
    colorLinkActive: "#2196f3",
    colorLinkHover: "#2196f3",
  },
};

function AntdProvider({children}: PropsWithChildren) {
  return (
    <ConfigProvider direction="rtl" theme={theme}>
      {children}
    </ConfigProvider>
  );
}

export default AntdProvider;
