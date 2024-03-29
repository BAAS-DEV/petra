"use client"

import { useState } from "react"
import Link from "next/link"
import { ColumnDef } from "@tanstack/react-table"
import { Loader2 } from "lucide-react"
import moment from "moment"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export const ColumnsAlt: ColumnDef<any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="h-6 w-6 rounded-full"
      />
    ),
    cell: ({ row }) => {
      return (
        <>
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="h-6 w-6 rounded-full"
          />
        </>
      )
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    header: () => {
      return <div className="max-w-10"></div>
    },
    cell: ({ row }) => {
      return (
        <>
          <Link href={`/admin/forms/${row.original.ID}`}>
            <Button>View</Button>
          </Link>
        </>
      )
    },
    // cell: ({ row }) => {
    //   const [loading, setLoading] = useState(false)
    //   return (
    //     <>
    //       <div className="max-w-8">
    //         {loading ? (
    //           <>{<Loader2 className="animate-spin text-2xl text-accent" />}</>
    //         ) : (
    //           <>
    //             <Link
    //               onClick={() => setLoading(true)}
    //               href={`/admin/forms/${row.original.ID}`}
    //             >
    //               <Button>View</Button>
    //             </Link>
    //           </>
    //         )}
    //       </div>
    //     </>
    //   )
    // },
  },
  {
    id: "Name",
    header: "Name",
    cell: ({ row }) => {
      let data = JSON.parse(row.original.SubmissionData)
      // email, name, message
      return <div>{data.name}</div>
    },
  },
  {
    id: "Email",
    header: "Contact Email",
    cell: ({ row }) => {
      let data = JSON.parse(row.original.SubmissionData)
      // email, name, message
      return <div>{data.email}</div>
    },
  },
  {
    accessorKey: "Type",
    header: "Type",
  },
  {
    accessorKey: "CreatedAt",
    header: "Created At",
    cell: ({ row }) => {
      const time: Date = row.getValue("CreatedAt")

      return (
        <div className="font-medium">
          {moment(time).format("MMMM Do YYYY, h:mm:ss a")}
        </div>
      )
    },
  },
]
