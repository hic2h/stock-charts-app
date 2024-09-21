import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github } from "lucide-react"

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-3xl font-bold">Stock Charts App</CardTitle>
            <Badge variant="secondary">v0.0.1</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">About the Project</h2>
            <p className="text-muted-foreground">The application is an interactive visualization platform designed to assist users in understanding market trends. Integrated with the Alpha Vantage API,</p>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">Key Features</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Search stock market Symbols</li>
              <li>Access comprehensive information about selected companies </li>
              <li>Analyze the financial position of any symbol with ease</li>
              <li>View, explore, and understand market trends, with a stock chart visualization.</li>
            </ul>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl font-semibold mb-2">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge>shadcn/ui</Badge>
              <Badge>Redux Toolkit</Badge>
              <Badge>React Router</Badge>
              <Badge>Highcharts</Badge>
              <Badge>Supabase Edge Functions</Badge>
              <Badge>Alpha Vantage API</Badge>
              <Badge>Vitejs</Badge>
              <Badge>Vercel</Badge>
            </div>
          </section>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <a href="https://github.com/hic2h/stock-charts-app" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub Repository
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default AboutPage