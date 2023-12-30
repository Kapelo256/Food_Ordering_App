import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu"
import SectionHeaders from "@/components/layout/SectionHeaders";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders 
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Modi ex corrupti aperiam aspernatur tenetur, quaerat 
          voluptatum quia, quis cumque veniam hic, voluptas maiores 
          nemo neque repellat asperiores qui vero harum?
        </p>

      </section>
    </>
  )
}