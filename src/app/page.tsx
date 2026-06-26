import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import {
  Manifeste,
  Essentiel,
  PostureFaire,
  Approche,
  Huiles,
  Endurance,
  SocialProof,
  PourQui,
  FinalCTA,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifeste />
        <Essentiel />
        <PostureFaire />
        <Approche />
        <Huiles />
        <Endurance />
        <SocialProof />
        <PourQui />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
