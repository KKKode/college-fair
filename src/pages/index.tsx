import { Feature, Hero, Profile, Topics } from "@/components/home";
import { PublicLayout } from "@/layouts";

export default function Home() {
  return (
    <PublicLayout>
      <main>
        <Hero />
        <Profile />
        <Feature />
        <Topics />
      </main>
    </PublicLayout>
  );
}
