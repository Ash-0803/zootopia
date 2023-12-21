const stats = [
  { id: 1, name: "Total Animal Species", value: "44 thousand" },
  { id: 2, name: "Endangered Species", value: "16 thousand" },
  { id: 3, name: "New users annually", value: "9 Hundred" },
];

export default function FunFacts() {
  const facts = [
    {
      name: "Dodo",
      description:
        "A flightless bird that became extinct in the late 17th century, primarily due to human activity and the introduction of invasive species.",
      funFact:
        "Despite its reputation for being clumsy and flightless, the dodo was likely adapted to its island habitat and was not as slow as commonly depicted. It evolved without natural predators, making it naive and vulnerable when humans and other animals arrived on its island.",
    },
    {
      name: "Woolly Mammoth",
      description:
        "An iconic species of the Pleistocene epoch, the woolly mammoth disappeared around 10,000 years ago, likely due to a combination of climate change and human hunting.",
      funFact:
        "Some well-preserved mammoth specimens have been found frozen in Siberian permafrost with intact hair. Scientists have even considered the possibility of cloning mammoths using preserved DNA.",
    },
    {
      name: "Western Black Rhinoceros",
      description:
        "This subspecies of the black rhinoceros was declared extinct in 2011 due to poaching for its horn.",
      funFact:
        "Rhinoceros horns are made of keratin, the same protein that forms human hair and nails. Despite being composed of this common substance, rhino horns have unfortunately driven many species to the brink of extinction due to high demand.",
    },
    {
      name: "Golden Toad (Incilius periglenes)",
      description:
        "Native to Costa Rica, the golden toad became extinct in the late 20th century, with the exact cause of its decline still not fully understood.",
      funFact:
        "The golden toad is known for its striking bright orange color. Its extinction is often linked to climate change and the spread of a deadly pathogenic fungus.",
    },
    {
      name: "Megalodon (Carcharocles megalodon)",
      description:
        "An extinct species of shark, Megalodon is considered one of the largest and most powerful predators to have ever lived.",
      funFact:
        "Megalodon's teeth, which could reach over 7 inches (18 cm) in length, are some of the most common fossils found in marine deposits worldwide, offering insight into its massive size.",
    },
    {
      name: "Tasmanian Tiger",
      description:
        "Also known as the thylacine, this carnivorous marsupial was native to Tasmania and went extinct in the 20th century, with the last known individual dying in captivity in 1936.",
      funFact:
        "The thylacine had a unique way of giving birth—females had a pouch like marsupials, but unlike most marsupials, the thylacine had four teats, similar to a dog or a cat.",
    },
  ];
  return (
    <div>
      <div className="h-96 my-28 bg-green-200 flex flex-col justify-center ">
        <div className=" py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base leading-7 text-gray-600">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* ACTUAL FACTS _____ */}
      </div>
      <div className="actualfacts flex flex-col gap-10 items-center">
        <h1 class="text-6xl p-10 font-bold leading-7 text-gray-900 sm:truncate  sm:tracking-tight">
          Did you know?
        </h1>
        {facts.map((fact, index) => (
          <div
            key={index}
            className="items-center max-w-4xl bg-white rounded-lg shadow-md md:flex-row  hover:bg-gray-100 border"
          >
            {/* <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/docs/images/blog/image-4.jpg"
            alt=""
          /> */}
            <div className="w-4xl flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-gray-900 ">
                {fact.name} :
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {fact.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
