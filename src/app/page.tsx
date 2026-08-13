import type { Metadata } from "next";
import {
  Atelier,
  ConsultingTeaser,
  FeaturedReferences,
  Hero,
  Hydrosolubles,
  LabelArgument,
  Posture,
  ProfileFork,
  ProofBar,
} from "@/components/home";
import { CtaBand, LogoWall, TedxBlock, Testimonials } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Aymeric Pataud — Expert du goût",
  description:
    "Chef de formation et expert du goût. Je crée, reformule et signe des recettes pour les industriels de l'agroalimentaire, les chefs et les artisans. Huiles essentielles culinaires lipo et hydrosolubles.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProofBar />
      <Posture />
      <ProfileFork />
      <LabelArgument />
      <Hydrosolubles />
      <TedxBlock />
      <FeaturedReferences />
      <LogoWall tone="deep" />
      <Atelier />
      <ConsultingTeaser />
      <Testimonials limit={6} />
      <CtaBand />
    </>
  );
}
