import { Building2, Zap, TrendingUp, Shield, Clock, Award } from 'lucide-react';
import { Card } from './ui/card';

export function CollateralPDF() {
  return (
    <div className="min-h-screen bg-white">
      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 15mm;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      {/* Print Button - Hidden in Print */}
      <div className="no-print fixed top-20 right-6 z-50">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all hover:shadow-xl"
        >
          🖨️ Print / Save PDF
        </button>
      </div>

      {/* Main Content - Optimized for Print */}
      <div className="max-w-4xl mx-auto bg-white">
        {/* Header with Brand */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 rounded-t-lg">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl mb-2">CR Equity.AI™</h1>
              <p className="text-blue-100 text-lg">Compliance-First, AI-Powered Lending</p>
            </div>
            <div className="text-right text-sm">
              <div className="mb-1">🌐 www.crequity.ai</div>
              <div className="mb-1">📞 +1 (949) 328-6622</div>
              <div>✉️ info@crequity.ai</div>
            </div>
          </div>
        </div>

        {/* Main Headline Section */}
        <div className="p-10 border-x border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-5xl mb-4 text-gray-900 leading-tight">
              Get Funded in Hours — Not Months
            </h2>
            <p className="text-2xl text-blue-600 mb-6">
              AI-Driven Direct Lending for Real Estate Deals from $100K to $100M
            </p>
          </div>

          {/* Pain Point */}
          <Card className="bg-red-50 border-red-200 p-6 mb-6">
            <h3 className="text-xl text-red-900 mb-3 flex items-center gap-2">
              <Clock className="h-6 w-6" />
              The Problem with Traditional Lending
            </h3>
            <p className="text-red-800 leading-relaxed">
              Traditional lenders slow you down. Committees, delays, and endless paperwork turn simple 
              opportunities into stalled transactions. Time is money, and waiting costs you deals.
            </p>
          </Card>

          {/* Solution */}
          <Card className="bg-blue-50 border-blue-200 p-6 mb-8">
            <h3 className="text-xl text-blue-900 mb-3 flex items-center gap-2">
              <Zap className="h-6 w-6" />
              The CR Equity.AI Solution
            </h3>
            <p className="text-blue-900 leading-relaxed mb-4">
              CR Equity.AI is different. We're a direct lender powered by real-time, AI-driven underwriting — 
              no brokers, no middlemen, no waiting.
            </p>
            <p className="text-blue-900 leading-relaxed">
              You submit a deal, our system analyzes it instantly, and you walk away with a funding decision 
              in the same moment.
            </p>
          </Card>

          {/* Key Advantages */}
          <div className="mb-8">
            <h3 className="text-2xl mb-6 text-gray-900 text-center">Key Advantages</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-gray-200 p-5 hover:border-blue-500 transition-all">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Lightning-Fast Decisions</h4>
                    <p className="text-gray-600 text-sm">Funding decisions in hours and days, not weeks and months</p>
                  </div>
                </div>
              </Card>

              <Card className="border-gray-200 p-5 hover:border-blue-500 transition-all">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">AI-Driven Underwriting</h4>
                    <p className="text-gray-600 text-sm">Evaluates risk, collateral, leverage, and exit strategy instantly</p>
                  </div>
                </div>
              </Card>

              <Card className="border-gray-200 p-5 hover:border-blue-500 transition-all">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Flexible Capital Solutions</h4>
                    <p className="text-gray-600 text-sm">Capital solutions from $100,000 to $100,000,000</p>
                  </div>
                </div>
              </Card>

              <Card className="border-gray-200 p-5 hover:border-blue-500 transition-all">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Direct Lending</h4>
                    <p className="text-gray-600 text-sm">No brokers, no committees, no friction — just results</p>
                  </div>
                </div>
              </Card>

              <Card className="border-gray-200 p-5 hover:border-blue-500 transition-all md:col-span-2">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Award className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Built by Real Estate & Private Equity Operators</h4>
                    <p className="text-gray-600 text-sm">Platform built by real estate & private equity operators who understand speed is everything</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Process Overview */}
          <div className="mb-8">
            <h3 className="text-2xl mb-6 text-gray-900 text-center">How It Works</h3>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-3 text-2xl">
                    1
                  </div>
                  <h4 className="text-gray-900 mb-2">Submit Your Deal</h4>
                  <p className="text-sm text-gray-600">Quick online application</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center mx-auto mb-3 text-2xl">
                    2
                  </div>
                  <h4 className="text-gray-900 mb-2">AI Analyzes in Real Time</h4>
                  <p className="text-sm text-gray-600">Instant risk assessment</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-3 text-2xl">
                    3
                  </div>
                  <h4 className="text-gray-900 mb-2">Decision Made Instantly</h4>
                  <p className="text-sm text-gray-600">No committees, no delays</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto mb-3 text-2xl">
                    4
                  </div>
                  <h4 className="text-gray-900 mb-2">Get Funded Fast</h4>
                  <p className="text-sm text-gray-600">Walk away with funding</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 text-white">
              <h3 className="text-2xl mb-6 text-center">Proven Track Record</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-1">$100K</div>
                  <div className="text-gray-300 text-sm">Minimum Loan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-1">$100M</div>
                  <div className="text-gray-300 text-sm">Maximum Loan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-1">Hours</div>
                  <div className="text-gray-300 text-sm">Decision Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-1">100%</div>
                  <div className="text-gray-300 text-sm">Direct Lending</div>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance & Security */}
          <Card className="bg-green-50 border-green-200 p-6 mb-8">
            <div className="flex items-start gap-3">
              <Shield className="h-8 w-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl text-green-900 mb-2">Compliance-First Approach</h3>
                <p className="text-green-800 leading-relaxed">
                  CR Equity.AI is built on a foundation of regulatory compliance and institutional-grade 
                  risk management. Our AI-driven platform meets the highest standards of transparency, 
                  security, and regulatory oversight.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action Footer */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 rounded-b-lg">
          <div className="text-center mb-6">
            <h3 className="text-3xl mb-3">Ready to Get Started?</h3>
            <p className="text-xl text-blue-100 mb-6">
              📍 Submit your deal today and experience AI direct lending at its best
            </p>
          </div>

          <div className="border-t border-blue-400 pt-6 mt-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-lg mb-1">🌐 Website</div>
                <a href="https://www.crequity.ai" className="text-blue-100 hover:text-white">
                  www.crequity.ai
                </a>
              </div>
              <div>
                <div className="text-lg mb-1">📞 Phone</div>
                <a href="tel:+19493286622" className="text-blue-100 hover:text-white">
                  +1 (949) 328-6622
                </a>
              </div>
              <div>
                <div className="text-lg mb-1">✉️ Email</div>
                <a href="mailto:info@crequity.ai" className="text-blue-100 hover:text-white">
                  info@crequity.ai
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-blue-400">
            <p className="text-sm text-blue-100">
              © 2026 CR Equity.AI™ — Compliance-First, AI-Powered Direct Lending
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Spacing for Screen View */}
      <div className="h-20 no-print"></div>
    </div>
  );
}
