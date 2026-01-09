import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import {
  ArrowRight,
  Download,
  Zap,
  Shield,
  CheckCircle2,
  FileText,
  Clock,
  TrendingUp,
  Home,
  DollarSign,
  Percent,
  Calendar,
  User,
  Building2
} from 'lucide-react';

interface RateTermsRow {
  label: string;
  value: string;
}

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ProgramDetailProps {
  programName: string;
  description: string;
  badges: string[];
  ratesTerms: RateTermsRow[];
  eligibility: {
    whoIsThisFor: string[];
    idealScenarios: string[];
  };
  aiAdvantages: string[];
  processSteps: ProcessStep[];
  faqs: FAQ[];
}

export function ProgramDetailPage({
  programName,
  description,
  badges,
  ratesTerms,
  eligibility,
  aiAdvantages,
  processSteps,
  faqs
}: ProgramDetailProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-4xl">
            <Button
              variant="ghost"
              className="text-blue-200 hover:text-white hover:bg-white/10 mb-6 -ml-4"
              onClick={() => window.history.back()}
            >
              ← Back to All Programs
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {programName}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Download className="mr-2 h-5 w-5" />
                Download One-Pager
              </Button>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 fill-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Key Highlights Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {badges.map((badge, idx) => {
            const icons = [
              <Zap key="zap" className="w-5 h-5" />,
              <Shield key="shield" className="w-5 h-5" />,
              <TrendingUp key="trending" className="w-5 h-5" />
            ];
            return (
              <Card key={idx} className="p-6 bg-gradient-to-br from-blue-50 to-white border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-600 text-white rounded-lg">
                    {icons[idx] || <CheckCircle2 className="w-5 h-5" />}
                  </div>
                  <span className="font-semibold text-foreground">{badge}</span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Rates & Terms Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Rates & Terms</h2>
          <Card className="overflow-hidden border border-border">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
              <h3 className="text-lg font-semibold text-white">Program Details</h3>
            </div>
            <div className="divide-y divide-border">
              {ratesTerms.map((row, idx) => {
                const getIcon = (label: string) => {
                  if (label.includes('Loan')) return <DollarSign className="w-5 h-5 text-blue-600" />;
                  if (label.includes('Rate')) return <Percent className="w-5 h-5 text-blue-600" />;
                  if (label.includes('LTV') || label.includes('CLTV')) return <Home className="w-5 h-5 text-blue-600" />;
                  if (label.includes('Term')) return <Calendar className="w-5 h-5 text-blue-600" />;
                  if (label.includes('Credit') || label.includes('FICO')) return <User className="w-5 h-5 text-blue-600" />;
                  if (label.includes('Property')) return <Building2 className="w-5 h-5 text-blue-600" />;
                  return <FileText className="w-5 h-5 text-blue-600" />;
                };
                
                return (
                  <div key={idx} className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      {getIcon(row.label)}
                      <span className="font-medium text-foreground">{row.label}</span>
                    </div>
                    <span className="font-semibold text-lg text-blue-700">{row.value}</span>
                  </div>
                );
              })}
            </div>
          </Card>
        </section>

        {/* Eligibility & Use Cases */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Eligibility & Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                Who This Is For
              </h3>
              <ul className="space-y-3">
                {eligibility.whoIsThisFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            <Card className="p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Ideal Scenarios
              </h3>
              <ul className="space-y-3">
                {eligibility.idealScenarios.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* AI & Compliance Advantages */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">AI & Compliance Advantages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiAdvantages.map((advantage, idx) => (
              <Card key={idx} className="p-5 border border-blue-100 bg-gradient-to-br from-blue-50/50 to-white hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-600 text-white rounded-lg shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{advantage}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Process Overview</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <Card key={idx} className="p-6 border border-border relative overflow-hidden group hover:shadow-lg transition-shadow">
                {/* Step number background */}
                <div className="absolute top-0 right-0 text-8xl font-bold text-gray-100 -mr-4 -mt-4 group-hover:text-blue-50 transition-colors">
                  {step.number}
                </div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4 text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-blue-300" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <Card className="border border-border">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b last:border-b-0">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-br from-blue-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Apply now and experience the speed and efficiency of CR Equity AI™
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Download className="mr-2 h-5 w-5" />
              Download One-Pager
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

// Example usage with sample data
export function SampleProgramDetail() {
  const sampleData: ProgramDetailProps = {
    programName: "Flex50™ Rapid Equity Program",
    description: "50% equity reduction with 24-hour funding for real estate investors seeking rapid capital deployment",
    badges: [
      "24-Hour Funding Available",
      "Audit-Ready Files",
      "At or Below Market Rates"
    ],
    ratesTerms: [
      { label: "Loan Amounts", value: "Up to $3M" },
      { label: "Rate Range", value: "7.5% - 9.5%" },
      { label: "Max CLTV", value: "50%" },
      { label: "Term Options", value: "12-36 months" },
      { label: "Credit Score Minimum", value: "680+" },
      { label: "Eligible Property Types", value: "SFR, Multi-family, Commercial" }
    ],
    eligibility: {
      whoIsThisFor: [
        "Real estate investors",
        "Fix-and-flip developers",
        "Portfolio holders",
        "Bridge loan refinancers"
      ],
      idealScenarios: [
        "Quick acquisition opportunities",
        "Cash-out for next investment",
        "Rehab project funding",
        "Portfolio expansion"
      ]
    },
    aiAdvantages: [
      "AI underwriting",
      "Blockchain-secured documentation",
      "24-hour decisioning",
      "Audit-ready files"
    ],
    processSteps: [
      {
        number: 1,
        title: "Apply",
        description: "Submit your application online in minutes with our streamlined digital process"
      },
      {
        number: 2,
        title: "AI Underwriting",
        description: "Our AI engine analyzes your application and provides instant preliminary approval"
      },
      {
        number: 3,
        title: "Docs & Closing",
        description: "Complete documentation digitally and schedule your closing at your convenience"
      },
      {
        number: 4,
        title: "Funding",
        description: "Receive funds in as little as 24-48 hours after final approval"
      }
    ],
    faqs: [
      {
        question: "What makes the Flex50™ different from traditional lending?",
        answer: "The Flex50™ program combines senior and mezzanine capital into a single product, reducing your equity requirement by 50% while maintaining competitive rates. Our AI-driven process also enables 24-hour approvals versus the typical 2-4 week timeline."
      },
      {
        question: "What property types are eligible?",
        answer: "We accept single-family residential, multi-family (up to 4 units), and certain commercial properties. Each property is evaluated based on location, condition, and investment strategy."
      },
      {
        question: "How does the 24-hour funding work?",
        answer: "Once you submit a complete application with all required documentation, our AI underwriting engine processes your loan in real-time. Approved applications move to closing within 24-48 hours, with funds disbursed immediately upon closing."
      },
      {
        question: "Are there prepayment penalties?",
        answer: "Prepayment terms vary by loan structure. Many of our programs offer flexible prepayment options with minimal or no penalties after the initial period. Details are provided in your loan estimate."
      },
      {
        question: "What documentation is required?",
        answer: "Standard requirements include proof of income, asset verification, property details, and credit authorization. Our platform guides you through the exact documents needed for your specific scenario."
      },
      {
        question: "Can I use this for multiple properties?",
        answer: "Yes! The Flex50™ program is designed to scale with your portfolio. We offer streamlined processes for investors managing multiple properties and can structure portfolio-level financing."
      }
    ]
  };

  return <ProgramDetailPage {...sampleData} />;
}
