import type {Metadata} from "next";
import {PropsWithChildren} from "react";
import {iranSans} from "@sibche-q/assets/fonts/iranSansFont";
import StyledComponentsRegistry from "@sibche-q/lib/antd/AntdRegistry";
import AntdProvider from "@sibche-q/lib/antd/AntdProvider";
import "@sibche-q/app/globals.scss";
import ReactQueryProvider from "@sibche-q/lib/reactQuery/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Sibche q",
  description: "Sibche q",
};

const className = `template antialiased ${iranSans.variable} font-IranSans bg-mainBg text-base text-textPrimary`;

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="fa" dir="rtl">
      <body className={className}>
        <div className="flex flex-col h-full">
          <ReactQueryProvider>
            <StyledComponentsRegistry>
              <AntdProvider>{children}</AntdProvider>
            </StyledComponentsRegistry>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
