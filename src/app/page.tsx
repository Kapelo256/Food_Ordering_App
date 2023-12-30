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
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex
          flex-col gap-4">    
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Modi ex corrupti aperiam aspernatur tenetur, quaerat 
            voluptatum quia, quis cumque veniam hic, voluptas maiores 
            nemo neque repellat asperiores qui vero harum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Modi ex corrupti aperiam aspernatur tenetur, quaerat 
            voluptatum quia, quis cumque veniam hic, voluptas maiores 
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Modi ex corrupti aperiam aspernatur tenetur, quaerat 
          </p>
        </div>
      </section>
      <section className="texte-center">
      <SectionHeaders 
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <a className="text-4xl" href="tel:+46738123123">+46 738 123 123</a>
      </section>
    </>
  )
}
