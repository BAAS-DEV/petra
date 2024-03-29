import { Fade } from "react-awesome-reveal"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// export default function MainHeroSection() {
//   return (
//     <>
//       <section className="bg-blue-200 relative">
//         <div className="min-h-screen-75 relative flex content-center items-center justify-center pb-32 pt-16">
//           <div className="container mx-auto flex flex-col items-center px-5 py-16 md:flex-row lg:px-28">
//             <div className="mb-16 flex flex-col  text-center  md:mb-0 md:w-1/2 md:pr-16 lg:flex-grow lg:pr-24">
//               <Badge className="bg-accent mx-auto">
//                 Your #1 Choice for Texas Home Lending
//               </Badge>
//               {/* <h1 className="text-4xl  font-light">Petra Home Lending</h1> */}

//               <p className="text-blueGray-600 mb-8  text-base leading-relaxed ">
//                 Deploy your mvp in minutes, not days. WT offers you a a wide
//                 selection swapable sections for your landing page.
//               </p>
//               <div className="flex flex-col justify-center lg:flex-row">
//                 <button className="focus:shadow-outline mt-auto flex transform items-center rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white ring-offset-2 ring-offset-current transition duration-500 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2">
//                   Show me
//                 </button>
//                 <p className="text-blueGray-600 mt-2 text-left text-sm md:ml-6 md:mt-0">
//                   It will take you to candy shop.
//                   <br className="hidden lg:block" />
//                   <a
//                     href="#"
//                     className="inline-flex items-center font-semibold text-blue-600 hover:text-black md:mb-2 lg:mb-0 "
//                     title="read more"
//                   >
//                     Read more about it »
//                   </a>
//                 </p>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 lg:w-1/3 lg:max-w-lg">
//               <img
//                 className="rounded-lg object-cover object-center "
//                 alt="hero"
//                 src="https://dummyimage.com/720x600/F3F4F7/8693ac"
//               />
//             </div>
//           </div>
//           <div
//             className="h-70-px pointer-events-none absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden"
//             style={{ transform: "translateZ(0px)" }}
//           >
//             <svg
//               className="absolute bottom-0 overflow-hidden"
//               xmlns="http://www.w3.org/2000/svg"
//               preserveAspectRatio="none"
//               version="1.1"
//               viewBox="0 0 2560 100"
//               x="0"
//               y="0"
//             >
//               <polygon
//                 className="text-blueGray-200 fill-current"
//                 points="2560 0 2560 100 0 100"
//               ></polygon>
//             </svg>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

export default function MainHeroSection() {
  return (
    <>
      <div className="h-screen w-full bg-primary bg-cover bg-center">
        <div className="flex h-full w-full items-center justify-center bg-gray-900/50 py-12">
          <div className="text-center">
            <div className="container mx-auto px-4">
              <div className="mx-auto text-center">
                <Badge className="mb-2 bg-accent text-sm font-light md:text-xl">
                  The #1 Choice for Texas Home Lending
                </Badge>
                <h1 className="mb-2 text-2xl font-bold text-white md:text-4xl">
                  Petra Home Lending
                </h1>

                <p className="mx-auto mb-4 max-w-xl text-lg text-gray-300">
                  {`Our name comes from the Greek, meaning rock. We chose it
                  because a rock-solid foundation undergirds all that we believe
                  in and everything we do. We’re a small home mortgage lender,
                  and that’s on purpose. So, whether you’re buying your first
                  home, need a larger home for your growing family, or are ready
                  to downsize, our purpose is to provide that same rock-solid
                  certainty with your mortgage. We are called to help you move
                  into the home that’s right for you, right where you find
                  yourself in life’s journey. Welcome to the family.`}
                </p>
                <Button variant={"secondary"} className="outline">
                  Let Us Help
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
