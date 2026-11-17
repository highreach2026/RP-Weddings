import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { BLOG_ARTICLES } from "@/data/weddings";

export default function Blog() {
  const { slug } = useParams();
  const activeArticle = slug ? BLOG_ARTICLES.find((a) => a.slug === slug) : undefined;

  return (
    <PageShell>
      {({ openAppointment }) => (
        <div className="px-4 py-6 space-y-6">
          {activeArticle ? (
            <article className="space-y-5">
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft size={14} /> All Guides
              </Link>

              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.22em] text-primary">
                  {activeArticle.category} · {activeArticle.readTime}
                </p>
                <h2 className="text-3xl font-serif font-semibold leading-snug text-foreground">
                  {activeArticle.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activeArticle.excerpt}
                </p>
              </div>

              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-muted">
                <img
                  src={activeArticle.cover}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-5 pt-2">
                {activeArticle.sections.map((section) => (
                  <section key={section.heading} className="space-y-1.5">
                    <h3 className="text-lg font-serif font-semibold text-foreground">
                      {section.heading}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {section.body}
                    </p>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-border bg-secondary/40 p-5 text-center space-y-3 mt-6">
                <h3 className="text-lg font-serif font-semibold">
                  Need Personalized Venue &amp; Budget Advice?
                </h3>
                <button
                  type="button"
                  onClick={() => openAppointment(activeArticle.title)}
                  className="rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-xs uppercase tracking-[0.18em] hover:opacity-90 cursor-pointer"
                >
                  Speak With a Planner
                </button>
              </div>
            </article>
          ) : (
            <>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.22em] text-primary">
                  Planning Journal
                </p>
                <h2 className="text-2xl font-serif font-semibold text-foreground">
                  Destination Wedding Guides
                </h2>
                <p className="text-sm text-muted-foreground">
                  Candid budget breakdowns, venue comparisons, and timelines from 20+ years of
                  planning.
                </p>
              </div>

              <div className="space-y-5">
                {BLOG_ARTICLES.map((article) => (
                  <Link
                    key={article.slug}
                    to={`/blog/${article.slug}`}
                    className="block rounded-xl border border-border/70 bg-background overflow-hidden shadow-sm hover:border-primary/50 transition-colors group"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-muted">
                      <img
                        src={article.cover}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-primary">
                        {article.category} · {article.readTime}
                      </p>
                      <h3 className="text-xl font-serif font-semibold text-foreground">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary pt-1">
                        Read Guide <ArrowRight size={13} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </PageShell>
  );
}
