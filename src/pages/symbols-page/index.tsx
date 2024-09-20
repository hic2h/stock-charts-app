
import Spinner from "@/components/Spinner"
import { useNavigate, useParams } from "react-router-dom";
import { useFetchCompanyOverviewQuery } from "@/core/store/services/companiesApi"
import SymbolChart from "@/components/symbol-chart"
import CompanyDetails from "@/components/company-details"
import SymbolFinancialDetails from "@/components/symbol-financial-details"

const SymbolsPage = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const navigate = useNavigate();

  const { data: companyData, isFetching } = useFetchCompanyOverviewQuery(
    symbol || "",
    { skip: !symbol }
  );

  if (!symbol) {
    navigate('/');
  }

  if (isFetching) {
    return (
      <div className="flex items-center justify-center mt-64">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!companyData || !companyData.Symbol) {
    return (
      <div className="flex items-center justify-center mt-64">
        <p className="text-2xl text-center">No data found for symbol: {symbol}</p>
      </div>
    );
  }


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{companyData?.Name} ({companyData?.Symbol})</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SymbolChart />

        <div className="space-y-6">
          <CompanyDetails companyOverview={companyData} />
          <SymbolFinancialDetails companyOverview={companyData} />
        </div>
      </div>
    </div>
  );
}

export default SymbolsPage;