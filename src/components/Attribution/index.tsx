"use client ";

import React from "react";
import Link from "next/link";

interface AttributionProps {
  author: string;
  authorIcon: string;
  authorLink: string;
  published: string;
  readTime: string;
}

const AttributionComponent: React.FC<AttributionProps> = ({
  author,
  authorIcon,
  authorLink,
  published,
  readTime,
}) => {
  return (
    <div className="flex">
      <Link href={authorLink} target="_blank" rel="noopener noreferrer">
        <img
          src={authorIcon}
          alt={author}
          style={{ borderRadius: "50%", width: "52px", height: "52px" }}
        />
      </Link>
      <div>
        <p style={{ margin: "0 0 2.5rem 1rem" }}>
          <span style={{ color: "#6A6A6A" }}>Written by {""}</span>{" "}
          <Link
            href={authorLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black", fontWeight: "bold" }}
          >
            RH
          </Link>
          <span
            style={{ display: "block", color: "#6A6A6A", fontSize: "13px" }}
          >
            {published} · {readTime}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AttributionComponent;
