import { cn } from "../lib/utils";
import { Marquee } from "./magicui/Marquee";

const reviews = [
  {
    name: "Shafwan",
    username: "@bajuijosukangilang",
    body: "Telegram membantu banget dehh, old but gold! 🔥",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Reza",
    username: "@baldubotakjelek",
    body: "Aku dapet info banyak dari telegram! hehe, thanks telegram!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Ditya",
    username: "@sibukrapatamv",
    body: "Just WOW!😲",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Esun",
    username: "@top3orangtengiltapijago",
    body: "Top banget! Telegram itu aplikasi yang paling aku suka!",
    img: "https://avatar.vercel.sh/jane",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-foreground">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-primary">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-foreground">{body}</blockquote>
    </figure>
  );
};

export function MarqueeSection() {
  return (
    <div className="mt-28 relative flex w-full flex-col items-center justify-center overflow-hidden">
      <span className="text-foreground sm:text-4xl text-2xl font-bold text-center mb-16">
        Discover Why People Love Us💓
      </span>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
