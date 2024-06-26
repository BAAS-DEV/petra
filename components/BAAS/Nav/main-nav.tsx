"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Facebook, Inspect, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import AssistanceTrigger from "../../Assistant/AssistanceTrigger"
import MobileNavSheet from "../../mobile-nav-sheet"
import BigCard from "../Cards/BigCard"
import Cart from "../Shop/components/Cart"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function MainNav() {
  return (
    <>
      <div className="hidden md:block">
        <div className="items-center space-x-4 sm:justify-between sm:space-x-0">
          <FullWidthNavbar />
        </div>
      </div>
      <div className=" w-full md:hidden">
        <div className=" flex h-16  items-center justify-between space-x-4 sm:space-x-0">
          <MobileNavbar />

          {/* <div className="flex p-2 m-2">

            <AssistanceTrigger />
          </div> */}
        </div>
        {/* <div className="w-full px-1 bg-gray-100 mb-1">
          <SiteSearch />
        </div> */}
      </div>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

function Info() {
  return (
    <div className=" flex-col  text-left sm:flex md:w-full">
      <div>
        <span className="text-primary underline">
          <a href="tel:214-432-0443" className="flex hover:underline">
            +1 (214) 432-0443
          </a>
        </span>
        <span className="text-primary underline">
          <a
            href="mailto:“contactus@petralending.com”"
            className="flex hover:underline"
          >
            contactus@petralending.com
          </a>
        </span>
      </div>
      <div>
        <span className="font-light md:text-lg"> Petra Home Lending</span>
      </div>
      <div>
        <span className="text-sm font-normal text-gray-400">
          <a
            href="https://maps.app.goo.gl/JA62akvuZnDwxN5CA"
            className="hover:cursor-pointer hover:underline"
          >
            4425 Plano Pkwy, Suite 802, Carrollton, TX 75010
          </a>
        </span>
      </div>
      <div>
        <span>NMLS#: 211515</span>
      </div>
    </div>
  )
}

const FullWidthNavbar = () => {
  let path = usePathname()
  return (
    <>
      <header className="container flex w-full max-w-4xl items-center justify-between bg-white">
        <Image
          src={"/images/petra-blue.svg"}
          height={50}
          width={100}
          alt=" mx-auto  pb-4 mb-4 "
        />
        {/* <Info />
          <div className="md:w-full text-center flex flex-wrap justify-center">
            <div className="flex items-center justify-center  space-y-4 flex-wrap w-full">
              <Image
                src={"/images/petra-blue.svg"}
                height={50}
                width={100}
                alt=" mx-auto  pb-4 mb-4 "
              />
              <SiteSearch />
            </div>
          </div>
          <div className="w-full flex items-center h-full justify-end">
            <div>
              <Image
                src={"/images/eh.png"}
                alt=""
                width={500}
                height={500}
                className="w-20 mr-4 mx-auto md:float-right "
              />
            </div> */}
        {/* <div className="max-w-16 float-right">
              <AssistanceTrigger />
            </div> */}

        <NavigationMenu className="mx-auto items-center py-1 text-center">
          <NavigationMenuList>
            <HoverCard openDelay={0} closeDelay={0}>
              <Link href="/" legacyBehavior passHref>
                <HoverCardTrigger className={navigationMenuTriggerStyle()}>
                  <div
                    className={`flex-wrap items-center text-center  ${
                      path == "/" ? "text-accent underline" : ""
                    } `}
                  >
                    Home
                  </div>
                </HoverCardTrigger>
              </Link>
              <HoverCardContent className="bg-white">
                <div className="text-left">
                  <Label className="pb-2 text-lg text-primary underline ">
                    Home
                  </Label>
                  <p>Start here!</p>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard openDelay={0} closeDelay={0}>
              <Link href="/about" legacyBehavior passHref>
                <HoverCardTrigger className={navigationMenuTriggerStyle()}>
                  <div
                    className={`flex-wrap items-center text-center  ${
                      path == "/about" ? "text-accent underline" : ""
                    } `}
                  >
                    About Us
                  </div>
                </HoverCardTrigger>
              </Link>
              <HoverCardContent className="bg-white">
                <div className="text-left">
                  <Label className="pb-2 text-lg text-primary underline ">
                    About Us
                  </Label>
                  <p>Meet the team representing Petra Home Lending</p>
                </div>
              </HoverCardContent>
            </HoverCard>
            {/* <HoverCard openDelay={0} closeDelay={0}>
              <Link href="/articles" legacyBehavior passHref>
                <HoverCardTrigger className={navigationMenuTriggerStyle()}>
                  <div
                    className={`flex-wrap text-center items-center  ${
                      path == "/articles" ? "text-accent underline" : ""
                    } `}
                  >
                    Articles
                  </div>
                </HoverCardTrigger>
              </Link>
              <HoverCardContent className="bg-white">
                <div className="text-left">
                  <Label className="text-lg pb-2 underline text-primary ">
                    Articles
                  </Label>
                  <p>Helpful content produced by the Petra team</p>
                </div>
              </HoverCardContent>
            </HoverCard> */}

            <HoverCard openDelay={0} closeDelay={0}>
              <Link href="/resources" legacyBehavior passHref>
                <HoverCardTrigger className={navigationMenuTriggerStyle()}>
                  <div
                    className={`flex-wrap items-center text-center  ${
                      path == "/resources" ? "text-accent underline" : ""
                    } `}
                  >
                    Resources
                  </div>
                </HoverCardTrigger>
              </Link>
              <HoverCardContent className="bg-white">
                <div className="text-left">
                  <Label className="pb-2 text-lg text-primary underline ">
                    Resources
                  </Label>
                  <p>Helpful Tools & Information</p>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard openDelay={0} closeDelay={0}>
              <Link href="/faqs" legacyBehavior passHref>
                <HoverCardTrigger className={navigationMenuTriggerStyle()}>
                  <div
                    className={`text-cente flex-wrap items-center  ${
                      path == "/faqs" ? "text-accent underline" : ""
                    } `}
                  >
                    FAQs
                  </div>
                </HoverCardTrigger>
              </Link>
              <HoverCardContent className="bg-white">
                <div className="text-left">
                  <Label className="pb-2 text-lg text-primary  underline">
                    Frequently Asked Questions
                  </Label>
                  <p>Find answers to common mortgage lending questions</p>
                </div>
              </HoverCardContent>
            </HoverCard>
            {/* <HoverCard openDelay={0} closeDelay={0}>
              <Link href="/prequalification" legacyBehavior passHref>
                <HoverCardTrigger className={navigationMenuTriggerStyle()}>
                  <div
                    className={`flex-wrap text-center items-center  ${
                      path == "/prequalification" ? "text-accent underline" : ""
                    } `}
                  >
                    Prequalification
                  </div>
                </HoverCardTrigger>
              </Link>
              <HoverCardContent className="bg-white">
                <div className="text-left">
                  <Label className="text-lg pb-2 underline text-primary ">
                    Prequalification
                  </Label>
                  <p>
                    Complete our short form to make your home buying experience
                    as easy as possible
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard> */}
            {/* <HoverCard openDelay={0} closeDelay={0}>
              <Link href="/apply" legacyBehavior passHref>
                <HoverCardTrigger className={navigationMenuTriggerStyle()}>
                  <div
                    className={`flex-wrap text-center   items-center  ${
                      path == "/apply" ? "text-accent underline " : ""
                    } `}
                  >
                    Apply Now
                  </div>
                </HoverCardTrigger>
              </Link>
              <HoverCardContent className="bg-white">
                <div className="text-left">
                  <Label className="text-lg pb-2 underline text-primary ">
                    Apply Now!
                  </Label>
                  <p>Start our prequalification process, quickly and easily</p>
                </div>
              </HoverCardContent>
            </HoverCard> */}
            <HoverCard openDelay={0} closeDelay={0}>
              <Link href="/contact" legacyBehavior passHref>
                <HoverCardTrigger className={navigationMenuTriggerStyle()}>
                  <div
                    className={`text-cente flex-wrap items-center  ${
                      path == "/contact" ? "text-accent underline" : ""
                    } `}
                  >
                    Contact Us
                  </div>
                </HoverCardTrigger>
              </Link>
              <HoverCardContent className="bg-white">
                <div className="text-left">
                  <Label className="pb-2 text-lg text-primary  underline">
                    Talk With The Team
                  </Label>
                  <p>We are eager to hear from you!</p>
                </div>
              </HoverCardContent>
            </HoverCard>
            {/* <NavigationMenuItem>
              <Link href="/snapshot" className="" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Get Prequalified
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
            {/* <HoverCard openDelay={0}>
              <HoverCardTrigger className={navigationMenuTriggerStyle()}>
                Shop
              </HoverCardTrigger>
              <HoverCardContent className="bg-secondary">
                <Cart />

                <Link href="/shop" className="font-light hover:cursor-pointer">
                  <BigCard
                    Title={"Shop Our Store"}
                    Description={"Awesome Reality Merch Available in Stock Now"}
                    btnText={"Shop Now"}
                    btn={true}
                    bg={"bg-primary"}
                    link={"/shop"}
                    bgHover={"bg-primary/60"}
                    image={undefined}
                  />
                </Link>
              </HoverCardContent>
            </HoverCard> */}
          </NavigationMenuList>
        </NavigationMenu>
        <Link href="/client-center">
          <Button>Client Center</Button>
        </Link>
      </header>
    </>
  )
}

const MobileNavbar = () => {
  return (
    <>
      <MobileNavSheet />
    </>
  )
}
