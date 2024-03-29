import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Banner from "@/components/BAAS/Banners/BannerSite"

import BACKEND from "../api"

const api = new BACKEND()

const GetData = async (route: string) => {
  let val = await api.GET({
    Route: route,
  })

  return val.data
}

interface FAQ {
  Question: string
  Answer: string
  Published: string
}
export default async function FAQ() {
  let res = await GetData(`faq`)
    .then((val) => val)
    .catch((err) => [])

  return (
    <>
      <div className="min-h-screen w-full h-full  ">
        <Banner
          Title={"Frequently Asked Questions"}
          Subtitle={"Helping You with Home Lending Questions"}
        >
          <></>
        </Banner>
        <div className="container">
          <section className=" grid bg-white p-4 rounded-xl shadow-md border-2">
            <FAQAccordion data={res ? res : []} />
          </section>
        </div>
      </div>
    </>
  )
}

function FAQAccordion(props: { data: FAQ[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {props.data && props.data.length > 0
        ? props.data.map((item, i) => (
            <AccordionItem value={`item-${i}}`} key={i}>
              <AccordionTrigger className="text-xl">
                {item.Question}
              </AccordionTrigger>
              <AccordionContent>
                <span className="leading-loose">{item.Answer}</span>
              </AccordionContent>
            </AccordionItem>
          ))
        : null}
    </Accordion>
  )
}
