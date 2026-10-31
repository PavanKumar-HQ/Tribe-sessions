import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { activities } from "@/data/content";
import { accentText } from "@/components/tribe/accent";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/activity/$id")({
  loader: ({ params }) => {
    const activity = activities.find((a) => a.id === params.id);
    if (!activity) {
      throw notFound();
    }
    return activity;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.name} — Varsity Tribe School Sessions` }],
  }),
  component: ActivityDetail,
});

function ActivityDetail() {
  const activity = Route.useLoaderData();

  const imgMap: Record<string, string> = {
    "risk-reward": gallery1,
    "story-data": gallery2,
    "bias-lab": gallery3,
    "build-feature": gallery1,
  };
  const heroImage = imgMap[activity.id] || gallery1;

  return (
    <main className="min-h-screen bg-background pb-32">
      <div className="fixed top-6 left-6 z-50">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-navy shadow-lg backdrop-blur-md transition-all hover:bg-white hover:pr-5"
        >
          <ArrowLeft size={16} /> Back to Journey
        </Link>
      </div>

      <div className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={heroImage}
          alt={activity.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        <div className="absolute bottom-12 left-0 w-full px-6">
          <div className="mx-auto max-w-5xl">
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs uppercase tracking-widest font-semibold border bg-white/80 backdrop-blur-md shadow-sm ${accentText[activity.accent]}`}
            >
              {activity.objective}
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold text-foreground sm:text-7xl">
              {activity.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-12">
            <section>
              <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                How it worked
              </h2>
              <p className="mt-4 text-xl leading-relaxed text-foreground">{activity.how}</p>
            </section>

            <section>
              <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Student Participation
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-foreground">
                {activity.participation}
              </p>
            </section>

            <section>
              <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Results</h2>
              <p className="mt-4 text-lg leading-relaxed text-foreground">{activity.result}</p>
            </section>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl bg-muted/30 p-8 sm:p-12 border border-border/50">
              <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Tribe Reflection
              </h2>
              <p className="mt-6 font-display text-2xl font-medium leading-snug text-foreground">
                "{activity.tribeReflection}"
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-sm">
              <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Student Reaction
              </h2>
              <p className={`mt-6 font-display text-2xl italic ${accentText[activity.accent]}`}>
                {activity.studentReaction}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
