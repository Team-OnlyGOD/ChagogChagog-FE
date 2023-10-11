import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Layout from "../Layout";

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Layout>{children}</Layout>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Provider;
