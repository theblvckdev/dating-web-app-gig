const evnetsCities: string[] = [
  "Kaduna",
  "Lago",
  "Abuja",
  "Abia",
  "Port-Hacourt",
];

const evnetsModels: string[] = ["R4M Date", "R4M For Friends", "R4M Honey"];

const EventsNear = () => {
  return (
    <>
      <section className="md:py-[4rem] py-[3rem] bg-white">
        <div className="max-w-4xl mx-auto lg:px-0 md:px-5 px-3">
          <h4 className="xl:text-4xl md:text-3xl text-2xl font-oswald font-semibold capitalize text-secondary-0">
            Find events near you
          </h4>

          <div className="my-5 flex gap-3">
            <div className="basis-1/2">
              <select className="outline-none w-full box-border p-3 ring-1 ring-secondary-0">
                <option value="All cities" selected>
                  All Cities
                </option>
                {evnetsCities.map((data, index) => {
                  return (
                    <option key={index} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="basis-1/2">
              <select className="outline-none w-full box-border p-3 ring-1 ring-secondary-0">
                <option value="All Models" selected>
                  All Models
                </option>
                {evnetsModels.map((data, index) => {
                  return (
                    <option key={index} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="p-3 rounded-full ring-1 ring-secondary-0 text-center font-poppins md:text-base text-sm">
            There haven't been any events added to this calendar yet, but please
            check back soon!
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsNear;
