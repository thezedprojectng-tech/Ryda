"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const plans = [
  {
    id: "pay-as-you-ride",
    name: "Pay As You Ride",
    description: "Flexible campus transit whenever you need a quick hop.",
    price: "₦[PRICE]",
    period: "/ ride",
    planType: "pay-per-ride",
    buttonText: "Start Riding",
    buttonVariant: "outline",
    cardClassName: "border-navy/20 bg-white",
    hasShadow: false,
    features: [
      { name: "Instant QR scan & unlock", included: true },
      { name: "Access to all campus docking stations", included: true },
      { name: "Pay only for the distance you ride", included: true },
      { name: "Pause & lock between lecture classes", included: true },
      { name: "No recurring subscription or commitment", included: true },
      { name: "In-app trip receipts & safety tracking", included: true },
    ],
  },
  {
    id: "semester-pass",
    name: "Semester Pass",
    description: "Our best value plan for full-time students.",
    price: "₦[PRICE]",
    period: "/ semester",
    planType: "passes",
    buttonText: "Get Semester Pass",
    buttonVariant: "primary",
    cardClassName: "border-2 border-navy bg-white",
    isPopular: true,
    hasShadow: true,
    shadowClassName: "bg-[repeating-linear-gradient(45deg,#0A2D6B_0,#0A2D6B_1px,transparent_1px,transparent_6px)] opacity-25",
    features: [
      { name: "Unlimited rides throughout the entire semester", included: true },
      { name: "Zero unlock fees at any Ryda station", included: true },
      { name: "Verified student pricing with student ID", included: true },
      { name: "Free bike reservations up to 15 mins ahead", included: true },
      { name: "Priority student support & lost-item assistance", included: true },
      { name: "Free helmet checkout at major campus hubs", included: true },
      { name: "Pause & lock between lectures included", included: true },
    ],
  },
  {
    id: "day-pass",
    name: "Day Pass",
    description: "Unlimited rides for a full day across all campus routes.",
    price: "₦[PRICE]",
    period: "/ day",
    planType: "passes",
    buttonText: "Get Day Pass",
    buttonVariant: "dark",
    cardClassName: "border-navy/20 bg-white",
    hasShadow: true,
    shadowClassName: "bg-[repeating-linear-gradient(45deg,#0A2D6B_0,#0A2D6B_1px,transparent_1px,transparent_6px)] opacity-15",
    features: [
      { name: "Unlimited rides for 24 hours", included: true },
      { name: "Zero unlock fees on all trips", included: true },
      { name: "Perfect for exam days & campus events", included: true },
      { name: "Station-to-station unlimited transfers", included: true },
      { name: "Pause & lock between classes", included: true },
      { name: "No automatic renewal or surprise charges", included: true },
    ],
  },
];

export function Pricing() {
  const [activeTab, setActiveTab] = useState<"all" | "pay-per-ride" | "passes">("all");

  const filteredPlans = activeTab === "all" 
    ? plans 
    : plans.filter(p => activeTab === "passes" ? p.planType === "passes" || p.id === "semester-pass" : p.planType === activeTab);

  return (
    <section id="pricing" className="w-full bg-white pb-24 flex flex-col" aria-labelledby="pricing-title">
      {/* Top Dashed Divider */}
      <div className="w-full h-8 border-y border-navy/15 relative overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] text-navy"></div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pt-20 md:px-8 flex flex-col items-center">
        <div className="text-center max-w-xl mb-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-navy/60 mb-2 block">
            Student-Friendly Pricing
          </span>
          <h2 id="pricing-title" className="text-center text-4xl font-bold tracking-tight text-navy md:text-[3.5rem] leading-none mb-4">
            Pricing
          </h2>
          <p className="text-navy/70 text-base leading-relaxed">
            Transparent fares made for student budgets. Choose between single trips or unlimited campus passes.
          </p>
        </div>

        {/* Toggle: Pay per ride / Passes */}
        <div className="flex items-center border border-navy/20 p-1 mb-16 bg-navy/5" role="tablist" aria-label="Pricing mode">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "all"}
            onClick={() => setActiveTab("all")}
            className={cn(
              "min-h-[44px] px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy",
              activeTab === "all" ? "bg-navy text-white shadow-xs" : "bg-transparent text-navy hover:bg-navy/10"
            )}
          >
            All Plans
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "pay-per-ride"}
            onClick={() => setActiveTab("pay-per-ride")}
            className={cn(
              "min-h-[44px] px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy",
              activeTab === "pay-per-ride" ? "bg-navy text-white shadow-xs" : "bg-transparent text-navy hover:bg-navy/10"
            )}
          >
            Pay per ride
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "passes"}
            onClick={() => setActiveTab("passes")}
            className={cn(
              "min-h-[44px] px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy",
              activeTab === "passes" ? "bg-navy text-white shadow-xs" : "bg-transparent text-navy hover:bg-navy/10"
            )}
          >
            Passes
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {filteredPlans.map((plan) => (
            <div key={plan.id} className="relative flex flex-col w-full h-full">
              {/* Decorative Background Shadow */}
              {plan.hasShadow && (
                <div
                  className={cn(
                    "absolute top-4 -right-4 md:top-6 md:-right-6 bottom-0 left-4 md:left-6 w-full h-full -z-10",
                    plan.shadowClassName
                  )}
                  aria-hidden="true"
                />
              )}

              {/* Card Content */}
              <div
                className={cn(
                  "relative flex flex-col w-full h-full p-8 bg-white z-10",
                  plan.cardClassName
                )}
              >
                {plan.isPopular && (
                  <div className="absolute top-4 right-4 bg-navy text-lime px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider">
                    Most popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-navy tracking-tight mb-3">
                  {plan.name}
                </h3>

                <p className="text-navy/70 text-sm leading-relaxed mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-8">
                  <span className="text-4xl font-extrabold text-navy tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-navy/60 text-sm font-medium">{plan.period}</span>
                </div>

                <div className="flex flex-col gap-3.5 mb-10 flex-1">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className={cn(
                          "mt-1 shrink-0 size-4 flex items-center justify-center rounded-xs",
                          feature.included
                            ? "bg-navy text-lime"
                            : "border border-navy/30 bg-transparent"
                        )}
                        aria-hidden="true"
                      >
                        {feature.included && (
                          <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-[13px] leading-relaxed text-navy/85">
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#cta"
                  className={cn(
                    "w-full min-h-[44px] px-6 py-3 text-sm font-bold flex items-center justify-center transition-colors mt-auto text-center focus-visible:outline-none focus-visible:ring-2",
                    plan.buttonVariant === "outline" && "border border-navy/30 text-navy hover:bg-navy/5 focus-visible:ring-navy",
                    plan.buttonVariant === "primary" && "bg-lime text-navy hover:bg-lime-hover shadow-sm focus-visible:ring-navy",
                    plan.buttonVariant === "dark" && "bg-navy text-white hover:bg-navy-light focus-visible:ring-lime"
                  )}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
