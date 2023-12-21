import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "The Expert's Corner:",
    description: `Blogging for Conservation: Dive into the minds of renowned experts, conservationists, and researchers in "The Expert's Corner." Our blog page features insightful articles, personal narratives, and research updates contributed by individuals passionate about preserving Earth's biodiversity. Gain unique perspectives, learn about ongoing conservation efforts, and stay informed about the latest developments in the world of wildlife conservation.`,
    icon: CloudArrowUpIcon,
  },
  {
    name: "Blogging for Conservation:",
    description: `Dive into the minds of renowned experts, conservationists, and researchers in "The Expert's Corner." Our blog page features insightful articles, personal narratives, and research updates contributed by individuals passionate about preserving Earth's biodiversity. Gain unique perspectives, learn about ongoing conservation efforts, and stay informed about the latest developments in the world of wildlife conservation.`,
    icon: LockClosedIcon,
  },
  {
    name: "Live Learning Sessions:",
    description: `Embark on a journey of knowledge through our live teaching sessions. Connect with experts and experienced individuals who share their expertise in real-time. Whether you're a student, an educator, or simply a curious learner, these sessions provide a valuable opportunity to engage directly with those working tirelessly to protect endangered species and understand the factors contributing to extinction.`,
    icon: ServerIcon,
  },
  {
    name: "Fun Facts Galore:",
    description: `Discover the lighter side of conservation with our FunFacts section. Learn interesting trivia, anecdotes, and quirky details about endangered and extinct species. Education doesn't have to be solemn — we believe in making the learning process enjoyable and intriguing.`,
    icon: ServerIcon,
  },
  {
    name: "3D Interactive Models: ",
    description: `Immerse yourself in an innovative learning experience with our interactive 3D models. These models offer a hands-on approach to understanding the anatomy, behavior, and habitats of endangered and extinct species. Navigate through the virtual world, observe intricate details, and deepen your understanding of the challenges these species face.`,
    icon: ServerIcon,
  },
];

export default function About() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 ">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Deploy faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Welcome to "Project Resilience: Safeguarding Earth's Legacy," an
                immersive initiative committed to educating and empowering
                individuals about the critical issues surrounding endangered and
                extinct species. In an era where biodiversity is under threat,
                our project serves as a dynamic platform, seamlessly blending
                education, interaction, and engagement.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="flex flex-col gap-20 py-5">
            <img
              src="/elephant.jpg"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
            <img
              src="deer.jpg"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

//
