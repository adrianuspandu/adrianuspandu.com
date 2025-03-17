import Image from "next/image";
import profilePicture from "/public/images/profile-picture.jpg";
import albumPlaceholder from "/public/images/album-placeholder.jpg";
import posterPlaceholder from "/public/images/poster-placeholder.jpg";
import MilestoneCard from "../components/MilestoneCard";
import FilmPoster from "../components/FilmPoster";
import AlbumPick from "../components/AlbumPick";

export default function MyCorner() {
  return (
    <>
      <section id="heading" className="w-lg text-center mx-auto mt-15 mb-10">
        <h1 className="font-display font-bold text-6xl mb-4">My Corner</h1>
        <p>
          I could call this the "About" page, but where's the fun in that?
          Instead, consider this a space to get to know me better. Stick around,
          and you might just learn something new!
        </p>
      </section>

      <section
        id="content-section"
        className="flex flex-col w-4xl mx-auto gap-20"
      >
        {/* WHO IS PANDU */}
        <div className="flex flex-row items-center gap-20">
          <div className="flex flex-col items-start">
            <div className="border-4 border-black bg-purpleAccent rounded-lg inline-block mb-4">
              <h2 className="text-4xl text-center font-display font-bold px-6 py-3">
                Who is Pandu?
              </h2>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur. Pharetra amet egestas
              tortor risus. Magna eu et ornare pulvinar dapibus. Erat aliquet
              duis eu lacus massa ac urna ut. Diam suspendisse viverra integer
              tincidunt suspendisse pharetra. Sit sodales ut vivamus semper
              augue. Fringilla duis mattis diam aliquam sed magnis non blandit.
              Sit quam sit id elementum id sit sed augue volutpat. Dignissim
              bibendum nunc eu habitant. Tellus diam tempor feugiat a gravida
              amet varius. Quis neque laoreet sit augue facilisis dictum semper
              vitae sapien. Justo vitae velit at sed velit.
            </p>
          </div>

          <Image
            className="w-3xs object-cover brutal border-2 border-black rounded-lg"
            src={profilePicture}
            alt="Pandu smiling at the camera"
          />
        </div>

        {/* QUOTE TO LIVE BY */}
        <div className="flex flex-col items-center">
          <div className="border-4 border-black bg-secondary rounded-lg inline-block mb-5">
            <h2 className="text-4xl text-center font-display font-bold px-6 py-3">
              Quote to live by
            </h2>
          </div>

          <div className="flex flex-col border-4 border-black rounded-lg py-4 px-6">
            <h3 className="text-4xl font-display mb-4">
              “But for now we are young, let us lay in the sun, and count every
              beautiful thing we can see”
            </h3>
            <p className="text-2xl font-display text-grayText">- Jeff Mangum</p>
          </div>
        </div>

        {/* PANDU IS LISTENING TO */}
        <div>
          <div className="border-4 border-black bg-greenAccent rounded-lg inline-block mb-5">
            <h2 className="text-4xl text-background text-center font-display font-bold px-6 py-3">
              Pandu is listening to...
            </h2>
          </div>

          <div className="flex flex-row items-center justify-between">
            <Image
              src={albumPlaceholder}
              alt="album"
              className="w-2xs object-cover brutal border-2 border-black rounded-lg"
            />
            <div className="w-lg">
              <h3 className="font-display text-4xl font-bold mb-2">Blue</h3>
              <p className="font-display text-2xl text-grayText mb-4">
                Joni Mitchell
              </p>
              <p>
                Deserunt eu cillum deserunt non commodo amet eu cupidatat quis
                et id commodo laborum.
              </p>
            </div>
          </div>
        </div>

        {/* ALBUM PICKS */}
        <div className="flex flex-col">
          <div className="border-4 border-black bg-purpleAccent rounded-lg inline-block mb-5 mx-auto">
            <h2 className="text-4xl text-center font-display font-bold px-6 py-3">
              Album Picks
            </h2>
          </div>
          <div className="flex flex-row justify-between">
            <AlbumPick
              title="Blue"
              artist="Joni Mitchell"
              src={albumPlaceholder}
            />
            <AlbumPick
              title="Blue"
              artist="Joni Mitchell"
              src={albumPlaceholder}
            />
            <AlbumPick
              title="Blue"
              artist="Joni Mitchell"
              src={albumPlaceholder}
            />
            <AlbumPick
              title="Blue"
              artist="Joni Mitchell"
              src={albumPlaceholder}
            />
          </div>
        </div>

        {/* FILM PICKS */}
        <div className="flex flex-col">
          <div className="border-4 border-black bg-yellowAccent rounded-lg inline-block mb-5 mx-auto">
            <h2 className="text-4xl text-background text-center font-display font-bold px-6 py-3">
              Film Picks
            </h2>
          </div>
          <div className="flex flex-row justify-between">
            <FilmPoster
              title="Dazed and Confused"
              src={posterPlaceholder}
              year="1993"
            />
            <FilmPoster
              title="Dazed and Confused"
              src={posterPlaceholder}
              year="1993"
            />
            <FilmPoster
              title="Dazed and Confused"
              src={posterPlaceholder}
              year="1993"
            />
            <FilmPoster
              title="Dazed and Confused"
              src={posterPlaceholder}
              year="1993"
            />
          </div>
        </div>

        {/* RUNNING MILESTONES */}
        <div className="flex flex-col">
          <div className="border-4 border-black bg-secondary rounded-lg inline-block mb-5 mx-auto">
            <h2 className="text-4xl text-center font-display font-bold px-6 py-3">
              Running Milestones
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-y-8">
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
              goalTime="Sub 25"
              goalDate="by end of 2025"
              headingColor="text-purpleAccent"
            />
            <MilestoneCard
              distance="21,1K"
              pbTime="N/A"
              pbDate="N/A"
              goalTime="Finish"
              goalDate="by end of 2025"
              headingColor="text-pinkAccent"
            />
            <MilestoneCard
              distance="42,2K"
              pbTime="N/A"
              pbDate="N/A"
              goalTime="Finish"
              goalDate="by end of 2026"
              headingColor="text-yellowAccent"
            />
          </div>
        </div>
      </section>
    </>
  );
}
