import { Benefits } from "@/components/Benefits";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Testimonials } from "@/components/Testimonials";

import { benefitOne, benefitThree, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      {/* <SectionTitle
        preTitle="Nextly Benefits"
        title=" Why should you use this landing page"
      >
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle> */}
      <div id="Features">
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
        <Benefits data={benefitThree} />
      </div>

      {/* <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" /> */}
      <div id="Testimonials">
        <SectionTitle
          preTitle="Testimonials"
          title="Here's what our customers said"
        >
          See how property managers are using Candor to save time, boost
          efficiency, and keep their tenants happy.
        </SectionTitle>

        <Testimonials />
      </div>

      {/* <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}

      {/* <Faq /> */}
      <Cta />
    </Container>
  );
}
