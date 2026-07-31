import JobSeekerLayout from "../../components/layout/jobseeker/JobSeekerLayout";
import skillTestsData from "../../data/skillTestsData";

export default function SkillTests() {
  return (
    <JobSeekerLayout>

      <h1 className="text-3xl font-bold mb-6">
        Skill Tests
      </h1>

      <div className="grid lg:grid-cols-3 gap-6">

        {skillTestsData.map((test) => (

          <div
            key={test.id}
            className="bg-white p-5 rounded-2xl shadow"
          >
            <h3 className="font-bold">
              {test.title}
            </h3>

            <p>
              Questions: {test.questions}
            </p>

            <p>
              Duration: {test.duration}
            </p>

            <button
              className="
              mt-4
              bg-green-600
              text-white
              px-4
              py-2
              rounded-lg
              "
            >
              Start Test
            </button>

          </div>

        ))}

      </div>

    </JobSeekerLayout>
  );
}