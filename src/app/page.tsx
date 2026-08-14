import type { Metadata } from "next";
import {
  FeaturedReferences,
  Hero,
  Hydrosolubles,
  LabelArgument,
  ProfileFork,
  ProofBar,
} from "@/components/home";
import { CtaBand, TedxBlock } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Aymeric Pataud — Expert du goût",
  description:
    "Chef de formation et expert du goût. Je crée, reformule et signe des recettes pour les industriels de l'agroalimentaire, les chefs et les artisans. Huiles essentielles culinaires lipo et hydrosolubles.",
  alternates: { canonical: "/" },
};

/**
 * Accueil resserré à sept sections après le premier retour client.
 * Un acheteur de l'agroalimentaire reste peu de temps : il doit trouver son
 * chemin dès le deuxième écran, et l'argument différenciant juste après.
 * Le contenu retiré n'est pas perdu, il vit sur les pages dédiées :
 *  - la posture       -> /expertise-du-gout/
 *  - l'atelier        -> /creation-sur-mesure/
 *  - le consulting    -> /consulting/
 *  - les témoignages  -> /references/ et les pages profil
 */
export default function Home() {
  return (
    <>
      <Hero />
      <ProofBar />
      <ProfileFork />
      <LabelArgument />
      <Hydrosolubles />
      <FeaturedReferences />
      <TedxBlock compact />
      <CtaBand />
    </>
  );
}
