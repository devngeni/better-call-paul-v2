import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TermsAndConditions, termsData } from "@/components/legal";
import { Layout } from "@/layout";


export default function TermsPage() {
  return (
    <Layout
      title="Terms and Conditions"
      description="Better Call Paul and conditions"
      navbar={<Navbar />}
      footer={<Footer />}
    >
      <TermsAndConditions data={termsData} />
    </Layout>
  );
}
