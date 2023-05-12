import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../layouts";


export default function Home() {
  return (

    <Layout >

      <main className="flex flex-col items-center justify-center">

        {/* Hero */}

        <section className="bg-gradient-to-b from-blue-600 to-purple-600  bg-blue-600 w-full h-full py-10 md:py-20 lg:py-32">
          <div className="p-5 md:p-10">
            <h1 className="text-center text-white text-3xl md:text-6xl lg:text-8xl font-extrabold">
              Start. Save. Grow.
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-16 mt-8 md:mt-16 lg:mt-32">
              <div className="w-full md:w-1/2">
                <div className="relative h-40 md:h-80 w-full md:w-80 mx-auto mb-8 md:mb-0">
                  <Image
                    src="/images/img1.avif"
                    alt="img1"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="mx-auto mb-8 md:mb-16">
                  <h1 className="text-white text-lg md:text-xl text-center">
                    Whether you’re starting out, or scaling to meet demand, connect
                    with the right people, products, and best practices to help your
                    startup grow.
                  </h1>
                </div>
                <div className="flex justify-center p-3">
                  <Link href="/user/signin" className="bg-white text-blue-600 text-lg py-3 px-8 md:px-10 rounded-full shadow-lg hover:shadow-xl flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-y-1">
                    <span>Get started</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>

                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative h-40 md:h-80 w-full md:w-80 mx-auto">
                  <Image
                    src="/images/img2.avif"
                    alt="img2"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-tr-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parallax Background */}
        <section
          className="flex flex-col w-full h-[500px] bg-gradient-to-br from-purple-600 to-pink-600 bg-fixed bg-center bg-cover justify-center items-center relative overflow-hidden"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&w=880&q=80)"
          }}
        >
          <h1 className="text-white text-5xl font-bold mt-20 mb-10 text-center tracking-wide relative z-10">
            This is Parallax Effect
          </h1>
          <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
          <span className="text-center font-bold my-20 text-white/90 relative ">
            <a
              href="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
              target="_blank"
              className="text-white/90 hover:text-white transition duration-300 ease-in-out"
            >
              Convert to SASS
            </a>
            <hr className="my-4 border border-white/40" />
            <a
              href="https://unsplash.com/photos/8Pm_A-OHJGg"
              target="_blank"
              className="text-white/90 hover:text-white transition duration-300 ease-in-out"
            >
              Image Source
            </a>
            <hr className="my-4 border border-white/40" />
            <p>
              <a
                href="https://github.com/EgoistDeveloper/my-tailwind-components/blob/main/src/templates/parallax-landing-page.html"
                target="_blank"
                className="text-white/90 hover:text-white transition duration-300 ease-in-out"
              >
                Source Code
              </a>
              |
              <a
                href="https://egoistdeveloper.github.io/my-tailwind-components/./src/templates/parallax-landing-page.html"
                target="_blank"
                className="text-white/90 hover:text-white transition duration-300 ease-in-out"
              >
                Full Preview
              </a>
            </p>
          </span>
        </section>
        {/* Content */}
        <section className="p-20 sm:space-y-4 md:space-y-8 bg-gray-50">
          <h1 className="text-4xl text-center my-20">Tempor sit labore nostrud</h1>
          <p>
            Exercitation non Lorem exercitation tempor amet ad esse velit. Anim
            deserunt id nulla quis ex magna culpa exercitation. Mollit consequat
            enim eiusmod cupidatat commodo eiusmod nulla. Id quis amet incididunt
            cillum dolore consectetur nulla incididunt laborum excepteur consectetur
            consectetur sunt tempor. Minim fugiat sint sunt ad elit laboris est sit
            est laboris labore do velit. Cillum aliquip pariatur deserunt eiusmod.
            Consequat irure nulla adipisicing deserunt culpa. Veniam enim deserunt
            sint consequat labore. Enim ullamco ea aute duis et nostrud voluptate
            fugiat consectetur et velit cillum anim dolore. In exercitation proident
            proident nostrud voluptate. Fugiat elit esse labore pariatur ex. Ex
            labore esse voluptate nisi in. Ad anim deserunt reprehenderit est.
            Aliquip pariatur nulla dolor amet quis aliqua sit nisi officia enim
            velit. Ad enim eu dolor quis ipsum. Nulla amet consectetur adipisicing
            ullamco qui tempor dolor excepteur dolore anim pariatur quis laboris
            consequat. Consectetur ullamco consectetur minim eiusmod quis veniam
            esse consectetur anim nostrud est pariatur laborum. Mollit tempor minim
            amet esse. Lorem officia consequat eiusmod sunt. Proident occaecat velit
            et consequat irure est cupidatat tempor ullamco. Aliquip est pariatur ea
            ut qui ad sit dolor laboris adipisicing officia eiusmod sit. Proident
            Lorem ex cillum sint cupidatat amet nulla veniam laborum velit pariatur.
            Fugiat excepteur culpa sunt est anim sunt. Ea voluptate non do proident
            sunt ad cillum enim esse.
          </p>
          <p>
            Incididunt eu pariatur laborum reprehenderit duis ex cillum fugiat.
            Occaecat tempor commodo officia esse reprehenderit commodo. Irure nisi
            culpa anim velit esse do esse veniam dolore fugiat. Non anim elit ad ad
            esse veniam dolore labore consectetur nulla dolor occaecat quis tempor.
            Ad do exercitation cillum duis consequat. Ea anim aute elit velit duis
            quis. Anim sint ut occaecat officia id exercitation ea incididunt
            exercitation sint ex. Reprehenderit ut qui eiusmod cupidatat incididunt
            ad reprehenderit culpa tempor quis. Elit eu dolor anim tempor eu fugiat
            voluptate dolor aliqua sint ex proident ullamco. Labore deserunt velit
            quis cupidatat aliquip elit do labore ut. Laborum dolore incididunt
            officia esse reprehenderit pariatur ullamco consectetur tempor officia.
            Dolor culpa irure enim aute ex non veniam eiusmod ipsum elit est sit
            mollit dolor. Est ad anim pariatur consequat ad sit nisi.
          </p>
          <p>
            Ipsum ea ad fugiat incididunt ea sit laborum cupidatat in ullamco
            ullamco fugiat et id. Sit commodo enim enim veniam do. Ad id ad tempor
            deserunt cupidatat reprehenderit ullamco officia excepteur culpa.
            Officia amet in do voluptate exercitation pariatur officia et sit.
            Adipisicing deserunt do aliquip ad id elit sint voluptate sit anim nulla
            pariatur dolore. Lorem do commodo aute veniam deserunt magna commodo
            cillum magna veniam. Ea amet nostrud commodo nisi adipisicing cillum
            commodo. Nostrud aliquip cupidatat veniam culpa aute officia commodo
            velit. Laborum quis aute nulla amet officia esse proident sunt irure
            dolor fugiat incididunt occaecat. Commodo esse eiusmod fugiat eu enim
            nisi sit id ut adipisicing. Enim nisi mollit ea aliqua nisi qui ullamco
            eu velit et ullamco. Magna eiusmod eiusmod culpa proident minim laboris
            fugiat enim laborum quis mollit minim do nisi. Elit irure incididunt
            duis ullamco exercitation nulla fugiat. Eu ullamco aliquip aute
            consectetur excepteur consequat. Non nostrud officia sint enim et ad
            sunt amet pariatur deserunt enim reprehenderit. Aute Lorem adipisicing
            laborum labore labore tempor officia officia reprehenderit incididunt
            enim officia laborum. Proident eu irure occaecat ipsum elit elit anim eu
            aute commodo ullamco reprehenderit incididunt elit. Mollit voluptate
            eiusmod ullamco fugiat ex enim in fugiat et consectetur duis do. Et
            aliqua ad labore labore ea ipsum nostrud veniam et reprehenderit. Sint
            ad sit voluptate consequat cillum do fugiat Lorem. Pariatur ad ad
            reprehenderit cupidatat nulla ipsum voluptate. Dolore pariatur ea
            laboris est excepteur.
          </p>
        </section>
      </main>
    </Layout>

  )
}