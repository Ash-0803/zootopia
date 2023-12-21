import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "The Silent Crisis:",
    href: "#",
    description:
      "At the forefront of this crisis are countless species facing threats ranging from habitat loss and climate change to poaching and pollution. These challenges are not isolated incidents but interconnected issues that demand immediate attention. The consequences of losing even a single species can reverberate through ecosystems, affecting other flora and fauna and, ultimately, disrupting the natural order. ",
    date: "Aug 25, 2023",
    datetime: "2023-08-22",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Nezuko Kamado",
      role: "Co-Founder / DS",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "The Ripple Effect:",
    href: "#",
    description:
      "Endangered species are not just charismatic megafauna or elusive creatures in remote habitats; they are integral components of the intricate web of life. Each species, no matter how small or inconspicuous, contributes to ecosystem services like pollination, seed dispersal, and pest control. The extinction of one species can set off a chain reaction, impacting the abundance and health of other species and, ultimately, affecting human well-being. ",
    date: "Feb 22, 2023",
    datetime: "2023-03-23",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Light Yagami",
      role: "Co-Founder / DN",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "The Call to Action:",
    href: "#",
    description:
      "Addressing the crisis of endangered species requires a collective effort. Conservation initiatives, habitat restoration, and sustainable practices are pivotal in mitigating the threats faced by these species. Governments, organizations, and individuals alike must collaborate to enforce and strengthen regulations that protect wildlife and their habitats.",
    date: "Mar 16, 2023",
    datetime: "2023-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Eren Yeager",
      role: "Co-Founder / AOT",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export default function Blogs() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Blogs to help you grow
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn from conservation of extinct and endangered species through
            written material!
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <Link to={`blog/${post.id}`}>
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
