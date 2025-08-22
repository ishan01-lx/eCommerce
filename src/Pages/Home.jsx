import React from 'react'
import { FaStar } from 'react-icons/fa'

const Home = () => {
  return (
    <div className='p-16  dark:bg-gray-900 flex justify-between pt-36'>
      <div className="w-full h-auto md:w-1/2">
      <div className="border border-gray-950 w-60 p-1 px-2 text-center rounded-full shadow-2xl shadow-blue-400 flex items-center gap-2">
        <FaStar className='text-gray-700'/>
        <p className=' text-gray-300'>Premium Audio Collection</p>
       
      </div>
        <p className='text-7xl  mb-2 font-bold text-white mt-8'>Elevate Your</p>
         <p className='text-7xl font-bold mb-8  bg-gradient-to-r from-indigo-50 to-purple-400 bg-clip-text text-transparent'>Audio Experience</p>
        <p className=' text-xl text-gray-500'>Discover our curated collection of premium</p>
        <p className=' text-xl text-gray-500'>headphones, speakers, and audio accessories</p>
        <p className=' text-xl text-gray-500'> designed for the moder audiophile.</p>
      </div>
      <div className="relative lg:h-[600px] animate-float">
        {/* <img src="https://id-preview--ffac13c8-515b-4675-a791-327f249d8236.lovable.app/assets/hero-headphones-C-PZwhzO.jpg" alt="" className='object-cover'/> */}
        <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-3xl"></div>
      </div>
      <div className="relative lg:h-[500px] animate-float">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-3xl"></div>
            <img
              src="https://ffac13c8-515b-4675-a791-327f249d8236.sandbox.lovable.dev/src/assets/hero-headphones.jpg"
              alt="Premium Wireless Headphones"
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl hover-lift"
            />
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 glass-card p-4 rounded-2xl animate-scale-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">In Stock</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-2xl animate-scale-in" style={{ animationDelay: '0.7s' }}>
              <div className="text-2xl font-bold text-accent">$299</div>
              <div className="text-sm text-muted-foreground line-through">$399</div>
            </div>
          </div>
    </div>
      //   <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      // {/* Background Pattern */}
      // <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      // <div className="container mx-auto px-4 py-20">
      //   <div className="grid lg:grid-cols-2 gap-12 items-center">
      //     {/* Content */}
      //     <div className="space-y-8 animate-fade-up">
      //       {/* Badge */}
      //       <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
      //         <Star className="h-4 w-4 text-accent" fill="currentColor" />
      //         <span className="text-sm font-medium">Premium Audio Collection</span>
      //       </div>

      //       {/* Heading */}
      //       <div className="space-y-4">
      //         <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
      //           Elevate Your
      //           <span className="block bg-gradient-primary bg-clip-text text-transparent">
      //             Audio Experience
      //           </span>
      //         </h1>
      //         <p className="text-xl text-muted-foreground max-w-md">
      //           Discover our curated collection of premium headphones, speakers, and audio accessories designed for the modern audiophile.
      //         </p>
      //       </div>

      //       {/* CTA Buttons */}
      //       <div className="flex flex-col sm:flex-row gap-4">
      //         <Button variant="premium" size="lg" className="text-lg px-8 py-6">
      //           Shop Collection
      //           <ArrowRight className="ml-2 h-5 w-5" />
      //         </Button>
      //         <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/20 hover:bg-white/10">
      //           Watch Demo
      //         </Button>
      //       </div>

      //       {/* Stats */}
      //       <div className="flex items-center space-x-8 pt-8">
      //         <div className="text-center">
      //           <div className="text-3xl font-bold text-accent">50K+</div>
      //           <div className="text-sm text-muted-foreground">Happy Customers</div>
      //         </div>
      //         <div className="text-center">
      //           <div className="text-3xl font-bold text-accent">4.9</div>
      //           <div className="text-sm text-muted-foreground">Average Rating</div>
      //         </div>
      //         <div className="text-center">
      //           <div className="text-3xl font-bold text-accent">1000+</div>
      //           <div className="text-sm text-muted-foreground">Products</div>
      //         </div>
      //       </div>
      //     </div>
          
    //     </div>
    //   </div>
    // </section>
  )
}

export default Home
