
import { startOfWeek, endOfWeek, format } from "date-fns"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "A linear area chart"



const chartConfig = {
  income: {
    label: "income",
    color: "var(--chart-1)",
  },
}

export function ChartAreaStacked({ chartData }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart - Linear</CardTitle>
        <CardDescription>
          Showing total income for this week
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="income"
              type="linear"
              fill="var(--color-income)"
              fillOpacity={0.4}
              stroke="var(--color-income)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              <span>
                
                {
                  format(startOfWeek(new Date()), 'yyyy-MM-dd')
                }
              </span>
              ,
              <span>
               {format(endOfWeek(new Date()), 'yyyy-MM-dd')}

              </span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
export default ChartAreaStacked
