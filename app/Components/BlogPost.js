// // components/BlogPost.js
// import React from "react";

// const blogsData = [
//   {
//     id: 1,
//     blogsHeading:
//       "FBR’s New Directive: A Step Towards Transparent Taxation in Pakistan",
//     blogsImg: "/images/blog-1.jpg",
//     boldText: "’s latest directive, SRO 1771(I)/2023",
//     firstPara:
//       "Federal Board of Revenue (FBR) of Pakistan is entering a new era of tax transparency and compliance with its latest directive, SRO 1771(I)/2023.",
//     lastPara:
//       "Embrace the new age of digital tax filing with BeFiler.com. Stay compliant, stay informed, and ensure your peace of mind in the realm of taxation.",
//   },
// ];
// const handleClick = (blogId) => {
//   const selected = blogsData.find((blog) => blog.id === blogId);
//   setSelectedBlog(selected);
// };
// const BlogPost = (blogsData) => {
//   return (
//     <div className="container  p-7 lg:px-0">
//       <div key={blog.id} className="card" onClick={() => handleClick(blog.id)}>
//         <h1>{blog.blogsHeading}</h1>
//         <img src={blog.blogsImg} alt={blog.blogsHeading} />
//         <p>
//           <strong>{blog.boldText}</strong>
//           <br />
//           {blog.firstPara}
//           <br />
//           {selectedBlog && selectedBlog.id === blog.id && (
//             <span>{blog.lastPara}</span>
//           )}
//         </p>
//       </div>

//       <hr className="border-gray-400" />
//       <h1 className="text-center text-4xl font-bold">
//         {blogsData.blogsHeading}
//       </h1>
//       <hr className="border-gray-400" />
//       {/* <img src="/images/welcome1.jpg" className="w-full mt-8 mb-4" alt="" /> */}
//       <div className="text-center">
//         <img
//           src={blogsData.blogsImg}
//           className="mx-auto w-full mt-8 mb-4 "
//           alt=""
//         />
//       </div>
//       <div className="container mx-auto mt-5 prose lg:prose-xl">
//         <p className="mt-5">
//           <span className="text-red-600 font-bold text-3xl">
//             {blogsData.boldText}
//           </span>
//           {blogsData.firstPara}
//         </p>

//         <p className="text-justify">{blogsData.lastPara}</p>
//       </div>
//     </div>
//   );
// };

// export default BlogPost;

import React, { useState } from "react";

const BlogDisplay = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Array containing blog data
  const blogsData = [
    {
      id: 1,
      blogsHeading:
        "FBR’s New Directive: A Step Towards Transparent Taxation in Pakistan",
      blogsImg: "/images/blog-1.jpg",
      boldText: "The FBR ",
      firstPara:
        "The Federal Board of Revenue (FBR) of Pakistan is entering a new era of tax transparency and compliance with its latest directive, SRO 1771(I)/2023. The notification now requires real-time access to databases and information across a wide range of organizations, including financial institutions like commercial banks, government departments, and other private entities. This move is a significant stride in broadening Pakistan’s tax base and clamping down on tax evasion.",
        lastPara:
        `For instance, with organizations such as the Pakistan Stock Exchange (PSX), State Bank of Pakistan (SBP), and Securities & Exchange Commission of Pakistan (SECP) under this ambit, FBR will have unprecedented insights into economic transactions. This integration allows for a more comprehensive understanding of financial activities across sectors, aiding in identifying potential tax evaders and non-filers.<br /><br />Tax filing ab Aasan nahin, bohat assan hai. This extensive data access is not limited to financial institutions alone. Various other entities, from government departments to private organizations, are now part of this initiative. This implies a more robust and transparent system for tax collection and compliance, signifying a decisive change in how financial transactions are monitored in Pakistan.<br /><br />What does this mean for individuals and businesses? It signals a time for heightened diligence in financial dealings and tax filings. The new system will leave little room for oversight or non-compliance, making it crucial for taxpayers to be more vigilant and accurate in their tax submissions.<br /><br />As the tax requirements evolve, BeFiler.com is your straightforward and dependable solution for tax filing. Our platform is designed to simplify the tax filing process, adapting swiftly to the changing tax regulations and ensuring your compliance. With BeFiler.com, you can navigate these new requirements effortlessly, ensuring that your tax filings are accurate, timely, and in line with the latest directives.<br /><br />Embrace the new age of digital tax filing with BeFiler.com. Stay compliant, stay informed, and ensure your peace of mind in the realm of taxation.`
      
    },
    // Add more blog data if needed
  ];

  const handleClick = (blogId) => {
    const selected = blogsData.find((blog) => blog.id === blogId);
    setSelectedBlog(selected);
  };

  return (
    <div>
      {/* <h2>Select a Blog:</h2> */}
      <div className="card-container">
        {blogsData.map((blog) => (
          <div
            key={blog.id}
            className="card"
            onClick={() => handleClick(blog.id)}
          >
            <hr className="border-gray-400 mt-5" />
            <h1 className="text-center text-5xl font-bold">
              {blog.blogsHeading}
            </h1>{" "}
            <hr className="border-gray-400" />
            <div className="text-center">
              <img
                className="mx-auto w-full mt-8 mb-4 "
                src={blog.blogsImg}
                alt={blog.blogsHeading}
              />
            </div>
            <div className="container mx-auto mt-9 p-9 prose lg:prose-xl">
              <p className="mt-5">
                <span className="text-red-600 font-bold text-3xl">
                  {blog.boldText}
                </span>
                {blog.firstPara}
              </p>
              <p className="text-justify">{blog.lastPara}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDisplay;

// it can be used for the FAQs as well.

// import React, { useState, useEffect } from 'react';

// const BlogDisplay = () => {
//   const [selectedBlog, setSelectedBlog] = useState(null);

//   // Simulated data for blogs
//   const blogData = [
//     { id: 1, title: "Blog 1", content: "Content for Blog 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", imageUrl: "https://via.placeholder.com/10" },
//     { id: 2, title: "Blog 2", content: "Content for Blog 2. Ut aliquet dui sed massa consequat efficitur.", imageUrl: "https://via.placeholder.com/100" },
//     { id: 3, title: "Blog 3", content: "Content for Blog 3. Vivamus consequat justo vitae odio scelerisque, vel pellentesque arcu pellentesque.", imageUrl: "https://via.placeholder.com/10" }
//   ];

//   useEffect(() => {
//     // Hide the blog content when a new blog is selected
//     if (selectedBlog) {
//       setSelectedBlog(null);
//     }
//   }, []);

//   const handleClick = (blogId) => {
//     const selected = blogData.find(blog => blog.id === blogId);
//     setSelectedBlog(selected);
//   };

//   const handleReadMoreClick = (event, blogId) => {
//     // Stop event propagation to prevent the handleClick function from being triggered
//     event.stopPropagation();
//     handleClick(blogId);
//   };

//   return (
//     <div>
//       <h2>Select a Blog:</h2>
//       <div className="card-container">
//         {blogData.map(blog => (
//           <div key={blog.id} className="card" onClick={() => handleClick(blog.id)}>
//             <h3>{blog.title}</h3>
//             <img src={blog.imageUrl} alt={blog.title} />
//             {selectedBlog && selectedBlog.id === blog.id && (
//               <p>{blog.content}</p>
//             )}
//             <button onClick={(e) => handleReadMoreClick(e, blog.id)}>
//               {selectedBlog && selectedBlog.id === blog.id ? "Show Less" : "Read More"}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogDisplay;
