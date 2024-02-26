import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TermsAndConditions, cookiePolicyData } from "@/components/legal";
import { Layout } from "@/layout";

function CookiePolicy() {
  return (
    <Layout
      title="Our Cookie Policy"
      description="Cookie Policy for Better Call Paul"
      navbar={<Navbar />}
      footer={<Footer />}
    >
      <TermsAndConditions data={cookiePolicyData} />
    </Layout>
  );
}

export default CookiePolicy;
