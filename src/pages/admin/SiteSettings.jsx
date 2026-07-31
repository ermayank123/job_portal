import { useState } from "react";
import AdminLayout from "../../components/layout/admin/AdminLayout";
import siteSettingsData from "../../data/siteSettingsData";

export default function SiteSettings() {

  const [settings, setSettings] =
    useState(siteSettingsData);

  return (
    <AdminLayout>

      <div className="bg-white rounded-xl shadow p-6">

        <h1 className="text-3xl font-bold mb-6">
          Site Settings
        </h1>

        <div className="space-y-5">

          <div>
            <label className="block font-medium mb-2">
              Site Name
            </label>

            <input
              type="text"
              value={settings.siteName}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  siteName: e.target.value
                })
              }
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Support Email
            </label>

            <input
              type="email"
              value={settings.supportEmail}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  supportEmail: e.target.value
                })
              }
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Contact Number
            </label>

            <input
              type="text"
              value={settings.contactNumber}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  contactNumber: e.target.value
                })
              }
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Timezone
            </label>

            <select
              value={settings.timezone}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  timezone: e.target.value
                })
              }
              className="w-full border p-3 rounded-lg"
            >
              <option>Asia/Kolkata</option>
              <option>UTC</option>
              <option>America/New_York</option>
            </select>
          </div>

          <div className="flex items-center gap-3">

            <input
              type="checkbox"
              checked={settings.maintenanceMode}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  maintenanceMode:
                    e.target.checked
                })
              }
            />

            <label>
              Enable Maintenance Mode
            </label>

          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Save Site Settings
          </button>

        </div>

      </div>

    </AdminLayout>
  );
}