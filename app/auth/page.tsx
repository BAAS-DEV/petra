"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { SubmitForm } from "@/components/BAAS/Forms"
import PasswordInput from "@/components/BAAS/Forms/Inputs/PasswordInput"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import TableLoading from "@/components/BAAS/Loading/TableLoading"

import BACKEND from "../API"

export const AuthFormSchema = z.object({
  Email: z.string().email(),
  Code: z.string().optional(),
})
const api = new BACKEND()

export default function AuthPage() {
  const [showAccessCodeEnter, setShowAccessCodeEnter] = useState<boolean>(false)
  const AuthFormCXT = useForm<z.infer<typeof AuthFormSchema>>({
    resolver: zodResolver(AuthFormSchema),
  })

  async function onSubmitRequest(data: { Email: string }) {
    let res = await api.CREATE({
      Route: "auth/login/request",
      Body: JSON.stringify(data),
    })
    setShowAccessCodeEnter(true)
  }

  async function onSubmitLogin(data: z.infer<typeof AuthFormSchema>) {
    await signIn("credentials", {
      email: AuthFormCXT.getValues("Email"),
      code: AuthFormCXT.getValues("Code"),
      redirect: false,
      callbackUrl: "/admin",
    })
  }

  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="w-1/2 h-screen hidden lg:block">
          <div className="bg-primary w-full h-full flex items-center justify-center">
            <div>
              <div className="w-full z-10 my-auto text-center ">
                <Image
                  src="/images/petra-white.svg"
                  height={500}
                  width={500}
                  alt=""
                  className="mx-auto mb-4"
                />
                <Badge className="bg-accent mx-auto text-xl">
                  <p>Your #1 Choice for Texas Home Lending</p>
                </Badge>

                {/* <Fade cascade triggerOnce damping={0.1} direction="up"> */}
                {/* <h1 className=" text-6xl font-light  ">
                  Your <span className="font-bold italic">Home</span>, Our{"  "}
                  <span className="font-semibold italic">
                    Calling <span className="text-primary ">.</span>
                  </span>
                </h1> */}

                {/* </Fade> */}
                <Image
                  height={20}
                  width={200}
                  alt={""}
                  className="block -mt-8 rounded-md w-full mx-auto -z-10 "
                  src={"/images/underline.svg"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          {showAccessCodeEnter ? (
            <Form {...AuthFormCXT}>
              <form onSubmit={AuthFormCXT.handleSubmit(onSubmitLogin)}>
                <div className="mb-4">
                  <Input
                    className="bg-white"
                    disabled
                    value={AuthFormCXT.getValues("Email")}
                  />
                  <TextInput
                    form={AuthFormCXT}
                    options={{
                      name: "Code",
                      label: "Code You Received",
                      placeholder: "123456",
                      description: "Enter the code sent to your email here.",
                      defaultValue: AuthFormCXT.getValues("Code"),
                    }}
                  />
                </div>

                <Button
                  type="submit"
                  className="  text-white font-semibold rounded-md py-2 px-4 w-full"
                >
                  Login
                </Button>
              </form>
            </Form>
          ) : (
            <Form {...AuthFormCXT}>
              <form onSubmit={AuthFormCXT.handleSubmit(onSubmitRequest)}>
                <div className="mb-4">
                  <TextInput
                    form={AuthFormCXT}
                    options={{
                      name: "Email",
                      label: "Email Address",
                      placeholder: "example@email.com",
                      description:
                        "You will receive an access code to your email.",
                    }}
                  />
                </div>

                <Button
                  type="submit"
                  className="  text-white font-semibold rounded-md py-2 px-4 w-full"
                >
                  Request Access Code
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </>
  )
}