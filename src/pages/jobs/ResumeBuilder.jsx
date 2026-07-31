import JobSeekerLayout from "../../components/layout/jobseeker/JobSeekerLayout";
import resumeTemplatesData from "../../data/resumeTemplatesData";

export default function ResumeBuilder() {
  return (
    <JobSeekerLayout>

      <h1 className="text-3xl font-bold mb-6">
        Resume Builder
      </h1>

      <div className="grid grid-cols-4 gap-6">

        {resumeTemplatesData.map((item) => (

          <div
            key={item.id}
            className="
            bg-white
            p-5
            rounded-2xl
            shadow
            "
          >
            <h3 className="font-bold">
              {item.name}
            </h3>

            <button
              className="
              mt-4
              bg-blue-600
              text-white
              px-4
              py-2
              rounded-lg
              "
            >
              Use Template
            </button>

          </div>

        ))}

      </div>

    </JobSeekerLayout>
  );
}