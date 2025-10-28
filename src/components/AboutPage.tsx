import React from "react";
import { ImageWithFallback } from "./utils/ImageWithFallback";
import { Zap, Shield, Users, FileText, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export function AboutPage() {
  const navigate = useNavigate();
  const features = [
    {
      icon: FileText,
      title: "Tvorenie zmlúv",
      description:
        "Automatizované generovanie zmlúv s využitím AI, ktoré šetrí čas a zabezpečuje konzistentnosť právnych dokumentov.",
      color: "accent-pink",
    },
    {
      icon: Shield,
      title: "Ochrana proti zneužitiu",
      description:
        "Implementované bezpečnostné mechanizmy na zabránenie zneužitia systému a ochranu citlivých právnych údajov.",
      color: "accent-purple",
    },
    {
      icon: Zap,
      title: "Šablóny na prompty",
      description:
        "Knižnica optimalizovaných prompt šablón pre rôzne typy právnych úkonov a dokumentov.",
      color: "accent-orange",
    },
    {
      icon: Users,
      title: "Chatovacia aplikácia",
      description:
        "Moderné používateľské rozhranie s AI asistentom pre každodennú prácu právnikov.",
      color: "accent-blue",
    },
  ];

  const objectivesText =
    "Cieľom projektu je vytvoriť intuitívnu AI-powered chatovú aplikáciu, ktorá automatizuje tvorbu zmlúv a zabezpečuje vysokú úroveň ochrany údajov. Aplikácia poskytne právnikom knižnicu šablón pre efektívnu prácu s AI a zlepší ich produktivitu pri každodenných úlohách.";

  const tasksText =
    "V rámci projektu realizujeme návrh a implementáciu používateľského rozhrania, vývoj backend systému s API integráciami, trénovanie a optimalizáciu AI modelov. Súčasťou práce je aj implementácia bezpečnostných mechanizmov, testovanie a zabezpečenie kvality aplikácie, ako aj kompletná dokumentácia a školenie používateľov.";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-purple-50 to-white grid-bg">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6 leading-tight">
                AI asistent pre právnikov s dôverou
              </h1>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed max-w-xl">
                Inovatívna chatovacia aplikácia využívajúca umelú inteligenciu
                na automatizáciu tvorby zmlúv, ochranu pred zneužitím a
                efektívnu prácu s právnymi dokumentmi.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  disabled
                  className="bg-blue-500 text-white shadow-lg relative overflow-hidden disabled:opacity-100 disabled:cursor-not-allowed striped-disabled w-full sm:w-auto"
                >
                  Vyskúšať aplikáciu
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 w-full sm:w-auto"
                  onClick={() => navigate("/meetings")}
                >
                  Čo robíme
                </Button>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-3xl blur-3xl"></div>
              <div className="relative transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="glass-card rounded-2xl p-3 sm:p-4 shadow-2xl">
                  <ImageWithFallback
                    src="./pravnik.jpg"
                    alt="Chatovacia aplikácia pre právnikov"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Features Grid */}
        <div>
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-3 sm:mb-4">
              Hlavné funkcie
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
              Komplexné riešenie pre modernú právnickú prax
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index}>
                <h3 className="text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Objectives and Tasks */}
      <div className="bg-gradient-to-b from-white to-purple-50 grid-bg">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="rounded-2xl overflow-hidden h-full order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYxNTk1NzU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="w-full h-full object-cover min-h-[300px] sm:min-h-[400px]"
              />
            </div>

            <div className="space-y-8 sm:space-y-12 order-1 lg:order-2">
              <div>
                <h2 className="text-2xl sm:text-3xl text-gray-900 mb-4 sm:mb-8">
                  Ciele projektu
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {objectivesText}
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl text-gray-900 mb-4 sm:mb-8">
                  Úlohy
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {tasksText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
