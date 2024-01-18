"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { z } from "zod"

import { Form } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { RevealAnimation } from "@/components/Animations/InViewAnimationWrapper"
import { TeamCard } from "@/components/Sections/Team/TeamCard"
import TeamMember from "@/components/interfaces/TeamMember.interface"
import BACKEND from "@/app/API"

import QuestionNext from "../prequalification/Steps/QuestionNext"
import QuestionHeader from "../prequalification/components/questionHeader"

const api = new BACKEND()

export default function Step1Form(props: {}) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  function processString(inputString: string): string {
    // Remove non-alphabetic characters and convert to lowercase
    const processedString = inputString.replace(/[^a-zA-Z]/g, "").toLowerCase()
    return processedString
  }
  const [selected, setSelected] = useState<number | null>(null)
  let LoadTeam = async () => {
    let res = await api
      .GET({
        Route: "team",
      })
      .then((val) => val.data)
      .catch((err) => [])

    setTeamMembers(res)
    return
  }

  useEffect(() => {
    LoadTeam()
  }, [])

  function LoadLength() {
    let length = teamMembers.length.toString()
    return `grid-cols-${length}`
  }
  let classStr = LoadLength()
  let r = useRouter()
  return (
    <div className="container mt-8 h-full min-h-screen w-full">
      <QuestionHeader
        title="Select Your Team Member"
        text="Which Petra Agent are you applying through?"
      />
      {teamMembers.length > 0 ? (
        <>
          <div
            className={`z-50 grid h-full w-full grid-cols-2 justify-center gap-2 md:grid-cols-4`}
          >
            {teamMembers.map((item, i) => {
              return (
                <RevealAnimation
                  key={i} // Don't forget to add a unique key when mapping
                  options={{
                    delay: 0.2 * (i + 1),
                  }}
                >
                  <TeamCard
                    key={i}
                    action={() => setSelected(i)}
                    ID={item.ID}
                    description={item.Biography}
                    title={item.Name}
                    name={item.Name}
                    rmloNumber={item.RNumber.toString()}
                    image={item.Image}
                    isSelected={() => selected == i}
                  />
                </RevealAnimation>
              )
            })}
          </div>
          {selected != null ? (
            <div
              onClick={() => {
                let adr = processString(teamMembers[selected].Name)
                console.log(adr)
                r.replace(`https://${adr}.zipforhome.com`)
                //   props.UpdateState(1, Step1FormCXT.getValues("TeamMembers"))
                //   props.HandleNext()
              }}
              className=" mx-auto mb-8 flex w-full flex-row items-center rounded-xl border-2 bg-green-200 p-4 text-center transition hover:animate-pulse hover:cursor-pointer md:w-1/2  "
            >
              <div className="w-full">
                <Label className="text-dark text-2xl underline ">
                  Apply Now with {teamMembers[selected].Name}
                </Label>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
