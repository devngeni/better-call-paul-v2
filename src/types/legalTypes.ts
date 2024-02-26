interface Section {
  title: string;
  content: string;
}

interface TermsData {
  title: string;
  introduction: string;
  sections: Section[];
}
interface HostData {
  title: string;
  introduction: string;
  sections: Section[];
}

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  faqs: FAQ[];
}

interface FAQData {
  categories: FAQCategory[];
}
interface FAQProps {
  data: FAQData;
}

export type {
  Section,
  TermsData,
  FAQ,
  FAQCategory,
  FAQData,
  FAQProps,
  HostData
};
