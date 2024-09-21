import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSymbolIntradayStockQuery } from "@/core/store/services/stocksApi";
import { LineChart } from "lucide-react";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import React from "react";


type SymbolChartProps = {
  symbol?: string;
};
const SymbolChart: React.FC<SymbolChartProps> = ({ symbol }) => {
  const [chartOptions, setChartOptions] = React.useState({});
  const { data: stockData, isFetching } = useSymbolIntradayStockQuery(symbol || "", {
    skip: !symbol,
  });

  React.useEffect(() => {
    if (!stockData) {
      return;
    }

    setChartOptions({
      title: {
        text: `${symbol} Stock Price`,
      },
      series: [
        {
          type: 'candlestick',
          name: `${symbol} Stock Price`,
          data: stockData,
          tooltip: {
            valueDecimals: 2,
          },
        },
      ],
    });
  }
    , [stockData, symbol]);


  if (!symbol) {
    return null;
  }

  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center">
          <LineChart className="mr-2" />
          Stock Chart
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isFetching && (
          <div className="flex items-center justify-center mt-4">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        )}

        {stockData && (
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={'stockChart'}
            options={chartOptions}
          />
        )}
      </CardContent>
    </Card>
  );
}

export default SymbolChart;