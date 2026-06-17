"use client";

import { useState } from "react";
import { Search, Mail, Phone, MapPin, Share2, ChevronRight } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { blogPosts as allPosts } from "@/lib/blog";

const categories = [
  { name: "Compliance", count: "01" },
  { name: "Management", count: "03" },
  { name: "Modern Finance", count: "02" },
  { name: "Strategy", count: "02" },
];

const recentPosts = allPosts.slice(0, 3);
const tags = ["Accounting", "Compliance", "Finance", "Management", "Strategy"];
const POSTS_PER_PAGE = 4;

export default function BlogList() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = allPosts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const pagePosts = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleSearch = (val: string) => {
    setSearch(val);
    setCurrentPage(1);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* ── Sidebar ── */}
          <aside className="lg:w-75 shrink-0 space-y-10">
            {/* Search */}
            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg text-sm text-heading placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                  style={{ fontFamily: "var(--font-dm)" }}
                />
                <Search
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3
                className="font-bold text-heading text-base mb-5 pb-3 border-b-2 border-primary"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Categories
              </h3>
              <ul className="divide-y divide-gray-100">
                {categories.map((cat) => (
                  <li
                    key={cat.name}
                    className="flex items-center justify-between py-3 cursor-pointer group"
                    onClick={() => handleSearch(cat.name)}
                  >
                    <span
                      className="text-sm text-body group-hover:text-primary transition-colors duration-200"
                      style={{ fontFamily: "var(--font-dm)" }}
                    >
                      {cat.name}
                    </span>
                    <span
                      className="text-sm font-semibold text-heading bg-gray-100 group-hover:bg-primary-light px-2 py-0.5 rounded transition-colors duration-200"
                      style={{ fontFamily: "var(--font-dm)" }}
                    >
                      {cat.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div>
              <h3
                className="font-bold text-heading text-base mb-5 pb-3 border-b-2 border-primary"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Recent Post
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex gap-3 group cursor-pointer">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-lg shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-sm font-medium text-heading line-clamp-2 group-hover:text-primary transition-colors duration-200 leading-snug"
                        style={{ fontFamily: "var(--font-dm)" }}
                      >
                        {post.title}
                      </p>
                      <p
                        className="text-xs text-body mt-1"
                        style={{ fontFamily: "var(--font-dm)" }}
                      >
                        {post.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h3
                className="font-bold text-heading text-base mb-5 pb-3 border-b-2 border-primary"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Contact Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-primary shrink-0" />
                  <span
                    className="text-sm text-body"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {CONTACT.email}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={14} className="text-primary shrink-0" />
                  <span
                    className="text-sm text-body"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {CONTACT.phone}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                  <span
                    className="text-sm text-body leading-relaxed"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {CONTACT.address.line1}, {CONTACT.address.line2}
                  </span>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h3
                className="font-bold text-heading text-base mb-5 pb-3 border-b-2 border-primary"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Follow us
              </h3>
              <div className="flex gap-3">
                {[
                  {
                    title: "LinkedIn",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Facebook",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Twitter",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                  },
                ].map(({ icon, title }) => (
                  <a
                    key={title}
                    href="#"
                    title={title}
                    className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-heading hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3
                className="font-bold text-heading text-base mb-5 pb-3 border-b-2 border-primary"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleSearch(tag)}
                    className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-body rounded hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
                    style={{ fontFamily: "var(--font-dm)" }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* ── Blog Posts ── */}
          <div className="flex-1 min-w-0">
            {pagePosts.length === 0 ? (
              <p
                className="text-body text-center py-20"
                style={{ fontFamily: "var(--font-dm)" }}
              >
                No posts found for &quot;{search}&quot;.
              </p>
            ) : (
              <div className="space-y-12">
                {pagePosts.map((post, index) => (
                  <article
                    key={post.id}
                    className={
                      index < pagePosts.length - 1
                        ? "pb-12 border-b border-gray-100"
                        : ""
                    }
                  >
                    {/* Featured image */}
                    <div className="overflow-hidden rounded-xl mb-5">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Category & date */}
                    <div
                      className="flex items-center gap-2 text-sm mb-3"
                      style={{ fontFamily: "var(--font-dm)" }}
                    >
                      <span className="text-primary font-semibold">
                        {post.category}
                      </span>
                      <span className="text-gray-300">|</span>
                      <span className="text-body">{post.date}</span>
                    </div>

                    {/* Title */}
                    <h2
                      className="text-xl font-bold text-heading mb-3 leading-snug hover:text-primary cursor-pointer transition-colors duration-200"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p
                      className="text-body text-sm leading-relaxed mb-5"
                      style={{ fontFamily: "var(--font-dm)" }}
                    >
                      {post.excerpt}
                    </p>

                    {/* Share */}
                    <div
                      className="flex items-center gap-3 text-sm"
                      style={{ fontFamily: "var(--font-dm)" }}
                    >
                      <span className="text-body font-medium">Share This</span>
                      <span className="text-gray-300">—</span>
                      {[
                        {
                          title: "Facebook",
                          icon: (
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                          ),
                        },
                        {
                          title: "Twitter",
                          icon: (
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                          ),
                        },
                        {
                          title: "LinkedIn",
                          icon: (
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          ),
                        },
                      ].map(({ title, icon }) => (
                        <a
                          key={title}
                          href="#"
                          title={title}
                          className="text-body hover:text-primary transition-colors duration-200"
                        >
                          {icon}
                        </a>
                      ))}
                      <Share2
                        size={14}
                        className="text-body hover:text-primary cursor-pointer transition-colors duration-200"
                      />
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center gap-2 mt-12">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded text-sm font-semibold transition-all duration-200 ${
                        currentPage === page
                          ? "bg-heading text-white"
                          : "bg-gray-100 text-body hover:bg-primary hover:text-white"
                      }`}
                      style={{ fontFamily: "var(--font-dm)" }}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  onClick={() =>
                    setCurrentPage(Math.min(currentPage + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 rounded bg-gray-100 text-body hover:bg-primary hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
