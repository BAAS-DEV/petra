import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import LongCardDetail from "@/components/BAAS/Cards/LongCardDetail"
import { NewsCard } from "@/components/BAAS/Cards/NewsCard"
import { listenNowAlbums } from "@/components/BAAS/Cards/data"

const stories = [
  {
    title: "Mortgage demand grows, driven by sales of new homes",
  },
  {
    title:
      "Home prices rose for third straight month in April, S&P Case-Shiller index says",
  },
  {
    title:
      "Home sales barely budge from April to May in sluggish spring market",
  },
]

export default function News() {
  return (
    <>
      <section className="container  grid grid-cols-1 gap-2 md:grid-cols-2">
        <div className="grid h-full grid-cols-2 gap-1">
          <NewsCard
            key={0}
            album={listenNowAlbums[0]}
            className="mb-4 w-full"
            aspectRatio="portrait"
            width={250}
            height={330}
          />
          <NewsCard
            key={0}
            album={listenNowAlbums[1]}
            className="mb-4 w-full"
            aspectRatio="portrait"
            width={250}
            height={330}
          />
          <NewsCard
            key={0}
            album={listenNowAlbums[2]}
            className="mb-4 w-full"
            aspectRatio="portrait"
            width={250}
            height={330}
          />
          <NewsCard
            key={0}
            album={listenNowAlbums[3]}
            className="mb-4 w-full"
            aspectRatio="portrait"
            width={250}
            height={330}
          />
        </div>
        <div>
          <p className="text-md font-semibold text-muted-foreground">
            {"Live Feed"}
          </p>

          <h3 className="text-xl leading-none">{"CNBC Mortgage"}</h3>
          {stories.map((item, i) => (
            <LongCardDetail
              Title={item.title}
              Description={""}
              Key={0}
              MainImage={""}
              CreatedAt={new Date()}
              UpdatedAt={new Date()}
            />
          ))}
        </div>
      </section>
    </>
  )
}
