import JobSeekerSidebar from "./JobSeekerSidebar";
import JobSeekerHeader from "./JobSeekerHeader";

export default function JobSeekerLayout({ children }) {
  return (
    <div className="flex">
      <JobSeekerSidebar />

     <div className="ml-72 p-6">
        <JobSeekerHeader />

        <div className="mt-6">
          {children}
        </div>
      </div>
    </div>
  );
}