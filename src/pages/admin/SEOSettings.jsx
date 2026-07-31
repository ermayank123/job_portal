import { useState } from "react";
import AdminLayout from "../../components/layout/admin/AdminLayout";
import seoData from "../../data/seoData";

export default function SEOSettings() {

  const [seo, setSeo] = useState(seoData);

  return (
    <AdminLayout>

      <div className="bg-white rounded-xl shadow p-6">

        <h1 className="text-3xl font-bold mb-6">
          SEO Settings
        </h1>

        <div className="space-y-5">

          <div>
            <label className="font-medium block mb-2">
              Meta Title
            </label>

            <input
              type="text"
              value={seo.metaTitle}
              onChange={(e) =>
                setSeo({
                  ...seo,
                  metaTitle: e.target.value
                })
              }
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="font-medium block mb-2">
              Meta Description
            </label>

            <textarea
              rows="4"
              value={seo.metaDescription}
              onChange={(e) =>
                setSeo({
                  ...seo,
                  metaDescription: e.target.value
                })
              }
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="font-medium block mb-2">
              Keywords
            </label>

            <input
              type="text"
              value={seo.keywords}
              onChange={(e) =>
                setSeo({
                  ...seo,
                  keywords: e.target.value
                })
              }
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="font-medium block mb-2">
              Google Analytics ID
            </label>

            <input
              type="text"
              value={seo.googleAnalytics}
              onChange={(e) =>
                setSeo({
                  ...seo,
                  googleAnalytics: e.target.value
                })
              }
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Save SEO Settings
          </button>

        </div>

      </div>

    </AdminLayout>
  );
}