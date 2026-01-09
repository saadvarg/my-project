import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  ArrowRight, 
  Zap, 
  Clock, 
  Shield, 
  TrendingUp,
  CircleCheck,
  Building2,
  Coins,
  Mountain,
  Sparkles,
  Award,
  Lock,
  Globe,
  BarChart3,
  FileText,
  Users,
  Target,
  Layers,
  Gem
} from 'lucide-react';

export function FinalHomepage() {
  const credibilityItems = [
    'Flex50™',
    'BTFU™',
    'In-Ground Asset Monetization',
    '1,000+ Lenders',
    'AI Underwriting',
    'Compliance Ready'
  ];

  const featuredPrograms = [
    {
      name: 'Flex50™ Program',
      description: 'Hybrid 50/50 capital structure for transitional/value-add real estate.',
      icon: Building2,
      color: 'from-blue-500 to-blue-600',
      link: '#flex50'
    },
    {
      name: 'BTFU™ Loan Product',
      description: 'Bridge-to-Takeout Flex Underwriting™ for multifamily and workforce housing.',
      icon: Zap,
      color: 'from-indigo-500 to-indigo-600',
      link: '#btfu'
    },
    {
      name: 'In-Ground Asset Monetization',
      description: 'Tokenization and 144A bond facilities for mining and natural resources.',
      icon: Mountain,
      color: 'from-emerald-500 to-emerald-600',
      link: '#in-ground'
    }
  ];

  const stats = [
    { value: '$2.4B+', label: 'Funded to Date' },
    { value: '48hrs', label: 'Average Approval Time' },
    { value: '10,000+', label: 'Investors Served' },
    { value: '50', label: 'States Covered' }
  ];

  const flex50Features = [
    {
      title: 'Borrower Benefits',
      items: [
        '50% reduction in required equity',
        'Faster acquisitions',
        'Improved DSCR',
        'No ownership dilution'
      ]
    },
    {
      title: 'Lender Benefits',
      items: [
        'Enhanced yield',
        'Lower risk profile',
        'Automated AI monitoring',
        'Clear exit strategy'
      ]
    },
    {
      title: 'Key Features',
      items: [
        'Competitive rates',
        'Interest-only during rehab',
        'Draw-based funding',
        'Non-dilutive Flex Capital'
      ]
    }
  ];

  const btfuOptions = [
    { name: 'HUD', description: 'Government-backed takeout pathway' },
    { name: 'Impact', description: 'ESG-focused financing' },
    { name: 'XL', description: 'Large portfolio solutions' },
    { name: 'Green', description: 'Sustainable project funding' }
  ];

  const inGroundSolutions = [
    {
      title: '144A Bond Facilities',
      description: 'Institutional credit lines backed by verified reserves.',
      icon: FileText
    },
    {
      title: 'Forward-Contract Financing',
      description: 'Pre-production liquidity with guaranteed offtake pricing.',
      icon: TrendingUp
    },
    {
      title: 'Tokenization',
      description: 'Fractionalized digital securities for global investor access.',
      icon: Coins
    }
  ];

  const assetTypes = [
    'Gold',
    'Silver',
    'Copper',
    'Lithium',
    'Rare Earths',
    'Battery Metals',
    'Hydrocarbons'
  ];

  const partnerships = [
    {
      name: 'Rate Insurance',
      description: 'Instant, compliant insurance quotes to prevent closing delays.',
      icon: Shield
    },
    {
      name: 'Dovly AI',
      description: 'Credit optimization for better leverage and lower rates.',
      icon: BarChart3
    },
    {
      name: 'Duck Funding',
      description: 'Transactional & EMD funding for rapid acquisitions.',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI1NjNlYiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-gray-900 tracking-tight leading-tight">
              Fast, Flexible,{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI-Powered
              </span>
              <br />
              Capital Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              From real estate to in-ground assets, CR Equity.Ai™ delivers 
              institutional-grade funding with speed and certainty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 text-lg group">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 px-10 text-lg"
              >
                Explore Programs
              </Button>
            </div>

            {/* Credibility Bar */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {credibilityItems.map((item, index) => (
                <Badge 
                  key={index}
                  className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-2 text-sm"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Featured Programs</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Tailored capital solutions across asset classes and investment strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {featuredPrograms.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-white border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 overflow-hidden group"
                  >
                    <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                    <div className="p-6">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${program.color} mb-4`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl mb-3 text-gray-900">{program.name}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {program.description}
                      </p>
                      <a 
                        href={program.link}
                        className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8">
                See All Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Proof & Results */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl text-white mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flex50™ Program Details */}
      <section id="flex50" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                Hybrid Capital Structure
              </Badge>
              <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Flex50™ Program</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                50% senior debt + 50% flexible equity-like capital for transitional and value-add real estate.
              </p>
            </div>

            <Card className="bg-white border-gray-200 shadow-md p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {flex50Features.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-xl mb-4 text-gray-900 flex items-center gap-2">
                      <Layers className="h-5 w-5 text-blue-600" />
                      {category.title}
                    </h3>
                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <CircleCheck className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  Typical Terms
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                  <div>
                    <span className="block text-gray-500 mb-1">Senior Debt Rate</span>
                    <span className="text-lg text-gray-900">6.75–9.25%</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 mb-1">Flex Return</span>
                    <span className="text-lg text-gray-900">8–12%</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 mb-1">Max LTC</span>
                    <span className="text-lg text-gray-900">Up to 85%</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="bg-gradient-to-r from-gray-100 to-blue-50 border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg text-gray-900 mb-3">Performance Triggers</h4>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">1</div>
                  <span className="text-gray-700">Acquisition</span>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 rotate-90 md:rotate-0" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">2</div>
                  <span className="text-gray-700">Stabilization</span>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 rotate-90 md:rotate-0" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center">3</div>
                  <span className="text-gray-700">Takeout</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Tied to DSCR and occupancy thresholds
              </p>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 group">
                See If You Qualify
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* BTFU™ Loan Product */}
      <section id="btfu" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">
                Bridge-to-Takeout
              </Badge>
              <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">BTFU™ Loan Product</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
                Proprietary bridge financing with automated transition to long-term takeout.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center text-lg text-indigo-700">
                <span>The smarter bridge to long-term capital.</span>
                <span className="hidden sm:inline">•</span>
                <span>Flexibility now. Certainty later.</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Card className="bg-white border-gray-200 shadow-sm p-8">
                <h3 className="text-2xl mb-6 text-gray-900 flex items-center gap-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  Borrower Benefits
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <CircleCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Single product from acquisition to stabilization</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CircleCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Lower cost of capital</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CircleCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Predictable pathway to permanent financing</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-white border-gray-200 shadow-sm p-8">
                <h3 className="text-2xl mb-6 text-gray-900 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                  Lender Benefits
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <CircleCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Higher yields during bridge phase</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CircleCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Lower risk post-stabilization</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CircleCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Automated monitoring and reporting</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200 p-8">
              <h3 className="text-2xl mb-6 text-gray-900 text-center">Optional Add-Ons</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {btfuOptions.map((option, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all">
                    <h4 className="text-lg text-gray-900 mb-2">{option.name}</h4>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            <div className="text-center mt-8">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 group">
                Explore BTFU™ Options
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* In-Ground Asset Monetization */}
      <section id="in-ground" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-emerald-200">
                Mining & Natural Resources
              </Badge>
              <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">In-Ground Asset Monetization</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Global capital platform using tokenization, 144A bonds, and forward contracts for mining and natural resources.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {inGroundSolutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-white border-gray-200 p-6 hover:border-emerald-500 hover:shadow-md transition-all"
                  >
                    <div className="inline-flex p-3 rounded-xl bg-emerald-100 mb-4">
                      <IconComponent className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl mb-3 text-gray-900">{solution.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {solution.description}
                    </p>
                  </Card>
                );
              })}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white border-gray-200 shadow-sm p-8">
                <h3 className="text-2xl mb-6 text-gray-900 flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-emerald-600" />
                  Advantages for Sponsors
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <CircleCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Non-dilutive capital access</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CircleCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Faster execution than traditional financing</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CircleCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Monetize assets before production</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-white border-gray-200 shadow-sm p-8">
                <h3 className="text-2xl mb-6 text-gray-900 flex items-center gap-2">
                  <Award className="h-6 w-6 text-blue-600" />
                  Advantages for Investors
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <CircleCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Institutional-grade underwriting</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CircleCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Verified geological reporting</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CircleCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Tokenized transparency and liquidity</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-200 p-8">
              <h3 className="text-xl mb-4 text-gray-900 flex items-center gap-2">
                <Gem className="h-6 w-6 text-emerald-600" />
                Ideal Asset Types
              </h3>
              <div className="flex flex-wrap gap-3">
                {assetTypes.map((asset, index) => (
                  <Badge 
                    key={index}
                    className="bg-white border-emerald-300 text-emerald-700 px-4 py-2 text-sm"
                  >
                    {asset}
                  </Badge>
                ))}
              </div>
            </Card>

            <div className="text-center mt-8">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 group">
                Learn How It Works
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Ecosystem */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Strategic Partnerships</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A fully integrated capital stack powered by best-in-class technology partners.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {partnerships.map((partner, index) => {
                const IconComponent = partner.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-white border-gray-200 p-8 text-center hover:border-blue-500 hover:shadow-md transition-all group"
                  >
                    <div className="inline-flex p-4 rounded-full bg-blue-50 mb-4 group-hover:bg-blue-100 transition-colors">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl mb-3 text-gray-900">{partner.name}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {partner.description}
                    </p>
                  </Card>
                );
              })}
            </div>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 p-8">
              <div className="max-w-3xl mx-auto text-center">
                <Sparkles className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl mb-4 text-gray-900">
                  A Frictionless, Technology-Driven Experience
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  CR Equity.Ai™ delivers a seamless platform — from insurance compliance to credit 
                  optimization and transactional liquidity — empowering clients to close faster, 
                  borrow smarter, and scale with confidence.
                </p>
              </div>
            </Card>

            <div className="text-center mt-8">
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8">
                Explore Our Ecosystem
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Get Funded Fast
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Whether you're funding real estate transitions or monetizing in-ground assets, 
              CR Equity.Ai™ delivers the speed, certainty, and scale you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 text-lg group">
                Apply at www.CREquity.ai
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 px-10 text-lg"
              >
                Schedule a Consultation
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <CircleCheck className="h-5 w-5" />
                <span>Institutional-Grade Capital</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck className="h-5 w-5" />
                <span>AI-Powered Decisioning</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck className="h-5 w-5" />
                <span>48hr Approvals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white mb-4">Programs</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#flex50" className="hover:text-white transition-colors">Flex50™</a></li>
                  <li><a href="#btfu" className="hover:text-white transition-colors">BTFU™</a></li>
                  <li><a href="#in-ground" className="hover:text-white transition-colors">In-Ground Asset Monetization</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">All Solutions</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white mb-4">Partners</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Rate Insurance</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Dovly AI</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Duck Funding</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Partner Network</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">NMLS Consumer Access</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2025 CR Equity.Ai™ — All Rights Reserved
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Globe className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Users className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
