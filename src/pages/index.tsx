import type { GetServerSideProps, NextPage } from 'next';

import { useRouter } from 'next/router';
import { useMemoizedFn } from 'ahooks';

const Home: NextPage = (props) => {
  const router = useRouter();

  console.log(props);

  const handleLogin = useMemoizedFn(() => {
    router.push('/api/auth/signin');
  });

  return (
    <button onClick={handleLogin}>
      login
    </button>
  );
};

const getServerSideProps: GetServerSideProps = async (context) => {
  return (await import('#/api/user')).props(context);
};

export { getServerSideProps };
export default Home;
