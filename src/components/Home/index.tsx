import useTokenCheck from "../../hooks/Auth/useTokenCheck";

const Home = () => {
  useTokenCheck();
  return <div>home</div>;
};

export default Home;
