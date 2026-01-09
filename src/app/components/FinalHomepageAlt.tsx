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
  Gem,
  ChevronRight,
  Play
} from 'lucide-react';

export function FinalHomepageAlt() {
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
    { value: '$2.4B+', label: 'Funded to Date', icon: TrendingUp },
    { value: '48hrs', label: 'Average Approval Time', icon: Clock },
    { value: '10,000+', label: 'Investors Served', icon: Users },
    { value: '50', label: 'States Covered', icon: Globe }
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
    { name: 'HUD', description: 'Government-backed takeout pathway', icon: Shield },
    { name: 'Impact', description: 'ESG-focused financing', icon: Target },
    { name: 'XL', description: 'Large portfolio solutions', icon: Layers },
    { name: 'Green', description: 'Sustainable project funding', icon: Sparkles }
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
      {/* Hero Section - Modern Fintech Style */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#1e3a8a] to-[#312e81] py-20 md:py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30 backdrop-blur-sm">
                  🚀 AI-Powered Capital Solutions
                </Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-white font-bold leading-tight">
                  Fast, Flexible,
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mt-2">
                    AI-Powered Capital
                  </span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  From real estate to in-ground assets, CR Equity.Ai™ delivers 
                  institutional-grade funding with speed and certainty.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 shadow-lg shadow-blue-500/50 group">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 group"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-blue-200">
                  <div className="flex items-center gap-2">
                    <CircleCheck className="h-4 w-4 text-cyan-400" />
                    <span>AI Underwriting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleCheck className="h-4 w-4 text-cyan-400" />
                    <span>48hr Approvals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleCheck className="h-4 w-4 text-cyan-400" />
                    <span>1,000+ Lenders</span>
                  </div>
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <Card 
                      key={index}
                      className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/15 transition-all hover:scale-105"
                    >
                      <IconComponent className="h-8 w-8 text-cyan-400 mb-3" />
                      <div className="text-3xl text-white font-bold mb-1">{stat.value}</div>
                      <div className="text-sm text-blue-200">{stat.label}</div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Credibility Ticker */}
      <section className="py-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-y border-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <span className="text-sm text-gray-600 font-semibold">TRUSTED BY:</span>
            {credibilityItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700 font-medium">
                <CircleCheck className="h-4 w-4 text-blue-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs - Card Grid with Hover Effects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                Our Solutions
              </Badge>
              <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 font-bold">Featured Programs</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tailored capital solutions across asset classes and investment strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredPrograms.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-white border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className="relative z-10 p-8 group-hover:text-white transition-colors">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${program.color} mb-6 group-hover:bg-white/20`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl mb-3 text-gray-900 group-hover:text-white transition-colors font-bold">
                        {program.name}
                      </h3>
                      <p className="text-gray-600 group-hover:text-white/90 leading-relaxed mb-6 transition-colors">
                        {program.description}
                      </p>
                      <a 
                        href={program.link}
                        className="inline-flex items-center gap-2 text-blue-600 group-hover:text-white font-semibold"
                      >
                        Learn More
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Flex50™ Program - Split Layout */}
      <section id="flex50" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-600 text-white border-0 shadow-lg">
                Hybrid Capital Structure
              </Badge>
              <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 font-bold">Flex50™ Program</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                50% senior debt + 50% flexible equity-like capital for transitional and value-add real estate.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {flex50Features.map((category, index) => (
                <Card 
                  key={index}
                  className="bg-white border-0 shadow-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl text-gray-900 font-bold">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <CircleCheck className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            {/* Terms Card with Gradient */}
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 border-0 p-10 mb-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl text-white font-bold mb-2">Typical Terms</h3>
                <p className="text-blue-100">Flexible financing structured for your success</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-sm text-blue-100 mb-2">Senior Debt Rate</div>
                  <div className="text-4xl text-white font-bold">6.75–9.25%</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-sm text-blue-100 mb-2">Flex Return</div>
                  <div className="text-4xl text-white font-bold">8–12%</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-sm text-blue-100 mb-2">Max LTC</div>
                  <div className="text-4xl text-white font-bold">Up to 85%</div>
                </div>
              </div>
            </Card>

            {/* Performance Triggers Timeline */}
            <Card className="bg-white border-0 shadow-xl p-10">
              <h3 className="text-2xl text-gray-900 font-bold mb-8 text-center">Performance Pathway</h3>
              <div className="relative">
                <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-green-600"></div>
                <div className="grid md:grid-cols-3 gap-8 relative">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                      1
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Acquisition</h4>
                    <p className="text-sm text-gray-600">Initial funding deployment</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                      2
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Stabilization</h4>
                    <p className="text-sm text-gray-600">DSCR & occupancy targets</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                      3
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Takeout</h4>
                    <p className="text-sm text-gray-600">Permanent financing transition</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-center mt-10">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 shadow-lg group">
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
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 shadow-lg">
                Bridge-to-Takeout
              </Badge>
              <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 font-bold">BTFU™ Loan Product</h2>
              <div className="max-w-2xl mx-auto mb-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Proprietary bridge financing with automated transition to long-term takeout.
                </p>
              </div>
              <div className="inline-flex flex-col sm:flex-row gap-2 text-lg font-semibold">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  The smarter bridge to long-term capital.
                </span>
                <span className="text-gray-400 hidden sm:inline">•</span>
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Flexibility now. Certainty later.
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-xl p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl text-gray-900 font-bold">Borrower Benefits</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CircleCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Single product from acquisition to stabilization</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CircleCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Lower cost of capital</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CircleCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Predictable pathway to permanent financing</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-xl p-8 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl text-gray-900 font-bold">Lender Benefits</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CircleCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Higher yields during bridge phase</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CircleCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Lower risk post-stabilization</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CircleCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Automated monitoring and reporting</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="bg-white border-0 shadow-xl p-10">
              <h3 className="text-2xl text-gray-900 font-bold mb-8 text-center">Optional Add-Ons</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {btfuOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <div 
                      key={index}
                      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-6 border-2 border-transparent hover:border-indigo-500 transition-all hover:shadow-lg"
                    >
                      <IconComponent className="h-10 w-10 text-indigo-600 mb-4" />
                      <h4 className="text-xl text-gray-900 font-bold mb-2">{option.name}</h4>
                      <p className="text-sm text-gray-600">{option.description}</p>
                    </div>
                  );
                })}
              </div>
            </Card>

            <div className="text-center mt-10">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 shadow-lg group">
                Explore BTFU™ Options
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* In-Ground Asset Monetization */}
      <section id="in-ground" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-emerald-500/20 text-emerald-300 border-emerald-400/30 backdrop-blur-sm">
                Mining & Natural Resources
              </Badge>
              <h2 className="text-4xl md:text-5xl mb-4 text-white font-bold">In-Ground Asset Monetization</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Global capital platform using tokenization, 144A bonds, and forward contracts for mining and natural resources.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {inGroundSolutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-white/5 backdrop-blur-md border-white/10 p-8 hover:bg-white/10 transition-all hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/20"
                  >
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 inline-flex mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl mb-3 text-white font-bold">{solution.title}</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {solution.description}
                    </p>
                  </Card>
                );
              })}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <Card className="bg-white/5 backdrop-blur-md border-white/10 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="h-8 w-8 text-emerald-400" />
                  <h3 className="text-2xl text-white font-bold">Advantages for Sponsors</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300">
                    <CircleCheck className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Non-dilutive capital access</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CircleCheck className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Faster execution than traditional financing</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CircleCheck className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Monetize assets before production</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-white/5 backdrop-blur-md border-white/10 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="h-8 w-8 text-cyan-400" />
                  <h3 className="text-2xl text-white font-bold">Advantages for Investors</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300">
                    <CircleCheck className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Institutional-grade underwriting</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CircleCheck className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Verified geological reporting</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CircleCheck className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Tokenized transparency and liquidity</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-md border-emerald-400/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Gem className="h-8 w-8 text-emerald-400" />
                <h3 className="text-2xl text-white font-bold">Ideal Asset Types</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {assetTypes.map((asset, index) => (
                  <Badge 
                    key={index}
                    className="bg-white/10 border-white/20 text-white backdrop-blur-sm px-5 py-2.5 text-sm hover:bg-white/20 transition-colors"
                  >
                    {asset}
                  </Badge>
                ))}
              </div>
            </Card>

            <div className="text-center mt-10">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-10 shadow-lg shadow-emerald-500/50 group">
                Learn How It Works
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Ecosystem */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-600 text-white border-0 shadow-lg">
                Integrated Ecosystem
              </Badge>
              <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 font-bold">Strategic Partnerships</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A fully integrated capital stack powered by best-in-class technology partners.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {partnerships.map((partner, index) => {
                const IconComponent = partner.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-white border-0 shadow-xl p-8 text-center hover:shadow-2xl transition-all hover:scale-105 group"
                  >
                    <div className="relative inline-flex mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                      <div className="relative p-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500">
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl mb-3 text-gray-900 font-bold">{partner.name}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {partner.description}
                    </p>
                  </Card>
                );
              })}
            </div>

            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 border-0 p-12 shadow-2xl">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex p-4 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                  <Sparkles className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-3xl mb-4 text-white font-bold">
                  A Frictionless, Technology-Driven Experience
                </h3>
                <p className="text-xl text-blue-100 leading-relaxed">
                  CR Equity.Ai™ delivers a seamless platform — from insurance compliance to credit 
                  optimization and transactional liquidity — empowering clients to close faster, 
                  borrow smarter, and scale with confidence.
                </p>
              </div>
            </Card>

            <div className="text-center mt-10">
              <Button size="lg" variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-10 transition-all">
                Explore Our Ecosystem
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Bold & Modern */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl mb-6 text-white font-bold">
              Get Funded Fast
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
              Whether you're funding real estate transitions or monetizing in-ground assets, 
              CR Equity.Ai™ delivers the speed, certainty, and scale you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-12 text-lg shadow-2xl shadow-blue-500/50 group">
                Apply at www.CREquity.ai
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-gray-900 px-12 text-lg backdrop-blur-sm"
              >
                Schedule a Consultation
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <CircleCheck className="h-5 w-5 text-cyan-400" />
                </div>
                <span className="text-lg">Institutional-Grade Capital</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <CircleCheck className="h-5 w-5 text-cyan-400" />
                </div>
                <span className="text-lg">AI-Powered Decisioning</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <CircleCheck className="h-5 w-5 text-cyan-400" />
                </div>
                <span className="text-lg">48hr Approvals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold mb-4">Programs</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#flex50" className="hover:text-cyan-400 transition-colors">Flex50™</a></li>
                  <li><a href="#btfu" className="hover:text-cyan-400 transition-colors">BTFU™</a></li>
                  <li><a href="#in-ground" className="hover:text-cyan-400 transition-colors">In-Ground Asset Monetization</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">All Solutions</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">How It Works</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Press</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Partners</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Rate Insurance</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Dovly AI</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Duck Funding</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Partner Network</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Compliance</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">NMLS Consumer Access</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2025 CR Equity.Ai™ — All Rights Reserved
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Globe className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
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
