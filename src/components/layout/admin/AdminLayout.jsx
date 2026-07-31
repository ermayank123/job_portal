import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

export default function AdminLayout({ children }) {
  return (
    <div className="bg-slate-100 min-h-screen">

      <AdminSidebar />

      <div className="ml-72 p-6">

        <AdminHeader />

        <main className="mt-6">
          {children}
        </main>

      </div>

    </div>
  );
}