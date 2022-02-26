import Layout from "/components/Layout";
import ResourceHighlight from "/components/ResourceHighlight";
import Newsletter from "/components/Newsletter";
import ResourceList from "/components/ResourceList";
import Footer from "/components/Footer";

const HomePage = ({ resources }) => {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0, 2)} />
      <Newsletter />
      <ResourceList resources={resources.slice(2)} />
      <Newsletter />
      <Footer />
    </Layout>
  );
};

//called every time we visit the page, executed on the server, data always fresh
export async function getServerSideProps() {
  const resData = await fetch(`${process.env.API_URL}/resources`);
  const data = await resData.json();
  return {
    props: {
      resources: data,
    },
  };
}

//called at build time, only once
// export async function getStaticProps() {
//   const resData = await fetch("http://localhost:3000/api/resources");
//   const data = await resData.json();
//   return {
//     props: {
//       resources: data,
//     },
//   };
// }

export default HomePage;
