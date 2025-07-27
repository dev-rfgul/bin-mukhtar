import Link from "next/link";

const BackToBlogsList = () => {
  return (
    <div className="mb-8">
      <Link 
        href="/blogs" 
        className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-medium transition-colors duration-300"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
        </svg>
        <span>Back to All Blogs</span>
      </Link>
    </div>
  );
};

export default BackToBlogsList;
