import { Button } from "@/components/ui/button";
// import { FiDownload } from "react-icons/fi";
import Link from "next/link";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 xl:gap-6">
          {/* text */}
          <div className="tetx-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">Hello, I&apos;m <br /><span className="text-accent">Hanna Kulikowska</span></h1>
            <p className="mb-9 text-white/80">
              {/* I am constantly learning and staying updated with the latest trends and technologies in web development to deliver high-quality solutions. */}
              My goal is to build websites that not only look great but also provide an excellent user experience. Let's create something amazing together!
            </p>
            {/* btn and socials */}
            {/* <div className="flex flex-col xl:flex-row items-center gap-8"> */}
              {/* <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button> */}
              <div className="mb-8 xl:mb-0">
                {/* <Social
                  containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              /> */}
              <Link href="/contact">
                <Button size="md" className="max-w-40">Get Started</Button>
              </Link>
              </div>
            {/* </div> */}
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* <Stats /> */}
    </section>
  )
}

export default Home
