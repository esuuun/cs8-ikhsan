import React from "react";

function FeatureSection() {
  const features = [
    {
      name: "Simple",
      description: "Telegram is so simple you already know how to use it.",
      icon: "/simple.png",
    },
    {
      name: "Private",
      description:
        "Telegram messages are heavily encrypted and can self-destruct.",
      icon: "/private.png",
    },
    {
      name: "Synced",
      description: "Telegram lets you access your chats from multiple devices.",
      icon: "/synced.png",
    },
    {
      name: "Fast",
      description:
        "Telegram delivers messages faster than any other application.",
      icon: "/fast.png",
    },
    {
      name: "Powerful",
      description:
        "Telegram has no limits on the size of your media and chats.",
      icon: "/powerful.png",
    },
    {
      name: "Open",
      description:
        "Telegram has an open API and source code free for everyone.",
      icon: "/open.png",
    },
    {
      name: "Secure",
      description: "Telegram keeps your messages safe from hacker attacks.",
      icon: "/secure.png",
    },
    {
      name: "Social",
      description: "Telegram groups can hold up to 200,000 members.",
      icon: "/social.png",
    },
    {
      name: "Expressive",
      description: "Telegram lets you completely customize your messenger.",
      icon: "/expressive.png",
    },
  ];

  return (
    <div class="max-w-6xl mx-auto">
      <h2 class="text-foreground sm:text-4xl text-2xl font-bold text-center mb-16">
        Why<span className="text-primary"> Telegram </span>?
      </h2>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-12">
        {features.map((item, index) => (
          <div
            class="p-4 flex gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
            key={index}
          >
            <div class="w-16 h-16 bg-secondary p-3 rounded-full shrink-0">
              <img src={item.icon} alt={item.name} class="w-full h-full" />
            </div>
            <div>
              <h3 class="text-foreground text-lg font-semibold mb-3">
                {item.name}
              </h3>
              <p class="text-slate-400 font-medium text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
