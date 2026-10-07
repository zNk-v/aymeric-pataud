import type { Metadata } from "next";
import {
  Creations,
  FeaturedReferences,
  Hero,
  Hydrosolubles,
  LabelArgument,
  ProfileFork,
  ProofBar,
  Workshops,
} from "@/components/home";
import { CtaBand, TedxBlock } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Aymeric Pataud — Expert du goût",
  description:
    "Chef consultant et expert du goût. Je crée, reformule et signe des recettes pour les industriels de l'agroalimentaire, les chefs et les artisans. Huiles essentielles alimentaires lipo et hydrosolubles.",
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
 * Les deux ateliers remontent sous la bande preuve depuis le 7 octobre 2026 :
 * le visiteur réunionnais comme le client d'Amiens doit se reconnaître vite.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <ProofBar />
      <Workshops />
      <ProfileFork />
      <LabelArgument />
      <Hydrosolubles />
      <Creations />
      <FeaturedReferences />
      <TedxBlock compact />
      <CtaBand />
    </>
  );
}
