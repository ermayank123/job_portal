import EmployerSidebar from "./EmployerSidebar";
import EmployerHeader from "./EmployerHeader";

export default function EmployerLayout({ children }) {
  return (
    <div className="bg-slate-100 min-h-screen">

      <EmployerSidebar />

      <div className="ml-[280px] min-h-screen">

        <EmployerHeader />

        <main className="p-6">
          {children}
        </main>

      </div>

    </div>
  );
}