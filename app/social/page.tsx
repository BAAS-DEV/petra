import Link from "next/link"

import { SearchInput } from "@/components/ui/searchInput"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import Banner from "@/components/BAAS/Banners/Banner"
import LongCardDetail from "@/components/BAAS/Cards/LongCardDetail"
import { TeamCard } from "@/components/BAAS/Cards/TeamCard"

import BACKEND from "../API"
import Sidebar from "./sidebar"

async function getData() {
  let response

  try {
    response = await fetch("http://localhost:4000/articles", {
      cache: "no-cache",
    })
  } catch (error) {
    console.log("There was an error", error)
  }

  // Uses the 'optional chaining' operator
  if (response?.ok) {
    return response.json()
  } else {
    console.log(`HTTP Response Code: ${response?.status}`)
    return []
  }
}

const api = new BACKEND()

async function GetCategories() {
  return api.GET({
    Route: "categories?scope=articles",
  })
}

export default async function BlogPage() {
  let data = await getData()

  let Categories = await GetCategories()
    .then((val) => val.data)
    .catch((err) => [])

  function GetItems(items) {
    let res: any[] = []
    items.forEach((item, i) => {
      res.push({
        label: item.Title,
        value: item.ID,
      })
      return
    })

    return res
  }
  return (
    <section className="container max-w-6xl pt-24 grid items-center ">
      <Banner Title="Social Posts" Subtitle="News" />
      <div className="grid grid-cols-1 align-center">
        <div className="">
          <Sidebar items={GetItems(Categories ? Categories : [])} />
          {/* <SearchInput /> */}
          <Separator className="mt-4" />
        </div>
        <div className="md:col-span-6 grid w-full grid-cols-1">
          {data.length ? (
            <></>
          ) : (
            <p className="mx-auto mt-8">Could not load any results.</p>
          )}
          {data.map((item, i) => (
            <>
              <Link href={`/social/${item.ID}`}>
                <LongCardDetail
                  Title={item.Title}
                  Description={item.Description}
                />
              </Link>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
