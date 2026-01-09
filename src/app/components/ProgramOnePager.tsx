import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Download,
  Printer,
  CheckCircle2,
  Zap,
  Shield,
  TrendingUp,
  Phone,
  Mail,
  Globe,
  DollarSign,
  Percent,
  Calendar,
  Home,
  User,
  Building2,
  Clock
} from 'lucide-react';

interface OnePagerData {
  programName: string;
  tagline: string;
  description: string;
  keyBenefits: string[];
  ratesTerms: {
    loanAmounts: string;
    rateRange: string;
    maxLTV?: string;
    maxCLTV?: string;
    termOptions: string;
    minFICO: string;
    propertyTypes: string;
  };
  eligibility: string[];
  idealFor: string[];
  processSteps: string[];
  aiFeatures: string[];
  colorScheme?: 'blue' | 'indigo' | 'purple' | 'emerald';
}

export function ProgramOnePager({ data }: { data: OnePagerData }) {
  const colorSchemes = {
    blue: {
      primary: '#2563eb',
      secondary: '#3b82f6',
      light: '#dbeafe',
      gradient: 'from-blue-600 to-cyan-600'
    },
    indigo: {
      primary: '#4f46e5',
      secondary: '#6366f1',
      light: '#e0e7ff',
      gradient: 'from-indigo-600 to-purple-600'
    },
    purple: {
      primary: '#9333ea',
      secondary: '#a855f7',
      light: '#f3e8ff',
      gradient: 'from-purple-600 to-pink-600'
    },
    emerald: {
      primary: '#059669',
      secondary: '#10b981',
      light: '#d1fae5',
      gradient: 'from-emerald-600 to-teal-600'
    }
  };

  const colors = colorSchemes[data.colorScheme || 'blue'];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Print Button - Hidden when printing */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-2">
        <Button
          onClick={handlePrint}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg"
        >
          <Printer className="w-4 h-4 mr-2" />
          Print / Save as PDF
        </Button>
        <Button
          onClick={() => window.history.back()}
          variant="outline"
        >
          Back
        </Button>
      </div>

      {/* One-Pager Container - Optimized for printing */}
      <div className="max-w-[8.5in] mx-auto bg-white shadow-lg print:shadow-none my-8 print:my-0">
        <div className="p-12 print:p-8">
          {/* Header */}
          <div className={`bg-gradient-to-r ${colors.gradient} text-white p-6 -mx-12 -mt-12 mb-8 print:-mx-8 print:-mt-8`}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2">{data.programName}</h1>
                <p className="text-xl text-white/90 mb-4">{data.tagline}</p>
                <p className="text-white/80 leading-relaxed max-w-2xl">
                  {data.description}
                </p>
              </div>
              <div className="text-right">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                  <div className="text-sm text-white/80">Funding Speed</div>
                  <div className="text-2xl font-bold">24-48hrs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Key Benefits */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-8 h-8 bg-gradient-to-r ${colors.gradient} text-white rounded-lg flex items-center justify-center`}>
                    <Zap className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Key Benefits</h2>
                </div>
                <ul className="space-y-2">
                  {data.keyBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-8 h-8 bg-gradient-to-r ${colors.gradient} text-white rounded-lg flex items-center justify-center`}>
                    <User className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Ideal For</h2>
                </div>
                <ul className="space-y-2">
                  {data.idealFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Eligibility */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-8 h-8 bg-gradient-to-r ${colors.gradient} text-white rounded-lg flex items-center justify-center`}>
                    <Shield className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Eligibility</h2>
                </div>
                <ul className="space-y-2">
                  {data.eligibility.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Rates & Terms */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-8 h-8 bg-gradient-to-r ${colors.gradient} text-white rounded-lg flex items-center justify-center`}>
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Rates & Terms</h2>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 flex items-center gap-2">
                        <DollarSign className="w-3.5 h-3.5" />
                        Loan Amounts
                      </span>
                      <span className="font-semibold text-gray-900">{data.ratesTerms.loanAmounts}</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 flex items-center gap-2">
                        <Percent className="w-3.5 h-3.5" />
                        Rate Range
                      </span>
                      <span className="font-semibold text-gray-900">{data.ratesTerms.rateRange}</span>
                    </div>
                  </div>
                  {data.ratesTerms.maxLTV && (
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 flex items-center gap-2">
                          <Home className="w-3.5 h-3.5" />
                          Max LTV
                        </span>
                        <span className="font-semibold text-gray-900">{data.ratesTerms.maxLTV}</span>
                      </div>
                    </div>
                  )}
                  {data.ratesTerms.maxCLTV && (
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 flex items-center gap-2">
                          <Home className="w-3.5 h-3.5" />
                          Max CLTV
                        </span>
                        <span className="font-semibold text-gray-900">{data.ratesTerms.maxCLTV}</span>
                      </div>
                    </div>
                  )}
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" />
                        Term Options
                      </span>
                      <span className="font-semibold text-gray-900">{data.ratesTerms.termOptions}</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 flex items-center gap-2">
                        <User className="w-3.5 h-3.5" />
                        Min FICO
                      </span>
                      <span className="font-semibold text-gray-900">{data.ratesTerms.minFICO}</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 flex items-center gap-2">
                        <Building2 className="w-3.5 h-3.5" />
                        Property Types
                      </span>
                      <span className="font-semibold text-gray-900 text-right text-xs">{data.ratesTerms.propertyTypes}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Features */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-8 h-8 bg-gradient-to-r ${colors.gradient} text-white rounded-lg flex items-center justify-center`}>
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">AI-Powered Features</h2>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {data.aiFeatures.map((feature, idx) => (
                    <div key={idx} className="bg-blue-50 border border-blue-200 p-2 rounded text-xs text-blue-800 font-medium text-center">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-8 h-8 bg-gradient-to-r ${colors.gradient} text-white rounded-lg flex items-center justify-center`}>
                <Clock className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Simple 4-Step Process</h2>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {data.processSteps.map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-r ${colors.gradient} text-white rounded-full flex items-center justify-center font-bold text-lg`}>
                    {idx + 1}
                  </div>
                  <p className="text-sm font-medium text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className={`bg-gradient-to-r ${colors.gradient} text-white p-6 -mx-12 -mb-12 print:-mx-8 print:-mb-8`}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
                <p className="text-white/80">Apply now and get funded in as little as 24-48 hours</p>
              </div>
              <div className="text-right space-y-1">
                <div className="flex items-center gap-2 text-white/90 text-sm justify-end">
                  <Phone className="w-4 h-4" />
                  <span>+1 (949) 328-6622</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm justify-end">
                  <Mail className="w-4 h-4" />
                  <span>info@crequity.ai</span>
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm justify-end">
                  <Globe className="w-4 h-4" />
                  <span>www.CREquity.ai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          @page {
            size: letter;
            margin: 0;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:my-0 {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
          .print\\:-mx-8 {
            margin-left: -2rem !important;
            margin-right: -2rem !important;
          }
          .print\\:-mt-8 {
            margin-top: -2rem !important;
          }
          .print\\:-mb-8 {
            margin-bottom: -2rem !important;
          }
          .print\\:p-8 {
            padding: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}

// Sample One-Pager with data
export function SampleOnePager() {
  const sampleData: OnePagerData = {
    programName: "Flex50™ Rapid Equity Program",
    tagline: "50% Equity Reduction with 24-Hour Funding",
    description: "The Flex50™ program combines senior and mezzanine capital into a single hybrid product, reducing your equity requirement by 50% while maintaining competitive market rates. Perfect for real estate investors seeking rapid capital deployment.",
    keyBenefits: [
      "50% reduction in required equity",
      "24-hour funding on approved applications",
      "Non-dilutive capital structure",
      "Competitive market rates",
      "AI-powered underwriting",
      "Improved DSCR for portfolio expansion"
    ],
    idealFor: [
      "Real estate investors",
      "Fix-and-flip developers",
      "Portfolio holders seeking liquidity",
      "Bridge loan refinancers",
      "Acquisition opportunities"
    ],
    eligibility: [
      "U.S. citizens or permanent residents",
      "Investment property owners",
      "Minimum 680 FICO score",
      "Property in good condition",
      "Clear exit strategy"
    ],
    ratesTerms: {
      loanAmounts: "Up to $3M",
      rateRange: "7.5% - 9.5%",
      maxCLTV: "50%",
      termOptions: "12-36 months",
      minFICO: "680+",
      propertyTypes: "SFR, Multi-family, Commercial"
    },
    aiFeatures: [
      "AI Underwriting",
      "24hr Decisioning",
      "Blockchain Docs",
      "Audit-Ready Files"
    ],
    processSteps: [
      "Submit Application",
      "AI Underwriting Review",
      "Digital Documentation",
      "Fund in 24-48hrs"
    ],
    colorScheme: 'blue'
  };

  return <ProgramOnePager data={sampleData} />;
}
