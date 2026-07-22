"use client";

import { useState } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blogData";
import { BookOpen, Search, Clock, ArrowRight, Sparkles, Filter } from "lucide-react";

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Cricket", "Strategy", "Safety", "Football"];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 relative cyber-bg-grid space-y-16">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span>BET VAULT INSIGHTS & GUIDES</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
          Sports Betting Strategy <span className="text-gradient-gold">& Knowledge Base</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
          Honest articles written by sports betting traders, bankroll advisors, and risk specialists. Zero fluff, real practical knowledge.
        </p>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 p-4 rounded-2xl cyber-glass-card">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`py-2 px-4 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search guides, IPL tips, safety..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-amber-500 outline-none font-medium"
          />
        </div>

      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-400 space-y-3">
            <Filter className="w-8 h-8 text-amber-500 mx-auto" />
            <p className="font-bold text-slate-200 text-base">No articles found matching your query.</p>
            <p className="text-xs">Try searching for 'cricket', 'safety', or 'bankroll'.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="btn-cyber-outline px-4 py-2 rounded-xl text-xs font-bold mt-2"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
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
                  <h2 className="font-display font-bold text-xl text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  {/* Humanized Excerpt */}
                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        #{tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Author & Read More Redirect Link */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-bold text-amber-400 font-mono">
                      {post.author.avatar}
                    </div>
                    <span className="text-xs text-slate-300 font-medium">{post.author.name}</span>
                  </div>

                  {/* READ MORE BUTTON REDIRECTS TO DETAIL PAGE */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="btn-cyber-gold px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 group/btn"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
