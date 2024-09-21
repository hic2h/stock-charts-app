import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Globe, Building } from "lucide-react"
import { MarketDetails } from "@/core/types/stocks"

interface MarketDetailsCardProps {
  details: MarketDetails
}

const MarketDetailsCard: React.FC<MarketDetailsCardProps> = ({ details }) => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{details.region} Market</span>
          <Badge variant={details.current_status === "open" ? "default" : "secondary"}>
            {details.current_status.charAt(0).toUpperCase() + details.current_status.slice(1)}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4">
          <Globe className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Type</p>
            <p className="text-sm text-muted-foreground">{details.market_type}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Building className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Primary Exchanges</p>
            <p className="text-sm text-muted-foreground">{details.primary_exchanges}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Trading Hours</p>
            <p className="text-sm text-muted-foreground">
              {details.local_open} - {details.local_close} (Local Time)
            </p>
          </div>
        </div>
        {details.notes && (
          <div className="mt-2">
            <p className="text-sm font-medium">Notes</p>
            <p className="text-sm text-muted-foreground">{details.notes}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default MarketDetailsCard