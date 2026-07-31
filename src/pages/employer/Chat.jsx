import { useState } from "react";
import EmployerLayout from "../../components/layout/employer/EmployerLayout";

export default function Chat() {

  const [message, setMessage] = useState("");

  const messages = [
    {
      id: 1,
      sender: "candidate",
      name: "Mayank Katare",
      text: "Hello Sir, I have submitted my assignment."
    },
    {
      id: 2,
      sender: "employer",
      text: "Great. We will review it today."
    }
  ];

  return (
    <EmployerLayout>

      <div className="bg-white rounded-2xl shadow h-[85vh] flex overflow-hidden">

        {/* Candidate List */}

        <div className="w-80 border-r bg-gray-50">

          <div className="p-4 border-b">

            <h2 className="font-bold text-lg">
              Shortlisted Candidates
            </h2>

          </div>

          <div className="p-3">

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 cursor-pointer">

              <h3 className="font-semibold">
                Mayank Katare
              </h3>

              <p className="text-sm text-gray-500">
                Laravel Developer
              </p>

            </div>

          </div>

        </div>

        {/* Chat Area */}

        <div className="flex-1 flex flex-col">

          {/* Header */}

          <div className="p-4 border-b flex items-center justify-between">

            <div>

              <h3 className="font-semibold text-lg">
                Mayank Katare
              </h3>

              <p className="text-sm text-green-600">
                Online
              </p>

            </div>

          </div>

          {/* Messages */}

          <div className="flex-1 overflow-y-auto p-5 bg-slate-50">

            {messages.map((msg) => (

              <div
                key={msg.id}
                className={`mb-4 flex ${
                  msg.sender === "employer"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-md px-4 py-3 rounded-2xl ${
                    msg.sender === "employer"
                      ? "bg-blue-600 text-white"
                      : "bg-white shadow"
                  }`}
                >

                  {msg.text}

                </div>

              </div>

            ))}

          </div>

          {/* Message Box */}

          <div className="p-4 border-t bg-white">

            <div className="flex gap-3">

              <input
                type="text"
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                placeholder="Type a message..."
                className="flex-1 border rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              />

              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl"
              >
                Send
              </button>

            </div>

          </div>

        </div>

      </div>

    </EmployerLayout>
  );
}