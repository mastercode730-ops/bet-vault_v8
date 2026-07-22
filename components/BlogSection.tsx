"use client";

import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blogData";
import { BookOpen, ArrowRight, Clock, User, ShieldCheck } from "lucide-react";

export default function BlogSection() {
  // Show first 3 posts on Home Page
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-20 px-4 sm:px-6 relative cyber-bg-grid">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>SPORTS BETTING INSIGHTS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Bet Vault Strategy & Knowledge Hub
            </h2>
            <p className="text-slate-300 text-base max-w-2xl">
              Practical guides on bankroll management, odds analysis, safety checks, and cricket market tips written by experienced betting analysts.
            </p>
          </div>

          <Link
            href="/blog"
            className="btn-cyber-outline px-5 py-3 rounded-xl text-xs font-bold flex items-center gap-2 self-start sm:self-auto hover:bg-amber-500 hover:text-slate-950 transition-all"
          >
            <span>View All Guides & Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Posts Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="cyber-glass-card rounded-2xl p-6 flex flex-col justify-between space-y-6 group hover:border-amber-500/40 transition-all"
            >
              <div className="space-y-4">
                
                {/* Category & Read Time */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-mono font-bold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-white group-hover:text-amber-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Humanized Excerpt */}
                <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Author & Read More Redirect Link */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-bold text-amber-400 font-mono">
                    {post.author.avatar}
                  </div>
                  <span className="text-xs text-slate-300 font-medium">{post.author.name}</span>
                </div>

                {/* CRITICAL: "Read More" REDIRECTS TO DEDICATED BLOG POST PAGE */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 group/btn"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
