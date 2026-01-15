import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  ArrowRight,
  Zap,
  Clock,
  Shield,
  Building2,
  TrendingUp,
  Globe,
  Gem,
  Sparkles,
  BarChart3,
  FileText,
  Bitcoin,
  CheckCircle2,
  Phone,
  Award,
  Lock,
  Users
} from 'lucide-react';

interface ProgramCardProps {
  name: string;
  description: string;
  maxLTV?: string;
  maxCLTV?: string;
  loanAmounts: string;
  minFICO?: string;
  speed: string;
  badge?: string;
  link: string;
  colorScheme?: 'blue' | 'indigo' | 'purple' | 'emerald' | 'amber' | 'rose';
}

function ProgramCard({
  name,
  description,
  maxLTV,
  maxCLTV,
  loanAmounts,
  minFICO,
  speed,
  badge,
  link,
  colorScheme = 'blue'
}: ProgramCardProps) {
  const colorSchemes = {
    blue: {
      gradient: 'from-blue-500/10 to-cyan-500/10',
      border: 'border-blue-200',
      badge: 'bg-blue-100 text-blue-700 border-blue-300',
      button: 'border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 hover:border-blue-300',
      speedText: 'text-blue-600',
      hoverGradient: 'from-blue-50/80 to-cyan-50/50'
    },
    indigo: {
      gradient: 'from-indigo-500/10 to-purple-500/10',
      border: 'border-indigo-200',
      badge: 'bg-indigo-100 text-indigo-700 border-indigo-300',
      button: 'border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800 hover:border-indigo-300',
      speedText: 'text-indigo-600',
      hoverGradient: 'from-indigo-50/80 to-purple-50/50'
    },
    purple: {
      gradient: 'from-purple-500/10 to-pink-500/10',
      border: 'border-purple-200',
      badge: 'bg-purple-100 text-purple-700 border-purple-300',
      button: 'border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800 hover:border-purple-300',
      speedText: 'text-purple-600',
      hoverGradient: 'from-purple-50/80 to-pink-50/50'
    },
    emerald: {
      gradient: 'from-emerald-500/10 to-teal-500/10',
      border: 'border-emerald-200',
      badge: 'bg-emerald-100 text-emerald-700 border-emerald-300',
      button: 'border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300',
      speedText: 'text-emerald-600',
      hoverGradient: 'from-emerald-50/80 to-teal-50/50'
    },
    amber: {
      gradient: 'from-amber-500/10 to-orange-500/10',
      border: 'border-amber-200',
      badge: 'bg-amber-100 text-amber-700 border-amber-300',
      button: 'border-amber-200 text-amber-700 hover:bg-amber-50 hover:text-amber-800 hover:border-amber-300',
      speedText: 'text-amber-600',
      hoverGradient: 'from-amber-50/80 to-orange-50/50'
    },
    rose: {
      gradient: 'from-rose-500/10 to-pink-500/10',
      border: 'border-rose-200',
      badge: 'bg-rose-100 text-rose-700 border-rose-300',
      button: 'border-rose-200 text-rose-700 hover:bg-rose-50 hover:text-rose-800 hover:border-rose-300',
      speedText: 'text-rose-600',
      hoverGradient: 'from-rose-50/80 to-pink-50/50'
    }
  };

  const colors = colorSchemes[colorScheme];

  return (
    <Card className={`p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${colors.gradient} border ${colors.border} group relative overflow-hidden`}>
      {/* Animated gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-foreground pr-4">{name}</h3>
          {badge && (
            <Badge variant="secondary" className={`${colors.badge} shrink-0`}>
              {badge}
            </Badge>
          )}
        </div>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        
        <div className="space-y-3 mb-6">
          {maxLTV && (
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm text-muted-foreground">Max LTV:</span>
              <span className="font-semibold text-foreground">{maxLTV}</span>
            </div>
          )}
          {maxCLTV && (
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm text-muted-foreground">Max CLTV:</span>
              <span className="font-semibold text-foreground">{maxCLTV}</span>
            </div>
          )}
          <div className="flex justify-between items-center py-2 border-b border-border/50">
            <span className="text-sm text-muted-foreground">Loan Amounts:</span>
            <span className="font-semibold text-foreground">{loanAmounts}</span>
          </div>
          {minFICO && (
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm text-muted-foreground">Min FICO:</span>
              <span className="font-semibold text-foreground">{minFICO}</span>
            </div>
          )}
          <div className="flex justify-between items-center py-2">
            <span className="text-sm text-muted-foreground">Speed:</span>
            <span className={`font-semibold ${colors.speedText}`}>{speed}</span>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          className={`w-full group/btn ${colors.button}`}
          onClick={() => window.location.href = link}
        >
          View Program
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  );
}

export function LoanProgramsPage() {
  const speedToFundingPrograms: ProgramCardProps[] = [
    {
      name: 'BTFU™ Bridge-to-Finish-Up',
      description: 'Transitional capital with automated conversion to stabilization',
      maxLTV: '75%',
      loanAmounts: '$250K – $25M',
      minFICO: '660+',
      speed: '24–48 hours',
      link: '/program/btfu-bridge',
      colorScheme: 'indigo'
    },
    {
      name: 'Flex 50™ Rapid Equity Program',
      description: '50% equity reduction with 24-hour funding',
      maxCLTV: '50%',
      loanAmounts: 'Up to $3M',
      minFICO: '680+',
      speed: '24 hours',
      badge: 'Featured',
      link: '/program/flex50-rapid',
      colorScheme: 'blue'
    },
    {
      name: '24-Hour Direct Lending',
      description: 'Same-day underwriting, instant approvals',
      loanAmounts: '$50K – $5M',
      speed: '24 hours',
      badge: 'Compliance-First',
      link: '/program/24hour-direct',
      colorScheme: 'emerald'
    },
    {
      name: 'Crypto-Asset Secured Lending',
      description: 'Digital asset collateral for liquidity',
      loanAmounts: '$100K – $10M',
      speed: '48 hours',
      badge: 'Blockchain-Verified',
      link: '/program/crypto-secured',
      colorScheme: 'purple'
    },
    {
      name: 'Instant AI Soft-Quote',
      description: 'Get indicative terms in seconds',
      loanAmounts: 'Any',
      speed: 'Instant',
      badge: 'No Credit Pull',
      link: '/program/instant-quote',
      colorScheme: 'amber'
    }
  ];

  const commercialPrograms: ProgramCardProps[] = [
    {
      name: 'Flex50™ Program',
      description: 'Hybrid senior + mezzanine capital, non-dilutive equity',
      maxCLTV: '50%',
      loanAmounts: 'Up to $3M',
      minFICO: '680+',
      speed: '24 hours',
      link: '/program/flex50',
      colorScheme: 'blue'
    },
    {
      name: 'BTFU™ Bridge-to-Finish-Up Loan',
      description: 'Bridge capital aligned with rehab milestones',
      maxLTV: '75%',
      loanAmounts: '$250K – $25M',
      minFICO: '660+',
      speed: '48 hours',
      link: '/program/btfu',
      colorScheme: 'indigo'
    },
    {
      name: 'Second Mortgage',
      description: 'Standalone or piggyback structures for flexible leverage',
      maxCLTV: '85%',
      loanAmounts: '$100K – $5M',
      minFICO: '620+',
      speed: '72 hours',
      link: '/program/second-mortgage',
      colorScheme: 'emerald'
    }
  ];

  const nonQMPrograms: ProgramCardProps[] = [
    {
      name: 'DSCR Loans (Domestic + Foreign National)',
      description: 'Investor-focused, no personal income required',
      maxLTV: '75%',
      loanAmounts: '$75K – $25M',
      minFICO: '660+',
      speed: '5–7 days',
      link: '/program/dscr',
      colorScheme: 'blue'
    },
    {
      name: 'Bank Statement (12/24mo)',
      description: 'Flexible documentation for self-employed borrowers',
      maxLTV: '85%',
      loanAmounts: '$75K – $5M',
      minFICO: '620+',
      speed: '5–7 days',
      link: '/program/bank-statement',
      colorScheme: 'indigo'
    },
    {
      name: '1099 Income',
      description: 'Tailored underwriting for independent contractors',
      maxLTV: '85%',
      loanAmounts: '$75K – $5M',
      minFICO: '620+',
      speed: '5–7 days',
      link: '/program/1099-income',
      colorScheme: 'purple'
    },
    {
      name: 'P&L Only (1Y/2Y)',
      description: 'Business performance-based qualification',
      maxLTV: '85%',
      loanAmounts: '$75K – $5M',
      minFICO: '620+',
      speed: '5–7 days',
      link: '/program/pl-only',
      colorScheme: 'emerald'
    },
    {
      name: 'WVOE',
      description: 'Written Verification of Employment programs',
      maxLTV: '85%',
      loanAmounts: '$75K – $5M',
      minFICO: '620+',
      speed: '5–7 days',
      link: '/program/wvoe',
      colorScheme: 'amber'
    },
    {
      name: 'Asset Utilization',
      description: 'Convert assets into qualifying income',
      maxLTV: '80%',
      loanAmounts: '$100K – $10M',
      minFICO: '660+',
      speed: '5–7 days',
      link: '/program/asset-utilization',
      colorScheme: 'rose'
    },
    {
      name: 'Full Doc Non-QM (1Y/2Y)',
      description: 'Expanded credit box, higher DTI flexibility',
      maxLTV: '85%',
      loanAmounts: '$75K – $5M',
      minFICO: '620+',
      speed: '5–7 days',
      link: '/program/full-doc-nonqm',
      colorScheme: 'blue'
    },
    {
      name: 'ITIN Borrowers',
      description: 'Inclusive lending for ITIN holders',
      maxLTV: '80%',
      loanAmounts: '$75K – $2M',
      minFICO: '620+',
      speed: '5–7 days',
      link: '/program/itin',
      colorScheme: 'indigo'
    },
    {
      name: 'Foreign National DSCR',
      description: 'Passport accepted, foreign credit permitted',
      maxLTV: '75%',
      loanAmounts: '$75K – $10M',
      minFICO: '660+',
      speed: '5–7 days',
      link: '/program/foreign-national-dscr',
      colorScheme: 'purple'
    },
    {
      name: 'Second Mortgage (Non-QM)',
      description: 'Flexible secondary financing options',
      maxCLTV: '85%',
      loanAmounts: '$100K – $5M',
      minFICO: '620+',
      speed: '5–7 days',
      link: '/program/second-mortgage-nonqm',
      colorScheme: 'emerald'
    }
  ];

  const assetMonetizationPrograms: ProgramCardProps[] = [
    {
      name: 'In-Ground Lending',
      description: 'Capital solutions for mining and natural resources',
      loanAmounts: '$10M – $500M+',
      speed: '30–60 days',
      badge: '5+ Years Operating',
      link: '/program/in-ground',
      colorScheme: 'emerald'
    },
    {
      name: 'Asset Tokenization',
      description: 'Fractionalized securities enabling global investor access',
      loanAmounts: 'Varies',
      speed: '30–45 days',
      badge: 'Blockchain-Verified',
      link: '/program/tokenization',
      colorScheme: 'purple'
    },
    {
      name: 'Forward-Contract Financing',
      description: 'Pre-production liquidity with guaranteed offtake pricing',
      loanAmounts: '$5M – $100M',
      speed: '30 days',
      link: '/program/forward-contract',
      colorScheme: 'blue'
    },
    {
      name: '144A Bond Facilities',
      description: 'Large-scale, non-dilutive credit lines with multi-year terms',
      loanAmounts: '$50M – $500M+',
      speed: '60–90 days',
      badge: 'Institutional',
      link: '/program/144a-bond',
      colorScheme: 'indigo'
    }
  ];

  const trustStats = [
    { icon: TrendingUp, value: '$2.4B+', label: 'Funded to Date', color: 'from-blue-500 to-blue-600' },
    { icon: Clock, value: '24hrs', label: 'Fastest Funding', color: 'from-emerald-500 to-emerald-600' },
    { icon: Users, value: '10,000+', label: 'Investors Served', color: 'from-purple-500 to-purple-600' },
    { icon: Globe, value: '50', label: 'States Covered', color: 'from-indigo-500 to-indigo-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Powered Lending Platform
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Loan Programs & Capital Solutions
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
              CR Equity AI™ is a direct, balance-sheet, AI-driven lender. We fund in as little as 24 hours on select programs. 
              Our suite covers Commercial Lending, Non-QM Lending, Asset Monetization, and Speed-to-Funding/Digital Asset solutions — 
              all delivered through a compliance-first, tech-enabled TPO platform.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
                Partner With Us
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
                Get Instant Terms
              </Button>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 md:h-16 fill-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} className="p-6 text-center bg-white border-2 border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-3`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <Tabs defaultValue="speed" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-white border border-border shadow-sm h-auto p-1">
            <TabsTrigger 
              value="speed" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white py-3 px-4 text-sm md:text-base transition-all"
            >
              <Zap className="w-4 h-4 mr-2 hidden sm:block" />
              Speed-to-Funding
            </TabsTrigger>
            <TabsTrigger 
              value="commercial"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-purple-600 data-[state=active]:text-white py-3 px-4 text-sm md:text-base transition-all"
            >
              <Building2 className="w-4 h-4 mr-2 hidden sm:block" />
              Commercial
            </TabsTrigger>
            <TabsTrigger 
              value="nonqm"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white py-3 px-4 text-sm md:text-base transition-all"
            >
              <FileText className="w-4 h-4 mr-2 hidden sm:block" />
              Non-QM
            </TabsTrigger>
            <TabsTrigger 
              value="asset"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-600 data-[state=active]:to-teal-600 data-[state=active]:text-white py-3 px-4 text-sm md:text-base transition-all"
            >
              <Gem className="w-4 h-4 mr-2 hidden sm:block" />
              Asset Monetization
            </TabsTrigger>
          </TabsList>

          <TabsContent value="speed" className="space-y-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-2xl mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-3">
                Speed-to-Funding & Digital Asset Lending
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Fast-track your funding with our AI-powered lending solutions designed for speed and efficiency.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {speedToFundingPrograms.map((program, idx) => (
                <ProgramCard key={idx} {...program} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="commercial" className="space-y-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-2xl mb-4">
                <Building2 className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-3">
                Commercial Lending
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Flexible commercial lending solutions for real estate investors and developers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commercialPrograms.map((program, idx) => (
                <ProgramCard key={idx} {...program} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="nonqm" className="space-y-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-3">
                Non-QM Lending
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                White-labeled via AD Mortgage. Alternative documentation programs for diverse borrower profiles.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nonQMPrograms.map((program, idx) => (
                <ProgramCard key={idx} {...program} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="asset" className="space-y-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-2xl mb-4">
                <Gem className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-3">
                Asset Monetization
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Institutional-scale capital solutions for mining, natural resources, and alternative asset classes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {assetMonetizationPrograms.map((program, idx) => (
                <ProgramCard key={idx} {...program} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Positioning Statement */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full">
            <Award className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Commitment</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Compliance-First, Tech-Native TPO Platform
          </h2>
          <p className="text-lg text-blue-100 leading-relaxed mb-8">
            CREquity.ai is the compliance-first, tech-native TPO platform engineered for speed, agility, and funding certainty — 
            delivering audit-ready origination with partner-grade infrastructure.
          </p>
          <p className="text-lg text-blue-100 leading-relaxed">
            By automating underwriting, valuation, and closing through modular AI engines, we fund faster than traditional lenders 
            while maintaining rates and terms that are at or below market once speed-to-capital is factored in.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to Borrow Smarter?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Apply now at www.CREquity.ai
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <Phone className="w-5 h-5" />
            <a href="tel:+19493286622" className="text-lg hover:text-blue-600 transition-colors">
              +1 (949) 328-6622
            </a>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
              Partner With Us
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
              Get Instant Terms
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}