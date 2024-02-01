import { TiWorld } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";

const jobs = [
  {
    title: "Developer",
    link: "https://www.linkedin.com/company/levelupesg/jobs/developer",
  },
  {
    title: "Project manager",
    link: "https://www.linkedin.com/company/levelupesg/jobs/designer",
  },
  {
    title: "Senior Designer",
    link: "https://www.linkedin.com/company/levelupesg/jobs/designer",
  },
  {
    title: "Operations",
    link: "https://www.linkedin.com/company/levelupesg/jobs/designer",
  },
  {
    title: "Sales",
    link: "https://www.linkedin.com/company/levelupesg/jobs/designer",
  },
];

const Jobs = () => {


  return (
    <>
      <section className="jobs max-w-7xl mx-auto">
        <div className="w-full py-10 px-4 md:px-8 lg:px-0">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className="mb-6 font-bold text-4xl md:text-5xl leading-[1.2]">
                Job openings
              </h2>
              <p className="text-lg">
                Join us on this journey and find your spot to be an Impact
                Maker.
              </p>
            </div>
            <div className="mt-8">
              {/* Mapping job openings */}
              {jobs.map((job, index) => (
                <a href={job.link} target="_blank" rel="noopener noreferrer" key={index}>
                  <div className="mb-6 p-4 border border-[#e6e6e5] rounded-md transition duration-300 hover:bg-[#02c2ab] flex justify-between items-center">
                    <h3 className="w-[300px] text-lg md:text-xl font-bold">{job.title}</h3>
                    <div className="w-[200px] text-2xl">
                      <TiWorld />
                    </div>
                    <div className="flex justify-end items-center w-[200px] gap-4">
                      <span className="">Apply</span>
                      <div className="p-2 text-[20px] rounded-md bg-[#02c2ab]">
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;