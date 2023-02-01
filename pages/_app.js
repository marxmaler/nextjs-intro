import Layout from "@/components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  //여기서 pageProps는 해당 page component가 getServerSideProps로부터 반환받은 props
  return (
    <Layout>
      <Component {...pageProps}></Component>
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </Layout>
  );
}
