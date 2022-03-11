import Head from "next/head";
import Image from "next/image";
import Logo from "../Components/Logo";
import { BsArrowDown as DownIcon } from "react-icons/bs";
var menu = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Gallery",
    route: "/gallery",
  },
  {
    title: "Contact Us",
    route: "/contact",
  },
];

var collections = [
  {
    title: "Collection 1",
    image: "/col1.jpg",
  },
  {
    title: "Collection 2",
    image: "/col2.jpg",
  },
  {
    title: "Collection 3",
    image: "/col3.jpg",
  },
  {
    title: "Collection 4",
    image: "/col4.jpg",
  },
  {
    title: "Collection 5",
    image: "/col5.jpg",
  },
  {
    title: "Collection 6",
    image: "/col6.jpg",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>ED ONER | Home</title>
      </Head>
      <div className="h-screen w-screen bg-[url('/hero.jpg')] bg-cover bg-fixed">
        <div className=" bg-black/50">
          <div className="h-screen flex flex-col w-screen px-12">
            <div className="flex flex-row justify-between p-3">
              <Logo />
              <div className="flex flex-row gap-6">
                {menu.map((m) => (
                  <button
                    key={menu.indexOf(m)}
                    className="text-lg text-white font-logo px-3"
                  >
                    {m.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="grow flex flex-col justify-end items-center">
              <p className="text-6xl text-white font-body font-bold">
                Graphiste And Street Artiste
              </p>
              <DownIcon className="my-7 text-white text-5xl animate-bounce" />
            </div>
          </div>
        </div>

        <div className="bg-bg px-12">
          <div className="w-full bg-bg flex justify-center items-center ">
            <p className="max-w-[500px] text-center text-3xl font-bold py-32 ">
              COLLECTIONS
            </p>
          </div>
          <div className="flex flex-wrap gap-8 justify-center items-center bg-bg">
            {collections.map((c) => (
              <div
                key={collections.indexOf(c)}
                className="w-[40%] h-[550px]  relative bg-gray-400 m-7"
              >
                <Image
                  src={c.image}
                  layout="fill"
                  alt={c.title}
                  objectFit="cover"
                ></Image>
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-2 items-center py-28">
            <div className="grow h-[1px] bg-black"></div>
            {"//"}
            <div className="grow h-[1px] bg-black"></div>
          </div>
        </div>
        <div className="h-[70vh] w-screen relative">
          <Image
            src="/about.jpg"
            alt="Ed Omer"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="bg-bg">
          <div className=" py-10 px-6 flex justify-center items-center w-full bg-bg">
            <p className="max-w-[500px] text-lg   first-letter:text-green-800 first-letter:text-9xl first-letter:font-bold">
              Born in Montreal, Canada, Catherine Benny started painting when
              her kids were grown. She is an instinctive artist who paints in
              oil by applying colors directly to the canvas using brushes and
              palette knifes. Her movement and sensitivity are at the heart of
              her bright and colorful work. Passion, perseverance and commitment
              have contributed to her success as a painter. From her nature
              paintings to her cityscapes, there is a movement and freshness
              that makes her work interesting and popular. Catherine is a
              prolific painter, her spontaneity has her working on several
              pieces at the same time. The palette knife has allowed her a new
              freedom which translates to less detail, more expression and
              larger canvases.
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center py-28 px-12">
            <div className="grow h-[1px] bg-black"></div>
            {"//"}
            <div className="grow h-[1px] bg-black"></div>
            <div className="p-12 max-w-2xl bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
