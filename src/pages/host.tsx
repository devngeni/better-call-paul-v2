import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Hosts, hostsData } from "@/components/legal";
import { Layout } from "@/layout";

export default function Hostspage() {
  return (
    <Layout
      title="Our Hosts"
      description="Better Call Paul Hosts"
      navbar={<Navbar />}
      footer={<Footer />}
    >
      <Hosts data={hostsData} />
    </Layout>
  );
}