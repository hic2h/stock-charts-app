import { InfoIcon } from 'lucide-react'

const WelcomeSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Interactive Chart Demo with Alpha Vantage API
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Welcome to our live demo which utilizes Alpha Vantage API. It fetches real-time data and drafts interactive charts for an array of companies.
          </p>
        </div>

        <div className="mt-10">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <InfoIcon className="h-6 w-6 text-blue-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="mt-2 text-sm text-gray-500">
                    To begin, just start typing a company name in the search box above and select the index of the company you want to discover.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection;