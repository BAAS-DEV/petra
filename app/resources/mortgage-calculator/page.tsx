"use client"

import React, { useEffect } from "react"
import dynamic from "next/dynamic"
import { zodResolver } from "@hookform/resolvers/zod"
import { CalculatorIcon, DollarSign, PercentIcon } from "lucide-react"
import CurrencyInput from "react-currency-input-field"
import { useForm } from "react-hook-form"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { usePreqFormContext } from "@/app/prequalify/components/formContext"

import MortgageCalculations from "./MortgageCalculations"
import { useMortgageCalcContext } from "./components/formContext"

const MortgagePieChart = dynamic(() => import("./components/piechart"), {
  ssr: false,
})

let mortgage = new MortgageCalculations()

export default function MortgageCalculatorPage() {
  const { data, setCalcData } = useMortgageCalcContext()

  let {
    downPaymentPercentage,
    totalCost,
    loanDurationTerm,
    interestPercentage,
    propertyTaxPercentage,
  } = data

  let answer = mortgage.CalculateMonthlyPayment(
    totalCost - mortgage.CalculateDownPayment(totalCost, downPaymentPercentage),
    interestPercentage,
    loanDurationTerm
  )

  let propertyTaxAmt = mortgage.CalculatePropertyTaxAmount(
    totalCost,
    propertyTaxPercentage
  )
  const DataSet = () => {
    let result = [
      {
        id: "Principle",
        label: "Princeple",
        value: mortgage
          .CalculatePrincipleAmount(
            totalCost -
              mortgage.CalculateDownPayment(totalCost, downPaymentPercentage),
            interestPercentage,
            loanDurationTerm
          )
          .toFixed(2),
      },
      {
        id: "Interest",
        label: "interest",
        value: mortgage
          .CalculateInterestAmount(totalCost, interestPercentage)
          .toFixed(2),
      },
      {
        id: "Property Tax",
        label: "Property Tax",
        value: mortgage
          .CalculatePropertyTaxAmount(totalCost, propertyTaxPercentage)
          .toFixed(2),
      },
    ]
    return result
  }

  return (
    <div className="container h-full w-full pt-24">
      <div className="  w-full mb-8">
        <h1 className="text-md block  font-semibold text-primary">
          An easy mortgage payment cost-estimate tool
        </h1>
        <h2 className="text-dark mx-auto text-left  text-2xl  font-medium uppercase ">
          Mortgage Payment Calculator
        </h2>
        <p className="max-w-md   font-light">
          Fill out the contact form below, and we&#39ll be in touch shortly to
          provide you with personalized guidance for your unique needs.
        </p>
      </div>

      <div className="w-full flex  ">
        <div className="m-auto  h-full w-full">
          <div className="flex flex-row pb-4 md:flex-row">
            <StatCard
              title={"Estimated Monthly Payment"}
              val={(answer + propertyTaxAmt).toFixed(2)}
            />
            <StatCard
              title={"Principal Paid Each Month"}
              val={mortgage
                .CalculatePrincipleAmount(
                  totalCost -
                    mortgage.CalculateDownPayment(
                      totalCost,
                      downPaymentPercentage
                    ),
                  interestPercentage,
                  loanDurationTerm
                )
                .toFixed(2)}
            />
            <StatCard
              title={"Interest Paid Each Monthy"}
              val={mortgage
                .CalculateInterestAmount(totalCost, interestPercentage)
                .toFixed(2)}
            />
          </div>
          <div className=" flex flex-col w-full gap-2 h-full  md:flex-row  ">
            <div className="md:w-1/3 rounded-xl bg-gray-200 py-8">
              <MortgageCalculatorForm />
            </div>

            <div className=" w-2/3 bg-white px-4">
              <MortgagePieChart data={DataSet ? DataSet() : []} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard(props: { title: string; val: string }) {
  return (
    <div className="w-full rounded-xl  border bg-white p-4">
      <p className="text-center text-sm font-light text-primary">
        {props.title}
      </p>
      <h3 className="text-center text-xl font-bold">
        <CurrencyInput
          disabled={true}
          prefix="$"
          className="mx-auto border-none text-center text-lg"
          value={props.val}
        />
      </h3>
    </div>
  )
}
function MortgageCalculatorForm() {
  const { data, setCalcData } = useMortgageCalcContext()

  let {
    totalCost,
    interestPercentage,
    downPaymentPercentage,
    loanDurationTerm,
    propertyTaxPercentage,
  } = data

  let downPayment = mortgage.CalculateDownPayment(
    totalCost,
    downPaymentPercentage
  )

  return (
    <div className="h-full w-full px-4 ">
      <div className="mb-2 pt-4">
        <Label className="text-md font-light">Home Price</Label>
        <div className="flex h-10 w-full items-center justify-center rounded-md bg-white">
          <DollarSign className="h-4 w-8 rounded-l-md  bg-gray-100 text-sm " />
          <CurrencyInput
            id="total-cost"
            name="total-cost"
            placeholder="Please enter a number"
            defaultValue={totalCost}
            decimalsLimit={2}
            className="w-full"
            onValueChange={(value, name) =>
              setCalcData({ ...data, totalCost: value ? parseInt(value) : 0 })
            }
          />
        </div>
      </div>

      {/* down payment */}
      <div className="mb-2">
        <Label className="text-md font-light">Down Payment</Label>
        <Slider
          className="rounded-md bg-white p-4  "
          defaultValue={[data.downPaymentPercentage]}
          max={99}
          min={1}
          step={0.5}
          onValueChange={(val) =>
            setCalcData({
              ...data,
              downPaymentPercentage: val[0] ? val[0] : 0,
            })
          }
        />
        <Label className="text-sm">{`(${data.downPaymentPercentage}%, OR $${(
          totalCost *
          (data.downPaymentPercentage * 0.01)
        ).toFixed(2)})`}</Label>
      </div>

      {/* Interest Rate */}
      <div className="mb-2">
        <Label className="text-md font-light">Interest Rate</Label>

        <div className="p flex h-12  w-full  items-center justify-center rounded-md border-2 bg-white">
          {/* <Input className="bg-white rounded-r-none" defaultValue={7.3} />
          <PercentIcon className="bg-gray-100 rounded-r-md  w-8 h-4 " />
           */}
          <Slider
            className="rounded-md bg-white p-4 "
            defaultValue={[interestPercentage]}
            max={25}
            min={1}
            step={0.1}
            onValueChange={(val) =>
              setCalcData({
                ...data,
                interestPercentage: val[0] ? val[0] : 0,
              })
            }
          />
          <Label className="bg-white px-4 text-sm">{`${interestPercentage}%`}</Label>
        </div>
      </div>

      {/* Interest Rate */}
      <div className="mb-2">
        <Label className="text-lg font-light">Property Tax Rate</Label>
        <div className="flex h-10 w-full items-center justify-center rounded-md bg-white">
          {/* <Input className="bg-white rounded-r-none" defaultValue={7.3} />
          <PercentIcon className="bg-gray-100 rounded-r-md  w-8 h-4 " />
           */}
          <Slider
            className="rounded-md border bg-white p-4 "
            defaultValue={[propertyTaxPercentage]}
            max={10}
            min={1}
            step={0.1}
            onValueChange={(val) =>
              setCalcData({
                ...data,
                propertyTaxPercentage: val[0] ? val[0] : 0,
              })
            }
          />
          <Label className="bg-white px-4 text-sm">{`${data.propertyTaxPercentage}%`}</Label>
        </div>
      </div>

      {/* Loan Duration */}
      <div className="mb-2">
        <Label className="text-lg font-light">Loan Duration</Label>

        <Select
          onValueChange={(val) =>
            setCalcData({
              ...data,
              propertyTaxPercentage: parseInt(val) * 0.01,
            })
          }
        >
          <SelectTrigger className=" bg-white">
            <SelectValue placeholder="30 Years" defaultValue={"360"} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Load Period Durations</SelectLabel>
              <SelectItem value="360">30 Years</SelectItem>
              <SelectItem value="240">20 Years</SelectItem>
              <SelectItem value="180">15 Years</SelectItem>
              <SelectItem value="120">10 Years</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
