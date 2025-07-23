"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Contact from "../../components/Contact";
import CTAMain from "../(components)/CTAMain";

import styles from "../../styles/blog.module.scss";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Blog post data
  const blogPosts = [
    {
      id: 1,
      title:
        "The Hidden Risk of Spreadsheet Errors in Your Business—and How to Prevent Them",
      description:
        "Research shows that 88% of spreadsheets contain errors. Learn why spreadsheet errors are so common, how to identify warning signs, and practical strategies to prevent costly mistakes in your business.",
      slug: "spreadsheet-errors-in-excel",
      date: "July 23, 2025",
      author: "Daniel Thomas",
      readingTime: "8 min",
      category: "Spreadsheets",
      featured: true,
      youtubeId: null,
      imagePath: "/blogs/mistake.webp",
    },
  ];

  // Extract unique categories
  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  // Filter posts based on search term and selected category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured);

  // Function to get the correct image source for a post
  const getImageSource = (post) => {
    if (post.youtubeId) {
      return `https://img.youtube.com/vi/${post.youtubeId}/maxresdefault.jpg`;
    } else if (post.imagePath) {
      return post.imagePath;
    }
    // Fallback image if neither youtubeId nor imagePath is available
    return "/default-blog-image.webp";
  };

  // Function to render a card (used for both featured and regular posts)
  const renderPostCard = (post, isFeatured = false) => (
    <Link
      href={`/blog/${post.slug}`}
      key={post.id}
      className={isFeatured ? styles.featuredPostCard : styles.postCard}
    >
      <div className={styles.postImageContainer}>
        <Image
          src={getImageSource(post)}
          alt={post.title}
          className={styles.postImage}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className={styles.categoryBadge}>{post.category}</span>
      </div>
      <div className={styles.postContent}>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <div className={styles.postMeta}>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readingTime} read</span>
        </div>
      </div>
    </Link>
  );

  return (
    <>
      <div className={styles.headFiller}></div>
      <div className={styles.blogHeader}>
        <div className={styles.headerContent}>
          <h1>Excel Experts Blog</h1>
          <p>Expert tutorials, tips, and best practices for Microsoft Excel</p>
        </div>
      </div>

      <div className={styles.blogContainer}>
        {/* Featured posts section */}
        {featuredPosts.length > 0 && (
          <section className={styles.featuredSection}>
            <h2>Featured Articles</h2>
            <div className={styles.featuredGrid}>
              {featuredPosts.map((post) => renderPostCard(post, true))}
            </div>
          </section>
        )}

        {/* Search and filter section */}
        <section className={styles.filterSection}>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
              list="searchList"
            />
            <datalist id="searchList">
              {blogPosts.map((post) => (
                <option key={post.id} value={post.title} />
              ))}
            </datalist>
            <svg
              className={styles.searchIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          <div className={styles.categoryFilters}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.categoryButton} ${
                  selectedCategory === category ? styles.active : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* All posts section */}
        <section className={styles.allPostsSection}>
          <h2>All Articles</h2>
          {filteredPosts.length === 0 ? (
            <div className={styles.noResults}>
              <p>
                No articles found matching your criteria. Please try a different
                search term or category.
              </p>
            </div>
          ) : (
            <div className={styles.postsGrid}>
              {filteredPosts.map((post) => renderPostCard(post))}
            </div>
          )}
        </section>
        <div className={styles.ctaContainer}>
          <CTAMain />
        </div>
      </div>

      <Contact />
    </>
  );
};

export default BlogPage;
