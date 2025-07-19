

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"
import { format, endOfMonth } from "date-fns"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {

  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart with text"

// const chartData = [
//   { status: "Confirmed", count: 275, fill: "var(--color-chrome)" },
//   { status: "Pending", count: 200, fill: "var(--color-safari)" },
//   { status: "Canceled", count: 287, fill: "var(--color-firefox)" },

// ]

const chartConfig = {
  Count: {
    label: "count",

  },
  chrome: {
    label: "Confirmed",
    color: "#39852ed1",
  },
  safari: {
    label: "Pending",
    color: "#d0ca3ed1",
  },
  firefox: {
    label: "Canceled",
    color: "#de3f3fd1",
  },

}

function AppointmentStatusPieChart({ chartData }) {
  const totalPitents = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut</CardTitle>
        <CardDescription>1-{`${format(new Date(), 'MMMM')} ___ ${format(endOfMonth(new Date()), 'dd-MMMM')}`}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="status"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalPitents}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Patients
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            

            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">

        <div className="text-muted-foreground leading-none">
          Showing total appointments status for this month
        </div>
      </CardFooter>
    </Card>
  )
}
export default AppointmentStatusPieChart
