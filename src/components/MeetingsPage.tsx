import React from "react";
import { Badge } from "./ui/badge";
import { Calendar, Clock, Users } from "lucide-react";
import { meetingsData } from "../data/meetings";

export function MeetingsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Grid Background */}
      <div className="grid-bg bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-3 sm:mb-4">
            Záznamy zo stretnutí
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl max-w-3xl leading-relaxed">
            Prehľad všetkých tímových stretnutí a dosiahnutých výsledkov
          </p>
        </div>
      </div>

      {/* Meetings Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-5xl">
        <div className="space-y-4 sm:space-y-6">
          {meetingsData.map((meeting) => (
            <div
              key={meeting.id}
              className="glass-card rounded-2xl p-4 sm:p-6 lg:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-1">
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-gray-900">{meeting.topic}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 text-sm sm:text-base text-gray-500">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span className="break-words">
                        {new Date(meeting.date).toLocaleDateString("sk-SK", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      {meeting.duration}
                    </span>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 self-start"
                >
                  #{meeting.id}
                </Badge>
              </div>

              <div className="mb-4 sm:mb-6">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Users className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">
                    Účastníci
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {meeting.participants[0] === "Celý tím" &&
                  meeting.participants.length === 1 ? (
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm border border-blue-200">
                      Celý tím
                    </span>
                  ) : meeting.participants[0] === "Celý tím" ? (
                    <>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm border border-blue-200">
                        Celý tím
                      </span>
                      {meeting.participants.slice(1).map((participant, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm border border-gray-200"
                        >
                          + {participant}
                        </span>
                      ))}
                    </>
                  ) : (
                    meeting.participants.map((participant, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm border border-gray-200"
                      >
                        {participant}
                      </span>
                    ))
                  )}
                </div>
              </div>

              <div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {meeting.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
