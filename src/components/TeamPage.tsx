import React from "react";
import { Linkedin } from "lucide-react";
import { teamData } from "../data/teamMembers";
import { ImageWithFallback } from "./utils/ImageWithFallback";

export function TeamPage() {
  const { leader, members } = teamData;

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Grid Background */}
      <div className="grid-bg bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-3 sm:mb-4">
            Náš tím
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl max-w-3xl leading-relaxed">
            Spoznajte skvelých ľudí, ktorí pracujú na tomto projekte
          </p>
        </div>
      </div>

      {/* Team Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Leader */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl text-gray-900 mb-6 sm:mb-10">
            Vedúci projektu
          </h2>
          <div className="flex flex-row gap-4 sm:gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src={
                    leader.photo ||
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
                  }
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 mb-2">{leader.name}</h3>
              <p className="text-gray-700 mb-4 sm:mb-6">{leader.role}</p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                {leader.description}
              </p>
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <h2 className="text-2xl sm:text-3xl text-gray-900 mb-6 sm:mb-10">
          Členovia tímu
        </h2>
        <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-10 sm:gap-y-12 lg:gap-y-16">
          {members.map((member, index) => (
            <div
              key={member.id}
              className="flex flex-row gap-3 sm:gap-4 md:gap-6 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-3xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src={
                      member.photo ||
                      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
                    }
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-700 mb-3 sm:mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-3 sm:mb-4">
                  {member.description}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-900 transition-colors text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
