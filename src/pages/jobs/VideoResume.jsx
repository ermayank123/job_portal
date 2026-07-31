import JobSeekerLayout from "../../components/layout/jobseeker/JobSeekerLayout";
import videoResumeData from "../../data/videoResumeData";

export default function VideoResume() {
  return (
    <JobSeekerLayout>

      <h1 className="text-3xl font-bold mb-6">
        Video Resume
      </h1>

      <div className="grid grid-cols-3 gap-6">

        {videoResumeData.map((item) => (

          <div
            key={item.id}
            className="
            bg-white
            rounded-2xl
            shadow
            overflow-hidden
            "
          >
            <img
              src={item.thumbnail}
              alt=""
            />

            <div className="p-4">

              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500">
                {item.duration}
              </p>

            </div>

          </div>

        ))}

      </div>

    </JobSeekerLayout>
  );
}