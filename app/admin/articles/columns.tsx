"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import RowActions from "@/components/BAAS/Table/RowActions"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Articles = {
  ID: string
  Title: string
  Description: string
  Category: string
  Status: string
  tags: string[]
}

export const columns: ColumnDef<Articles>[] = [
  {
    accessorKey: "Title",
    header: "Title",
  },
  {
    accessorKey: "Description",
    header: "Description",
  },
  {
    accessorKey: "Category",
    header: "Category ",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const article = row.original
      return (
        <RowActions
          Model={{
            ID: article.ID,
            Path: "articles",
          }}
        />
      )
    },
  },
]
