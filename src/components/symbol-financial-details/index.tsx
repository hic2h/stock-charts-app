import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CompanyOverview } from "@/core/types/companies";
import { ScrollArea } from "@/components/ui/scroll-area"
import { DollarSign } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { shortenNumber } from "@/lib/numbers";

type SymbolFinancialDetailsProps = {
  companyOverview: CompanyOverview;
};
const SymbolFinancialDetails: React.FC<SymbolFinancialDetailsProps> = ({
  companyOverview,
}) => {

  const financialDetails: Record<string, string> = {
    Symbol: companyOverview?.Symbol,
    Exchange: companyOverview?.Exchange,
    "Market Capitalization": shortenNumber(companyOverview?.MarketCapitalization),
    "Dividend Per Share": shortenNumber(companyOverview?.DividendPerShare),
    "Shares Outstanding": shortenNumber(companyOverview?.SharesOutstanding),
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <DollarSign className="mr-2" />
          Financial Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]">
          <Table>
            <TableBody>
              {Object.entries(financialDetails).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell className="font-medium">{key}</TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export default SymbolFinancialDetails;