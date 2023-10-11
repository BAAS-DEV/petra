"use client"

import Link from "next/link"
import { ColumnDef } from "@tanstack/react-table"
import moment from "moment"
import { z } from "zod"

import { Button } from "@/components/ui/button"

export const columns: ColumnDef<any>[] = [
  {
    id: "actions",
    header: () => {
      return <div className="max-w-10"></div>
    },
    cell: ({ row }) => {
      let data = JSON.parse(row.original.SubmissionData)
      data.Team
      return (
        <>
          <div className="max-w-8">
            <Link href={`/admin/forms/${row.original.ID}`}>
              <Button>View</Button>
            </Link>
          </div>
        </>
      )
    },
  },
  {
    id: "Team",
    header: "Team Member(s) Credited",
    cell: ({ row }) => {
      let data = JSON.parse(row.original.SubmissionData)
      console.log(data)
      return (
        <div>
          {data &&
            data.Team &&
            data.Team.map((item, i) => {
              return <p key={item}>{`${i + 1}) ${item}`}</p>
            })}
        </div>
      )
    },
  },
  {
    id: "Boroowers",
    header: "Borrower(s) Information Submitted",
    cell: ({ row }) => {
      let data = JSON.parse(row.original.SubmissionData)
      console.log(data)
      return (
        <div>
          {data &&
            data.Borrowers &&
            data.Borrowers.map((item, i) => {
              return <p key={i}>{`- ${item.FirstName} ${item.LastName}`}</p>
            })}
        </div>
      )
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

      return <div className="font-medium">{moment(time).calendar()}</div>
    },
  },
]