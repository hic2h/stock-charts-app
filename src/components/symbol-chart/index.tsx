import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart } from "lucide-react";

const SymbolChart: React.FC = () => {
  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center">
          <LineChart className="mr-2" />
          Stock Chart
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-muted flex items-center justify-center">
          <p className="text-muted-foreground">Chart Placeholder</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default SymbolChart;