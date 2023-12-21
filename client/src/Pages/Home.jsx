import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="   relative overflow-hidden  bg-drawing max-w-2 bg-contain bg-no-repeat">
      <div className="relative isolate pt-14 ">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className=" h-screen flex flex-col justify-center">
          <div className="text-right max-w-2xl  self-end px-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Discover Extinct Species
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Delve into the history of extinct species and the factors
              contributing to their disappearance. Explore the rich diversity
              that once existed on our planet.
            </p>
            <div className="mt-10 flex items-center justify-end gap-x-6">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900 outline-dotted rounded-md p-2"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className=" h-screen flex flex-col  bg-birds relative overflow-hidden bg-cover bg-no-repeat">
          <div className="ml-20 mt-5 max-w-2xl pt-10 self-start">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Explore Endangered Species
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-900">
              Learn about endangered species and their conservation efforts.
              Discover the beauty of wildlife and the importance of preserving
              our ecosystems.
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-6">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900 outline-dotted rounded-md p-2"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}

          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Educational Resources
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Access educational materials to enhance your knowledge. Engage
              with interactive content, videos, and articles to deepen your
              understanding of endangered and extinct species.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/learn"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link
                to="/learn"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
