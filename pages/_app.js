import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { useRouter } from "next/router";
import Sidebar from "../components/admin/admin-sidebar";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showLayout = router.pathname.includes("admin") ? false : true;

  return (
    <>
      {showLayout ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <div className="flex">
          <Sidebar />
          <Component {...pageProps} />
        </div>
      )}
    </>
  );
}

export default MyApp;
