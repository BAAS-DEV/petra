"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

import { Button } from "@/components/ui/button"
import Banner from "@/components/BAAS/Banners/Banner"
import ManageDataDialog from "@/components/BAAS/Forms/Dialog"
import TableLoading from "@/components/BAAS/Loading/TableLoading"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import { UserInteraction } from "@/components/BAAS/Table/UserRoleControl"
import BACKEND from "@/app/api"

import { useAdminTableContext } from "../Context/TableContext"
import { columns } from "./columns"
import UserManagementForm from "./form"
import UserManagementFormInit from "./formInit"

const api = new BACKEND()

async function getData() {
  return await api.GET({
    Route: "users",
  })
}

export default function UsersAdmin() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  let session = useSession()
  const LoadData = async () => {
    await getData()
      .then((val) => {
        if (val.data && val.data.length > 0) {
          console.log(val.data)
          setData(val.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
    setLoading(false)
  }
  useEffect(() => {
    LoadData()
  }, [])

  let perms = new UserInteraction()
  let adminPerms = perms.CanDelete(
    session.data?.user?.role ? session.data?.user?.role : ""
  )
  return (
    <>
      <Banner
        Title={"Admin Portal Users"}
        Subtitle={"Give site editing access to these individuals"}
      >
        <ManageDataDialog
          Form={<UserManagementFormInit />}
          data={null}
          Text={"Create"}
          Title={"Create New User"}
          Description={"Add a new user to your system"}
        />
      </Banner>

      {loading ? (
        <TableLoading />
      ) : (
        <DataTable
          columns={columns}
          data={data ? data : []}
          scope={adminPerms}
          filters={[
            {
              label: "Name",
              value: "Name",
            },
            {
              label: "Email",
              value: "Email",
            },
            {
              label: "Role",
              value: "Role",
            },
          ]}
        />
      )}
    </>
  )
}
