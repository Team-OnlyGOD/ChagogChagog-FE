import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Layout from "../Layout";
import ThemeProvider from "../ThemeProvider";
import { ToastContainer } from "react-toastify";

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ToastContainer limit={3} position="top-right" autoClose={3000} />
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
