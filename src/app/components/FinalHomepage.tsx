import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
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

// Animated Counter Component
function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const prefix = value.match(/[^0-9.]+$/)?.[0] || '';

  useEffect(() => {
    let start = 0;
    const end = numericValue;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <span>
      {Math.floor(count)}
      {prefix}
      {suffix}
    </span>
  );
}

// Animated Section Wrapper
function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FinalHomepage() {
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);

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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI1NjNlYiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            style={{ opacity: headerOpacity, scale: headerScale }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl mb-6 text-gray-900 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Fast, Flexible,{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI-Powered
              </span>
              <br />
              Capital Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              From real estate to in-ground assets, CR Equity.Ai™ delivers 
              institutional-grade funding with speed and certainty.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 text-lg group">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 px-10 text-lg"
                >
                  Explore Programs
                </Button>
              </motion.div>
            </motion.div>

            {/* Credibility Bar */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {credibilityItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge 
                    className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-2 text-sm cursor-default"
                  >
                    {item}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Programs Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Featured Programs</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Tailored capital solutions across asset classes and investment strategies.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {featuredPrograms.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  >
                    <Card 
                      className="bg-white border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 overflow-hidden group h-full"
                    >
                      <motion.div 
                        className={`h-2 bg-gradient-to-r ${program.color}`}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                        style={{ transformOrigin: 'left' }}
                      />
                      <div className="p-6">
                        <motion.div 
                          className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${program.color} mb-4`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </motion.div>
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
                  </motion.div>
                );
              })}
            </div>

            <AnimatedSection>
              <div className="text-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8">
                    See All Programs
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Proof & Results */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div 
                    className="text-4xl md:text-5xl text-white mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat.value.includes('$') || stat.value.includes('+') ? (
                      stat.value
                    ) : (
                      <AnimatedCounter value={stat.value} />
                    )}
                  </motion.div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flex50™ Program Details */}
      <section id="flex50" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                  Hybrid Capital Structure
                </Badge>
                <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Flex50™ Program</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  50% senior debt + 50% flexible equity-like capital for transitional and value-add real estate.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <Card className="bg-white border-gray-200 shadow-md p-8 mb-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {flex50Features.map((category, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <h3 className="text-xl mb-4 text-gray-900 flex items-center gap-2">
                        <Layers className="h-5 w-5 text-blue-600" />
                        {category.title}
                      </h3>
                      <ul className="space-y-3">
                        {category.items.map((item, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start gap-2 text-gray-700"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                          >
                            <CircleCheck className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="bg-blue-50 border border-blue-200 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h4 className="text-lg text-gray-900 mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    Typical Terms
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="cursor-default"
                    >
                      <span className="block text-gray-500 mb-1">Senior Debt Rate</span>
                      <span className="text-lg text-gray-900">6.75–9.25%</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="cursor-default"
                    >
                      <span className="block text-gray-500 mb-1">Flex Return</span>
                      <span className="text-lg text-gray-900">8–12%</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="cursor-default"
                    >
                      <span className="block text-gray-500 mb-1">Max LTC</span>
                      <span className="text-lg text-gray-900">Up to 85%</span>
                    </motion.div>
                  </div>
                </motion.div>
              </Card>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-gradient-to-r from-gray-100 to-blue-50 border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg text-gray-900 mb-3">Performance Triggers</h4>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {[
                    { num: 1, label: 'Acquisition', color: 'bg-blue-600' },
                    { num: 2, label: 'Stabilization', color: 'bg-blue-600' },
                    { num: 3, label: 'Takeout', color: 'bg-green-600' }
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 }}
                    >
                      {index > 0 && (
                        <ArrowRight className="h-5 w-5 text-gray-400 rotate-90 md:rotate-0 hidden md:block" />
                      )}
                      <motion.div 
                        className={`w-12 h-12 rounded-full ${step.color} text-white flex items-center justify-center`}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.num}
                      </motion.div>
                      <span className="text-gray-700">{step.label}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Tied to DSCR and occupancy thresholds
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="text-center mt-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 group">
                    See If You Qualify
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* BTFU™ Loan Product */}
      <section id="btfu" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
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
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  title: 'Borrower Benefits',
                  icon: Users,
                  color: 'text-blue-600',
                  items: [
                    'Single product from acquisition to stabilization',
                    'Lower cost of capital',
                    'Predictable pathway to permanent financing'
                  ]
                },
                {
                  title: 'Lender Benefits',
                  icon: TrendingUp,
                  color: 'text-green-600',
                  items: [
                    'Higher yields during bridge phase',
                    'Lower risk post-stabilization',
                    'Automated monitoring and reporting'
                  ]
                }
              ].map((section, idx) => {
                const IconComponent = section.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-white border-gray-200 shadow-sm p-8 h-full">
                      <h3 className="text-2xl mb-6 text-gray-900 flex items-center gap-2">
                        <IconComponent className={`h-6 w-6 ${section.color}`} />
                        {section.title}
                      </h3>
                      <ul className="space-y-3">
                        {section.items.map((item, itemIdx) => (
                          <motion.li 
                            key={itemIdx} 
                            className="flex items-start gap-2 text-gray-700"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.2 + itemIdx * 0.1 }}
                          >
                            <CircleCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <AnimatedSection>
              <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200 p-8">
                <h3 className="text-2xl mb-6 text-gray-900 text-center">Optional Add-Ons</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {btfuOptions.map((option, index) => (
                    <motion.div 
                      key={index} 
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      <h4 className="text-lg text-gray-900 mb-2">{option.name}</h4>
                      <p className="text-sm text-gray-600">{option.description}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection>
              <div className="text-center mt-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 group">
                    Explore BTFU™ Options
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* In-Ground Asset Monetization */}
      <section id="in-ground" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-emerald-200">
                  Mining & Natural Resources
                </Badge>
                <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">In-Ground Asset Monetization</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Global capital platform using tokenization, 144A bonds, and forward contracts for mining and natural resources.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {inGroundSolutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    whileHover={{ y: -8 }}
                  >
                    <Card 
                      className="bg-white border-gray-200 p-6 hover:border-emerald-500 hover:shadow-md transition-all h-full"
                    >
                      <motion.div 
                        className="inline-flex p-3 rounded-xl bg-emerald-100 mb-4"
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="h-6 w-6 text-emerald-600" />
                      </motion.div>
                      <h3 className="text-xl mb-3 text-gray-900">{solution.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {solution.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: 'Advantages for Sponsors',
                  icon: Building2,
                  color: 'text-emerald-600',
                  items: [
                    'Non-dilutive capital access',
                    'Faster execution than traditional financing',
                    'Monetize assets before production'
                  ]
                },
                {
                  title: 'Advantages for Investors',
                  icon: Award,
                  color: 'text-blue-600',
                  items: [
                    'Institutional-grade underwriting',
                    'Verified geological reporting',
                    'Tokenized transparency and liquidity'
                  ]
                }
              ].map((section, idx) => {
                const IconComponent = section.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-white border-gray-200 shadow-sm p-8 h-full">
                      <h3 className="text-2xl mb-6 text-gray-900 flex items-center gap-2">
                        <IconComponent className={`h-6 w-6 ${section.color}`} />
                        {section.title}
                      </h3>
                      <ul className="space-y-3">
                        {section.items.map((item, itemIdx) => (
                          <motion.li 
                            key={itemIdx} 
                            className="flex items-start gap-2 text-gray-700"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.2 + itemIdx * 0.1 }}
                          >
                            <CircleCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <AnimatedSection>
              <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-200 p-8">
                <h3 className="text-xl mb-4 text-gray-900 flex items-center gap-2">
                  <Gem className="h-6 w-6 text-emerald-600" />
                  Ideal Asset Types
                </h3>
                <div className="flex flex-wrap gap-3">
                  {assetTypes.map((asset, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge 
                        className="bg-white border-emerald-300 text-emerald-700 px-4 py-2 text-sm cursor-default"
                      >
                        {asset}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection>
              <div className="text-center mt-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 group">
                    Learn How It Works
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Partnership Ecosystem */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Strategic Partnerships</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  A fully integrated capital stack powered by best-in-class technology partners.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {partnerships.map((partner, index) => {
                const IconComponent = partner.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    whileHover={{ y: -8, scale: 1.03 }}
                  >
                    <Card 
                      className="bg-white border-gray-200 p-8 text-center hover:border-blue-500 hover:shadow-md transition-all group h-full"
                    >
                      <motion.div 
                        className="inline-flex p-4 rounded-full bg-blue-50 mb-4 group-hover:bg-blue-100 transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </motion.div>
                      <h3 className="text-xl mb-3 text-gray-900">{partner.name}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {partner.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <AnimatedSection>
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 p-8">
                <div className="max-w-3xl mx-auto text-center">
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, -5, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  </motion.div>
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
            </AnimatedSection>

            <AnimatedSection>
              <div className="text-center mt-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8">
                    Explore Our Ecosystem
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl mb-6 text-white">
                Get Funded Fast
              </h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Whether you're funding real estate transitions or monetizing in-ground assets, 
                CR Equity.Ai™ delivers the speed, certainty, and scale you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 text-lg group">
                    Apply at www.CREquity.ai
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-transparent border-white text-white hover:bg-white/10 px-10 text-lg"
                  >
                    Schedule a Consultation
                  </Button>
                </motion.div>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-blue-100">
                {[
                  'Institutional-Grade Capital',
                  'AI-Powered Speed',
                  'Compliance First'
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CircleCheck className="h-5 w-5" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto text-center">
              <div className="mb-6">
                <h3 className="text-2xl text-white mb-2">CR Equity.AI™</h3>
                <p className="text-gray-400">Compliance-First, AI-Powered Lending</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm mb-6">
                <a href="https://www.crequity.ai" className="hover:text-white transition-colors">
                  🌐 www.crequity.ai
                </a>
                <a href="tel:+19493286622" className="hover:text-white transition-colors">
                  📞 +1 (949) 328-6622
                </a>
                <a href="mailto:info@crequity.ai" className="hover:text-white transition-colors">
                  ✉️ info@crequity.ai
                </a>
              </div>
              <p className="text-xs text-gray-500">
                © 2026 CR Equity.AI™. All rights reserved.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  );
}
