import { Routes, Route } from "react-router-dom";

/* ==========================
   AUTH PAGES
========================== */

import RoleSelection from "../pages/auth/RoleSelection";

import JobSeekerLogin from "../pages/auth/JobSeekerLogin";
import JobSeekerRegister from "../pages/auth/JobSeekerRegister";

import EmployerLogin from "../pages/auth/EmployerLogin";
import EmployerRegister from "../pages/auth/EmployerRegister";

import AdminLogin from "../pages/auth/AdminLogin";

import ForgotPassword from "../pages/auth/ForgotPassword";

/* ==========================
   DASHBOARD
========================== */

import Dashboard from "../pages/dashboard/Dashboard";
import EmployerDashboard from "../pages/employer/EmployerDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";

/* ==========================
   JOB SEEKER MODULE
========================== */

import SearchJobs from "../pages/jobs/SearchJobs";
import JobDetails from "../pages/jobs/JobDetails";

import AppliedJobs from "../pages/jobs/AppliedJobs";
import SavedJobs from "../pages/jobs/SavedJobs";

import ApplicationTracking from "../pages/jobs/ApplicationTracking";
import JobAlerts from "../pages/jobs/JobAlerts";

import ResumeUpload from "../pages/jobs/ResumeUpload";
import ResumeBuilder from "../pages/jobs/ResumeBuilder";
import VideoResume from "../pages/jobs/VideoResume";

import RemoteJobs from "../pages/jobs/RemoteJobs";
import SkillTests from "../pages/jobs/SkillTests";
import SalaryInsights from "../pages/jobs/SalaryInsights";

import MyProfile from "../pages/profile/MyProfile";

import CompanyProfile from "../pages/employer/CompanyProfile";
import PostJob from "../pages/employer/PostJob";
import ManageJobs from "../pages/employer/ManageJobs";
import Applicants from "../pages/employer/Applicants";
import Shortlisted from "../pages/employer/Shortlisted";
import InterviewSchedule from "../pages/employer/InterviewSchedule";
import ResumeDatabase from "../pages/employer/ResumeDatabase";
import CandidateSearch from "../pages/employer/CandidateSearch";
import BulkEmail from "../pages/employer/BulkEmail";
import CompanyBranding from "../pages/employer/CompanyBranding";
import SubscriptionPlan from "../pages/employer/SubscriptionPlan";

import Chat from "../pages/employer/Chat";

import Users from "../pages/admin/Users";
import Employers from "../pages/admin/Employers";
import Jobs from "../pages/admin/Jobs";

import JobModeration from "../pages/admin/JobModeration";
import CMS from "../pages/admin/CMS";

import Reports from "../pages/admin/Reports";
import Analytics from "../pages/admin/Analytics";

import Payments from "../pages/admin/Payments";
import Plans from "../pages/admin/Plans";

import SEOSettings from "../pages/admin/SEOSettings";
import SiteSettings from "../pages/admin/SiteSettings";

import Notifications from "../pages/admin/Notifications";
import GlobalSearch from "../pages/admin/GlobalSearch";
import ActivityLogs from "../pages/admin/ActivityLogs";
import AuditLogs from "../pages/admin/AuditLogs";

import ContactMessages from "../pages/admin/ContactMessages";
import SupportTickets from "../pages/admin/SupportTickets";
import Categories from "../pages/admin/Categories";
import SkillsMaster from "../pages/admin/SkillsMaster";
import Countries from "../pages/admin/Countries";
import SecuritySettings from "../pages/admin/SecuritySettings"

import RolePermissions from "../pages/admin/RolePermissions";
import AdminManagement from "../pages/admin/AdminManagement";
import EmailTemplates from "../pages/admin/EmailTemplates";
import NewsletterSubscribers from "../pages/admin/NewsletterSubscribers";
import DatabaseManager from "../pages/admin/DatabaseManager";
import SystemBackup from "../pages/admin/SystemBackup";

import Pages from "../pages/admin/Pages";
import Blogs from "../pages/admin/Blogs";
import Faq from "../pages/admin/Faq";

import Coupons from "../pages/admin/Coupons";



export default function AppRoutes() {
  return (
    <Routes>

      {/* ==========================
          ROLE SELECTION
      ========================== */}

      <Route
        path="/"
        element={<RoleSelection />}
      />

      {/* ==========================
          JOB SEEKER AUTH
      ========================== */}

      <Route
        path="/jobseeker/login"
        element={<JobSeekerLogin />}
      />

      <Route
        path="/jobseeker/register"
        element={<JobSeekerRegister />}
      />

      {/* ==========================
          EMPLOYER AUTH
      ========================== */}

      <Route
        path="/employer/login"
        element={<EmployerLogin />}
      />

      <Route
        path="/employer/register"
        element={<EmployerRegister />}
      />

      {/* ==========================
          ADMIN AUTH
      ========================== */}

      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />

      {/* ==========================
          COMMON
      ========================== */}

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      {/* ==========================
          DASHBOARDS
      ========================== */}

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/employer/dashboard"
        element={<EmployerDashboard />}
      />

      <Route
        path="/admin/dashboard"
        element={<AdminDashboard />}
      />

      {/* ==========================
          JOB SEARCH
      ========================== */}

      <Route
        path="/jobs"
        element={<SearchJobs />}
      />

      <Route
        path="/jobs/:id"
        element={<JobDetails />}
      />

      {/* ==========================
          JOB APPLICATIONS
      ========================== */}

      <Route
        path="/applied-jobs"
        element={<AppliedJobs />}
      />

      <Route
        path="/saved-jobs"
        element={<SavedJobs />}
      />

      <Route
        path="/application-tracking"
        element={<ApplicationTracking />}
      />

      <Route
        path="/job-alerts"
        element={<JobAlerts />}
      />

      {/* ==========================
          RESUME MODULE
      ========================== */}

      <Route
        path="/resume-upload"
        element={<ResumeUpload />}
      />

      <Route
        path="/resume-builder"
        element={<ResumeBuilder />}
      />

      <Route
        path="/video-resume"
        element={<VideoResume />}
      />

      {/* ==========================
          ADVANCED FEATURES
      ========================== */}

      <Route
        path="/remote-jobs"
        element={<RemoteJobs />}
      />

      <Route
        path="/skill-tests"
        element={<SkillTests />}
      />

      <Route
        path="/salary-insights"
        element={<SalaryInsights />}
      />

      <Route
  path="/profile"
  element={<MyProfile />}
/>

{/* ==========================
    EMPLOYER MODULE
========================== */}



<Route
  path="/employer/company-profile"
  element={<CompanyProfile />}
/>

<Route
  path="/employer/post-job"
  element={<PostJob />}
/>

<Route
  path="/employer/manage-jobs"
  element={<ManageJobs />}
/>

<Route
  path="/employer/applicants"
  element={<Applicants />}
/>

<Route
  path="/employer/shortlisted"
  element={<Shortlisted />}
/>

<Route
  path="/employer/interviews"
  element={<InterviewSchedule />}
/>

<Route
  path="/employer/resume-database"
  element={<ResumeDatabase />}
/>

<Route
  path="/employer/candidate-search"
  element={<CandidateSearch />}
/>

<Route
  path="/employer/bulk-email"
  element={<BulkEmail />}
/>

<Route
  path="/employer/company-branding"
  element={<CompanyBranding />}
/>

<Route
  path="/employer/subscription-plan"
  element={<SubscriptionPlan />}
/>

<Route
  path="/employer/chat"
  element={<Chat />}
/>

<Route
  path="/admin/users"
  element={<Users />}
/>

<Route
  path="/admin/employers"
  element={<Employers />}
/>

<Route
  path="/admin/jobs"
  element={<Jobs />}
/>

<Route
  path="/admin/job-moderation"
  element={<JobModeration />}
/>

<Route
  path="/admin/cms"
  element={<CMS />}
/>


<Route
  path="/admin/reports"
  element={<Reports />}
/>

<Route
  path="/admin/analytics"
  element={<Analytics />}
/>

<Route
  path="/admin/payments"
  element={<Payments />}
/>

<Route
  path="/admin/plans"
  element={<Plans />}
/>

<Route
  path="/admin/seo-settings"
  element={<SEOSettings />}
/>

<Route
  path="/admin/site-settings"
  element={<SiteSettings />}
/>


<Route
  path="/admin/notifications"
  element={<Notifications />}
/>

<Route
  path="/admin/search"
  element={<GlobalSearch />}
/>

<Route
  path="/admin/activity-logs"
  element={<ActivityLogs />}
/>

<Route
  path="/admin/audit-logs"
  element={<AuditLogs />}
/>

<Route path="/admin/contact-messages" element={<ContactMessages />} />
      <Route path="/admin/support-tickets" element={<SupportTickets />} />
      <Route path="/admin/categories" element={<Categories />} />
      <Route path="/admin/skills" element={<SkillsMaster />} />
      <Route path="/admin/countries" element={<Countries />} />
      <Route path="/admin/security" element={<SecuritySettings />} />

      <Route path="/admin/roles" element={<RolePermissions />} />
<Route path="/admin/admin-management" element={<AdminManagement />} />
<Route path="/admin/email-templates" element={<EmailTemplates />} />
<Route path="/admin/newsletter" element={<NewsletterSubscribers />} />
<Route path="/admin/database-backup" element={<DatabaseManager />} />
<Route path="/admin/system-backup" element={<SystemBackup />} />

<Route path="/admin/pages" element={<Pages />} />
<Route path="/admin/blog" element={<Blogs />} />
<Route path="/admin/faq" element={<Faq />} />

<Route path="/admin/coupons" element={<Coupons />} />


    </Routes>
  );
}