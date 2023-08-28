import { z } from "zod"

import Banner from "@/components/BAAS/Banners/Banner"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import TableActions from "@/components/BAAS/Table/TableActions"
import BACKEND from "@/app/API"

import { columns } from "./columns"
import ProductCategoryForm from "./form"

const api = new BACKEND()

async function getData() {
  return api.GET({
    Route: "categories?scope=products",
  })
}

export default async function TestimonialsPage() {
  let data = await getData()
    .then((val) => val.data)
    .catch((err) => [])

  return (
    <>
      <DataTable
        // form={TestimonialsForm}
        form={ProductCategoryForm}
        columns={columns}
        data={data ? data : []}
        routePath="/categories"
      />
    </>
  )
}
