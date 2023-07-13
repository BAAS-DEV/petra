import * as React from "react"

const steps = [
  { title: "StepOne", component: <div>1</div> },
  { title: "StepTwo", component: <div>1</div> },
  { title: "StepThree", component: <div>1</div> },
  { title: "StepFour", component: <div>1</div> },
]
export default function PrequalificationForm() {
  return (
    <>
      <div className="items-center h-full min-h-screen text-center bg-white rounded-xl">
        <div className="m-auto">
          <h1 className="text-4xl font-bold">Start Prequalification Process</h1>
          <p className="text-md font-light">Here, you can get started</p>
        </div>
      </div>
    </>
  )
}
