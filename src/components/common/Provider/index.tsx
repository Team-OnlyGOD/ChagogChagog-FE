import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Layout from "../Layout";
import ThemeProvider from "../ThemeProvider";

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <ThemeProvider>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Provider;
