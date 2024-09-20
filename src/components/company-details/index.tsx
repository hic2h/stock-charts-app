import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { CompanyOverview } from "@/core/types/companies";
import { shortenNumber } from "@/lib/numbers";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Building2 } from "lucide-react";

type CompanyDetailsProps = {
  companyOverview: CompanyOverview;
}
const CompanyDetails: React.FC<CompanyDetailsProps> = ({ companyOverview }) => {
  
  const companyDetails: Record<string, string> = {
    "Name": companyOverview?.Name,
    "Sector": companyOverview?.Sector,
    "Industry": companyOverview?.Industry,
    "Address": companyOverview?.Address,
    "Website": companyOverview?.OfficialSite,
    "Fiscal Year End": companyOverview?.FiscalYearEnd,
    "Revenue (TTM)": shortenNumber(companyOverview?.RevenueTTM),
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Building2 className="mr-2" />
          Company Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]">
          <Table>
            <TableBody>
              {Object.entries(companyDetails).map(([key, value]) => (
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

export default CompanyDetails;