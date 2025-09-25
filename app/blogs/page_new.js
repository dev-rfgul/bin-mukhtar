"use client";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Blogs from "../Components/Blogs";

const BlogsPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
            <Navbar />

            {/* Enhanced Blogs Section */}
            <div className="pt-20"> {/* Add padding top to account for fixed navbar */}
                <Blogs />
            </div>

            <Footer />
        </div>
    );
};

export default BlogsPage;
