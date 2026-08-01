import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blogData";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ArrowLeft, Clock, Calendar, User, Share2, MessageSquare, ShieldCheck } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: "Post Not Found | BetVault" };
  }

  return {
    title: `${post.title} | BetVault Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);
  const waArticleLink = getWhatsAppLink(`Hi Bet Vault, I read your article "${post.title}" and would like to set up an ID.`);

  return (
    <article className="py-16 sm:py-24 px-4 sm:px-6 relative cyber-bg-grid">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Back Link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Post Header */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed italic border-l-2 border-amber-500 pl-4">
            {post.excerpt}
          </p>

          {/* Author Card */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-mono font-bold text-amber-400 text-sm">
                {post.author.avatar}
              </div>
              <div>
                <p className="text-xs font-bold text-white">{post.author.name}</p>
                <p className="text-[11px] text-slate-400 font-mono">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold">
                ✓ Verified Author
              </span>
            </div>
          </div>
        </div>

        {/* Main Article Body (100% Humanized Content) */}
        <div className="cyber-glass-card rounded-2xl p-8 sm:p-12 space-y-6 text-slate-200 text-base leading-relaxed">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-slate-200 font-normal">
              {paragraph}
            </p>
          ))}

          {/* Inline WhatsApp CTA Box */}
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 space-y-4">
            <h4 className="font-display font-bold text-white text-base flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>Ready to Bet on Verified Exchange IDs?</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Experience 3-minute WhatsApp setup and 5-minute instant payouts on Diamond Exchange and SkyExchange.
            </p>
            <a
              href={waArticleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex btn-cyber-gold px-6 py-3 rounded-xl text-xs font-bold items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>Open Betting ID on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap pt-4">
          <span className="text-xs font-mono text-slate-400">ARTICLE TAGS:</span>
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-amber-300">
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="pt-12 border-t border-slate-800 space-y-6">
            <h3 className="font-display font-extrabold text-2xl text-white">
              Related Articles & Strategy Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div key={rel.id} className="cyber-glass-card rounded-xl p-5 space-y-3">
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">{rel.category}</span>
                  <h4 className="font-display font-bold text-white text-base hover:text-amber-400 transition-colors">
                    {rel.title}
                  </h4>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="inline-block text-xs font-bold text-amber-400 hover:underline pt-2"
                  >
                    Read Article →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
}
