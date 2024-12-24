import SearchQA from '../components/SearchQA';
import Filter from '../components/Filter';
import Navbar from '../components/Navbar';
import PostSection from '../components/PostSection';
import Spaces from '../components/Spaces';

const Home = () => {
  return (
    <>
    <div className='sticky top-0 bg-white z-10'>
    <Navbar />
    </div>
      
      <div className="bg-gray-100 flex lg:-ml-10 md:-ml-8 sm:-ml-0 justify-center w-full">
        <div className="w-full max-w-screen-xl h-full flex">
          {/* Left Column - Filter Section */}
          <div className="lg:flex flex-col w-1/4  sticky top-16 h-fit">
            <Filter />
          </div>

          {/* Middle Column - Search and Posts Section */}
          <div className="flex-1 h-full ">
            <div className="mb-3">
              <SearchQA />
            </div>
            <div>
              <PostSection />
            </div>
          </div>

          {/* Right Column - Optional Component */}
          <div className="lg:flex flex-col w-1/4 bg-white h-fit mx-2 mt-3 shadow-md rounded  sticky top-16">
           <Spaces/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
