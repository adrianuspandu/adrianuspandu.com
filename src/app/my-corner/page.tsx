import Image from "next/image";
import profilePicture from "/public/images/profile-picture.jpg";
import MilestoneCard from "../../components/APMilestoneCard";
import FilmPoster from "../../components/APFilmPoster";
import AlbumPick from "../../components/APAlbumPick";

// Album Covers Import
import blue from "../../../public/images/albums/blue.jpg"
import aeroplane from "../../../public/images/albums/aeroplane.jpg"
import afut from "../../../public/images/albums/afut.jpg"
import revolver from "../../../public/images/albums/revolver.jpg"
import sinister from "../../../public/images/albums/sinister.jpg"

// Film Posters Import
import dazedAndConfused from "../../../public/images/posters/dazed-and-confused.jpg"
import beforeSunset from "../../../public/images/posters/before-sunset.jpg"
import returnOfTheKing from "../../../public/images/posters/return-of-the-king.jpg"
import se7en from "../../../public/images/posters/se7en.jpg"

export const metadata = {
  title: "Pandu's Corner",
  description: "Adrianus Pandu's corner on the internet",
  openGraph: {
    title: "Pandu's Corner",
    description: "Adrianus Pandu's corner on the internet",
    url: "https://adrianuspandu.vercel.app/my-corner",
    siteName: "Adrianus Pandu",
    type: "website",
  },
};

export default function MyCorner() {
  return (
    <>
      <section
        id="heading"
        className="[background-image:radial-gradient(circle_at_2px_2px,var(--dottedGrid)_2px,transparent_0)] [background-size:30px_30px] pb-10 mb-5"
      >
        <div className="max-w-lg text-center mx-auto pt-30 lg:pt-40 px-4">
          <h1 className="font-display font-bold text-4xl lg:text-6xl mb-4">
            My Corner
          </h1>
          <p className="text-sm lg:text-base">
            I could call this the "About" page, but where's the fun in that?
            Instead, consider this a space to get to know me better. Stick
            around, and you might just learn something new!
          </p>
        </div>
      </section>

      <section
        id="content-section"
        className="flex flex-col max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto gap-20 px-4"
      >
        {/* WHO IS PANDU */}
        <div className="flex flex-row items-center justify-center gap-20">
          <div className="flex flex-col items-start">
            <div className="mx-auto md:mx-0 border-4 border-black bg-purpleAccent rounded-lg inline-block mb-4">
              <h2 className="text-2xl lg:text-4xl text-center font-display font-bold px-6 py-3">
                Who is Pandu?
              </h2>
            </div>

            <p className="text-sm lg:text-base max-w-lg">
              Pandu is an electrical engineering student at FH Aachen. He is
              currently learning about iOS Development and Digital Product Design.
              Outside of coding, he enjoys running long distance, listening to
              good music, and playing bass.
            </p>
          </div>

          <Image
            className="hidden md:block w-3xs object-cover brutal border-2 border-black rounded-lg"
            src={profilePicture}
            alt="Pandu smiling at the camera"
          />
        </div>

        {/* QUOTE TO LIVE BY */}
        <div className="flex flex-col items-center">
          <div className="border-4 border-black bg-secondary rounded-lg inline-block mb-5">
            <h2 className="text-2xl lg:text-4xl text-center font-display font-bold px-6 py-3">
              Quote to live by
            </h2>
          </div>

          <div className="flex flex-col border-4 border-black rounded-lg py-4 px-6">
            <h3 className="text-xl lg:text-4xl font-display mb-4">
              “But for now we are young, let us lay in the sun, and count every
              beautiful thing we can see”
            </h3>
            <p className="text-lg text-2xl font-display text-grayText">
              - Jeff Mangum
            </p>
          </div>
        </div>

        {/* PANDU IS LISTENING TO */}
        <div className="flex flex-col items:start">
          <h2 className="mx-auto md:ml-0 md:mr-auto border-4 border-black bg-greenAccent rounded-lg mb-5 text-2xl lg:text-4xl text-background text-center font-display font-bold px-6 py-3">
            Pandu is listening to...
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src={blue}
              alt="Album Cover of Joni Mitchell's Blue"
              className="max-w-2xs object-cover brutal border-2 border-black rounded-lg"
            />
            <div className="max-w-[300px] md:max-w-md lg:max-w-lg">
              <h3 className="font-display text-4xl font-bold mb-2">Blue</h3>
              <p className="font-display text-2xl text-grayText mb-4">
                Joni Mitchell
              </p>
              <p>
                Just watched "A Complete Unknown" and I've been listening to some folk music lately. I recently discovered Joni Mitchell and was very subdued by her melodic songwriting.
              </p>
            </div>
          </div>
        </div>

        {/* ALBUM PICKS */}
        <div className="flex flex-col">
          <div className="border-4 border-black bg-purpleAccent rounded-lg inline-block mb-5 mx-auto">
            <h2 className="text-2xl lg:text-4xl text-center font-display font-bold px-6 py-3">
              Album Picks
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
            <AlbumPick
              title="In The Aeroplane Over The Sea"
              artist="Neutral Milk Hotel"
              src={aeroplane}
            />
            <AlbumPick
              title="Ants From Up There"
              artist="Black Country, New Road"
              src={afut}
            />
            <AlbumPick
              title="Revolver"
              artist="The Beatles"
              src={revolver}
            />
            <AlbumPick
              title="If You're Feeling Sinister"
              artist="Belle & Sebastian"
              src={sinister}
            />
          </div>
        </div>

        {/* FILM PICKS */}
        <div className="flex flex-col">
          <div className="border-4 border-black bg-yellowAccent rounded-lg inline-block mb-5 mx-auto">
            <h2 className="text-2xl lg:text-4xl text-background text-center font-display font-bold px-6 py-3">
              Film Picks
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
            <FilmPoster
              title="Dazed and Confused"
              src={dazedAndConfused}
              year="1993"
            />
            <FilmPoster
              title="Before Sunset"
              src={beforeSunset}
              year="2004"
            />
            <FilmPoster
              title="The Return of the King"
              src={returnOfTheKing}
              year="2003"
            />
            <FilmPoster
              title="Se7en"
              src={se7en}
              year="1995"
            />
          </div>
        </div>

        {/* RUNNING MILESTONES */}
        <div className="flex flex-col">
          <div className="border-4 border-black bg-secondary rounded-lg inline-block mb-5 mx-auto">
            <h2 className="text-2xl lg:text-4xl text-center font-display font-bold px-6 py-3">
              Running Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-8 mx-auto">
            <MilestoneCard
              distance="5K"
              pbTime="27:28"
              pbDate="July 2024"
              goalTime="Sub 25"
              goalDate="by end of 2025"
              headingColor="text-greenAccent"
            />
            <MilestoneCard
              distance="10K"
              pbTime="1:08:13"
              pbDate="May 2024"
              goalTime="Sub 1-Hr"
              goalDate="by end of 2025"
              headingColor="text-purpleAccent"
            />
            <MilestoneCard
              distance="21,1K"
              pbTime="2:31:59"
              pbDate="April 2025"
              goalTime="Sub 2-Hr"
              goalDate="by end of 2026"
              headingColor="text-pinkAccent"
            />
            <MilestoneCard
              distance="42,2K"
              pbTime="N/A"
              pbDate="N/A"
              goalTime="Finish"
              goalDate="by end of 2027"
              headingColor="text-yellowAccent"
            />
          </div>
        </div>
      </section>
    </>
  );
}
