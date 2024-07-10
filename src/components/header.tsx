// // import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
// // import { HeaderLogo } from "./header-logo";
// // import { Navigation } from "./navigation";
// // import { Loader2 } from "lucide-react";
// // import { WelcomeMsg } from "./welcome-msg";

// // export const Header = () => {
// //   return (
// //     <header
// //       className="bg-gradient-to-b from-blue-700 to-blue-500
// //     px-4 py-8 lg:px-14 pb-36"
// //     >
// //       <div className="max-w-screen-2xl mx-auto">
// //         <div className="w-full flex items-center justify-between mb-14">
// //           <div className="flex items-center lg:gap-x-16">
// //             <HeaderLogo />
// //             <Navigation />
// //           </div>
// //           <ClerkLoaded>
// //             <UserButton afterSignOutUrl="/" />
// //           </ClerkLoaded>
// //           <ClerkLoading>
// //             <Loader2 className="size-8 animate-spin text-slate-400" />
// //           </ClerkLoading>
// //           <WelcomeMsg />
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
// import { HeaderLogo } from "./header-logo";
// import { Navigation } from "./navigation";
// import { Loader2 } from "lucide-react";
// import { WelcomeMsg } from "./welcome-msg";
// import { Filters } from "./filters";

// export const Header = () => {
//   return (
//     <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36 relative">
//       <div className="max-w-screen-2xl mx-auto">
//         <div className="w-full flex flex-col lg:flex-row items-center justify-between mb-14">
//           <div className="flex items-center gap-x-16 w-full lg:w-auto">
//             <HeaderLogo />
//             <Navigation />
//           </div>
//           <div className="hidden lg:flex items-center mt-4 lg:mt-0">
//             <ClerkLoaded>
//               <UserButton afterSignOutUrl="/" />
//             </ClerkLoaded>
//             <ClerkLoading>
//               <Loader2 className="size-8 animate-spin text-slate-400" />
//             </ClerkLoading>
//           </div>
//         </div>
//         <WelcomeMsg />
//         <Filters />
//       </div>
//     </header>
//   );
// };
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { HeaderLogo } from "./header-logo";
import { Navigation } from "./navigation";
import { Loader2 } from "lucide-react";
import { WelcomeMsg } from "./welcome-msg";
import { Filters } from "./filters";

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36 relative">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between mb-14">
          <div className="flex items-center justify-between w-full lg:w-auto">
            <div className="flex items-center gap-x-16">
              <HeaderLogo />
              <Navigation />
            </div>
            <div className="flex items-center mt-4 lg:mt-0">
              <ClerkLoaded>
                <UserButton afterSignOutUrl="/" />
              </ClerkLoaded>
              <ClerkLoading>
                <Loader2 className="size-8 animate-spin text-slate-400" />
              </ClerkLoading>
            </div>
          </div>
        </div>
        <WelcomeMsg />
        <Filters />
      </div>
    </header>
  );
};
