import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TermsAndConditions, privacyPolicyData } from "@/components/legal";
import { Layout } from "@/layout";


export default function TermsPage() {
  return (
    <Layout
      title="Our Privacy Policy"
      description="Better Call Paul Privacy Policy"
      navbar={<Navbar />}
      footer={<Footer />}
    >
      <TermsAndConditions data={privacyPolicyData} />
    </Layout>
  );
}
