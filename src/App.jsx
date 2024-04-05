import Navbar from "./components/templates/Navbar";
import Cover from "./assets/img/Cover.svg";
import Book from "./assets/img/book.png";
import LeftImage from "./assets/img/Left.jpg";
import RightImage from "./assets/img/right.jpg";

function App() {
  return (
    <>
      <Navbar />

      {/*  */}
      <section className="mx-5 mt-10 xl:mt-0 xl:mx-0">
        <div className="w-full grid min-[700px]:grid-cols-2 grid-cols-1   ">
          <div className="relative md:order-2">
            <img
              src={Cover}
              alt="cover"
              className="w-full relative z-20 -top-10 xl:-top-[5.8rem]"
            />
            <img
              src={Book}
              alt="cover"
              className="w-full absolute inset-0 z-30 -top-10 xl:scale-[0.8] xl:-translate-x-10  xl:-translate-y-5"
            />
          </div>

          <div className="flex flex-col items-center justify-start space-y-5 md:order-1 xl:ml-20 xl:items-start xl:mt-10">
            <h1 className="font-plusJakarta text-[2.5rem]  leading-[50px] font-extrabold xl:text-[4rem] xl:leading-[80px] text-[#181E4B]">
              Search & review your{" "}
              <span className="inline-block underline text-primary decoration-primary">
                fav book
              </span>{" "}
              effortlessly
            </h1>
            <p className="max-w-[500px] leading-[30px] text-base  text-black/80 font-plusJakarta font-normal ">
              Embark on a literary journey like never before with our
              revolutionary library application! Introducing a seamless
              experience that transcends traditional boundaries, where you can
              effortlessly search your favorite books.✨
            </p>
            <button className="w-[200px] py-5 bg-primary text-white font-semibold rounded-[10px]  ">
              Start now →
            </button>
          </div>
        </div>
      </section>

      <main className="max-w-[1280px] mx-auto ">
        <section className="mt-20 overflow-hidden xl:mt-10 font-plusJakarta">
          <div className="px-5">
            <div>
              <p className="text-lg font-semibold uppercase text-primary ">
                FEATURES
              </p>
              <h1 className="font-bold text-[24px] xl:text-[48px]">
                🤔• What You Can Do?
              </h1>
            </div>
            <div className="grid w-full grid-cols-1 py-6 md:grid-cols-3 gap-y-10 md:gap-y-0">
              <div className="flex flex-row items-start justify-center space-x-3 md:space-y-2 md:items-center md:flex-col ">
                <div className="grid bg-blue-500 rounded-lg min-w-28 h-28 place-items-center">
                  <img src="/search.svg" alt="icon" />
                </div>
                <div className="flex flex-col items-start justify-center px-2 md:items-center">
                  <p className=" font-bold  text-[20px] md:text-[24px] md:text-center">
                    search book
                  </p>
                  <p className="md:text-center text-[14px] md:text-base md:max-w-[270px] ">
                    Effortlessly find your next read with our powerful and
                    intuitive book search.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start justify-center space-x-3 md:space-y-2 md:items-center md:flex-col ">
                <div className="grid bg-blue-500 rounded-lg min-w-28 h-28 place-items-center">
                  <img src="/review.svg" alt="icon" />
                </div>
                <div className="flex flex-col items-start justify-center px-2 md:items-center">
                  <p className=" font-bold  text-[20px] md:text-[24px] md:text-center">
                    Review book
                  </p>
                  <p className="md:text-center text-[14px] md:text-base md:max-w-[270px] ">
                    Discover insightful critiques and share your thoughts on
                    diverse literary masterpieces effortlessly.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start justify-center space-x-3 md:space-y-2 md:items-center md:flex-col ">
                <div className="grid bg-blue-500 rounded-lg min-w-28 h-28 place-items-center">
                  <img src="/like.svg" alt="icon" />
                </div>
                <div className="flex flex-col items-start justify-center px-2 md:items-center">
                  <p className=" font-bold  text-[20px] md:text-[24px] md:text-center">
                    Wishlist book
                  </p>
                  <p className="md:text-center text-[14px] md:text-base md:max-w-[270px] ">
                    Curate your literary dreams–wishlist books for future
                    adventures and discoveries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-6 mt-10 xl:mt-30 font-plusJakarta">
          <div>
            <div>
              <p className="text-lg font-semibold uppercase text-primary ">
                SERVICES
              </p>
              <h1 className="font-bold font-plusJakarta text-[24px] xl:text-[48px]">
                🚀• The Services for You
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 pt-4 mx-auto mt-5 md:grid-cols-2 gap-y-0 md:gap-y-0 md:gap-x-5">
            <img
              src={LeftImage}
              alt="gambar"
              className="scale-125 rounded-lg lg:scale-100"
            />
            <div className="max-w-[411px] lg:max-w-[500px] pt-7 md:pt-0 md:p-8 md:-0">
              <p className="text-[20px] lg:text-[32px]  lg:w-full font-semibold">
                <span className=" text-primary">Rent</span> your favorite book
                fairly easy on <span className="text-primary">Lidia!</span>
              </p>
              <p className="leading-[30px] font-light  text-justify mt-3 ">
                Viewing, rent, and organize your favorite books has never been
                easier. An integrated digital library rent that’s simple to use,
                Lidia lets you spend less time managing your work and more time
                actually doing it!
              </p>
              <p className="leading-[30px] font-light  text-justify mt-3">
                Effortless rentals, personalized shelves—Lidia transforms book
                management, enhancing your reading experience
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 mx-auto mt-20 md:mt-10 md:grid-cols-2 gap-y-3 md:gap-y-0 md:gap-x-5">
            <div className="max-w-[491px] lg:max-w-[500px]  order-2 md:order-2 pt-7 md:pt-0 lg:p-8 md:-0">
              <p className="text-[20px] lg:text-[32px]  lg:max-w-[400px] font-semibold">
                Quick Book Rentals: <span className=" text-primary">Dive</span>{" "}
                into <span className="text-primary"> Reading</span> Instantly
              </p>
              <p className="leading-[30px] font-light  text-justify mt-3">
                Discover instant literary delight. Access a vast library, borrow
                your favorite reads, and dive into captivating stories within
                minutes. Reading made quick and easy, just a click away!
              </p>
              <p className="leading-[30px] font-light  text-justify mt-3">
                Unlock a world of stories effortlessly. Browse genres, choose,
                rent in minutes. Seamlessly manage your reading adventures with
                our intuitive platform
              </p>
            </div>
            <img
              src={RightImage}
              alt="gambar"
              className="order-1 scale-125 rounded-lg md:order-2 lg:scale-100"
            />
          </div>
        </section>

        <section className="p-6 mt-5 xl:mt-30 font-plusJakarta">
          <div>
            <div>
              <p className="text-lg font-semibold uppercase text-primary ">
                REVIEWS
              </p>
              <h1 className="font-bold font-plusJakarta text-[24px] xl:text-[48px]">
                💬• Reviews of Others
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="mt-[50px] xl:mt-[87px]    overflow-x-hidden">
                <div className="flex flex-nowrap justify-center md:justify-between    md:overflow-x-auto gap-[15px]">
                  <div className="flex w-[100%] mx-auto md:min-w-[365px] md:max-w-[366px]   flex-col items-center gap-[30px] border  px-[35px] py-10 rounded-[5px] border-solid border-[#DEDEDE] bg-white">
                    <div className="grid place-items-center">
                      <img
                        src={"/cover1.png"}
                        alt={"cover 1"}
                        className="rounded-full max-w-[150px]"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p
                        className=" max-h-[120px] min-h-[100px] overflow-y-auto  text-neutral-500 text-center text-base  font-medium leading-[26px] tracking-[0.2px]"
                        style={{ fontFamily: "Plus Jakarta medium" }}
                      >
                        Engaging plot, vivid characters; a captivating read that
                        lingers in your thoughts.
                      </p>
                      <div className="flex flex-col  items-center justify-center gap-[15px]  my-[15px]">
                        <p
                          className="text-[#23A6F0] text-sm not-italic font-semibold leading-6 tracking-[0.2px]"
                          style={{ fontFamily: "Plus Jakarta Sans" }}
                        >
                          Ahmad Saugi
                        </p>
                        <p
                          className="text-[#252B42] text-sm not-italic font-semibold leading-6 tracking-[0.2px]"
                          style={{ fontFamily: "Plus Jakarta Sans" }}
                        >
                          Programmer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[50px] xl:mt-[87px]    overflow-x-hidden">
                <div className="flex flex-nowrap justify-center md:justify-between    md:overflow-x-auto gap-[15px]">
                  <div className="flex w-[100%] mx-auto md:min-w-[365px] md:max-w-[366px]   flex-col items-center gap-[30px] border  px-[35px] py-10 rounded-[5px] border-solid border-[#DEDEDE] bg-white">
                    <div className="grid place-items-center">
                      <img
                        src={"/cover3.jpg"}
                        alt={"cover 3"}
                        className="rounded-full max-w-[150px]"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p
                        className=" max-h-[120px] min-h-[100px] overflow-y-auto  text-neutral-500 text-center text-base  font-medium leading-[26px] tracking-[0.2px]"
                        style={{ fontFamily: "Plus Jakarta medium" }}
                      >
                        Engaging plot, vivid characters; a captivating read that
                        lingers in your thoughts.
                      </p>
                      <div className="flex flex-col  items-center justify-center gap-[15px]  my-[15px]">
                        <p
                          className="text-[#23A6F0] text-sm not-italic font-semibold leading-6 tracking-[0.2px]"
                          style={{ fontFamily: "Plus Jakarta Sans" }}
                        >
                          Syaid Alfarishi
                        </p>
                        <p
                          className="text-[#252B42] text-sm not-italic font-semibold leading-6 tracking-[0.2px]"
                          style={{ fontFamily: "Plus Jakarta Sans" }}
                        >
                          Programmer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[50px] xl:mt-[87px]    overflow-x-hidden">
                <div className="flex flex-nowrap justify-center md:justify-between    md:overflow-x-auto gap-[15px]">
                  <div className="flex w-[100%] mx-auto md:min-w-[365px] md:max-w-[366px]   flex-col items-center gap-[30px] border  px-[35px] py-10 rounded-[5px] border-solid border-[#DEDEDE] bg-white">
                    <div className="grid place-items-center">
                      <img
                        src={"/cover2.png"}
                        alt={"cover 2"}
                        className="rounded-full max-w-[150px]"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p
                        className=" max-h-[120px] min-h-[100px] overflow-y-auto  text-neutral-500 text-center text-base  font-medium leading-[26px] tracking-[0.2px]"
                        style={{ fontFamily: "Plus Jakarta medium" }}
                      >
                        Immersive storytelling! An enriching literary experience
                        worth savoring and sharing.
                      </p>
                      <div className="flex flex-col  items-center justify-center gap-[15px]  my-[15px]">
                        <p
                          className="text-[#23A6F0] text-sm not-italic font-semibold leading-6 tracking-[0.2px]"
                          style={{ fontFamily: "Plus Jakarta Sans" }}
                        >
                          Wahyu Amirulloh
                        </p>
                        <p
                          className="text-[#252B42] text-sm not-italic font-semibold leading-6 tracking-[0.2px]"
                          style={{ fontFamily: "Plus Jakarta Sans" }}
                        >
                          UI/UX Designer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-6 mt-5 xl:mt-30 font-plusJakarta">
          <div>
            <div>
              <p className="text-lg font-semibold uppercase text-primary ">
                LOCATION
              </p>
              <h1 className="font-bold font-plusJakarta text-[24px] xl:text-[48px]">
                🗺• Our Library Location
              </h1>
            </div>
            <div>
              <img src="/Location.jpg" alt="location_map" className="w-full " />
            </div>
          </div>
        </section>
      </main>

      <footer className="grid py-5 font-semibold text-white capitalize bg-blue-500 place-items-center">
        &copy; 2024 Lidia. All rights reserved.
      </footer>
    </>
  );
}

export default App;
