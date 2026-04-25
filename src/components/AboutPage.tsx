import React from "react";
import { ImageWithFallback } from "./utils/ImageWithFallback";
import { Zap, Shield, Users, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
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
    },
    {
      icon: Shield,
      title: "Ochrana proti zneužitiu",
      description:
        "Implementované bezpečnostné mechanizmy na zabránenie zneužitia systému a ochranu citlivých právnych údajov.",
    },
    {
      icon: Zap,
      title: "Šablóny na prompty",
      description:
        "Knižnica optimalizovaných prompt šablón pre rôzne typy právnych úkonov a dokumentov.",
    },
    {
      icon: Users,
      title: "Chatovacia aplikácia",
      description:
        "Moderné používateľské rozhranie s AI asistentom pre každodennú prácu právnikov.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-gray-100">
      {/* Hero Section - Minimalist & Typographic */}
      <section className="container mx-auto px-6 pt-24 pb-20 sm:pt-32 sm:pb-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-600 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Projekt vo vývoji
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-gray-900 tracking-tight mb-8 leading-[1.1]">
            Budúcnosť tvorby zmlúv <br className="hidden sm:block" />
            <span className="text-gray-400">riadená umelou inteligenciou.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl font-light">
            Tvoríme AI asistenta novej generácie pre právnikov. Náš nástroj 
            automatizuje pripomienkovanie zmlúv, využíva RAG s overenými 
            šablónami a zvyšuje efektivitu práce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gray-100 text-gray-500 hover:bg-gray-100 border border-gray-200 shadow-none cursor-not-allowed text-base px-8 h-14 rounded-xl"
              onClick={(e) => e.preventDefault()}
            >
              Aplikáciu pripravujeme
              <ArrowRight className="w-5 h-5 ml-2 opacity-50" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-200 text-gray-900 hover:bg-gray-50 hover:border-gray-300 text-base px-8 h-14 rounded-xl shadow-sm transition-all"
              onClick={() => navigate("/team")}
            >
              Spoznať tím
            </Button>
          </div>
        </div>
      </section>

      {/* App Preview - Clean presentation without gradients */}
      <section className="container mx-auto px-6 pb-24">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-2 sm:p-4 shadow-sm">
          <div className="rounded-xl overflow-hidden border border-gray-200/50 bg-white">
            <ImageWithFallback
              src="./app.png"
              alt="Chatovacia aplikácia pre právnikov"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features - Strict Grid */}
      <section className="border-t border-gray-100 bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-4">
              Komplexné riešenie
            </h2>
            <p className="text-gray-500 text-lg max-w-xl font-light">
              Navrhnuté pre modernú právnickú prax s dôrazom na bezpečnosť a presnosť.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-white group-hover:border-gray-200 group-hover:shadow-sm transition-all">
                    <Icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Context / Objectives - Editorial layout */}
      <section className="border-t border-gray-100 bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-6">
                O projekte
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                Cieľom projektu je vytvoriť intuitívnu AI chatovú aplikáciu, ktorá 
                automatizuje tvorbu zmlúv a zabezpečuje vysokú úroveň ochrany údajov. 
                Aplikácia poskytne právnikom knižnicu šablón pre efektívnu prácu s AI.
              </p>
              <ul className="space-y-4">
                {[
                  "Návrh a implementácia používateľského rozhrania",
                  "Vývoj backend systému a API integrácií",
                  "Trénovanie a optimalizácia RAG modelov",
                  "Implementácia bezpečnostných mechanizmov"
                ].map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-full min-h-[400px] bg-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYxNTk1NzU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
