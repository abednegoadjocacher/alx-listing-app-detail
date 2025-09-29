import Layout from "@/components/layout/Layout";
import Card from "@/components/common/Card";
export default function Home() {
  return(
    <>
      <Layout>
          <h1 className="text-4xl text-center">
            Hi there
          </h1>
          <Card />
      </Layout>
    </>
  );
}