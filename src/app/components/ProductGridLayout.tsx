import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  ArrowRight, 
  Zap, 
  Clock, 
  Shield, 
  TrendingUp, 
  Users,
  CircleCheck,
  Lock,
  FileText,
  Award,
  Building2,
  DollarSign,
  Sparkles,
  Target
} from 'lucide-react';

export function ProductGridLayout() {
  const products = [
    {
      name: 'Flex50™',
      tagline: 'AI-Powered Micro-Bridge',
      description: 'Up to $50K in minutes. No traditional docs. AI-driven approval for fast-moving opportunities.',
      features: [
        'Approved in hours',
        'Minimal documentation',
        'AI credit decisioning',
        'Perfect for quick deals'
      ],
      badge: 'Most Popular',
      icon: Zap,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'FastBridge360™',
      tagline: 'Full-Spectrum Bridge Loan',
      description: '$50K–$5M for property acquisition, rehab, or refinance. Full underwriting for serious investors.',
      features: [
        'Institutional backing',
        'Flexible terms',
        'Portfolio deals supported',
        'Nationwide coverage'
      ],
      badge: null,
      icon: Building2,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      name: 'CashOut Refi',
      tagline: 'Unlock Your Equity',
      description: 'Tap into property equity for renovations, new investments, or debt consolidation.',
      features: [
        'Fast cash access',
        'Competitive rates',
        'Keep your property',
        'Deploy capital quickly'
      ],
      badge: null,
      icon: DollarSign,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      name: 'Portfolio Optimization',
      tagline: 'Strategic Capital Planning',
      description: 'Multi-property structuring and capital deployment strategy for scaling investors.',
      features: [
        'Multi-asset solutions',
        'Tax-efficient structures',
        'Growth optimization',
        'Expert consultation'
      ],
      badge: null,
      icon: Target,
      color: 'from-violet-500 to-violet-600'
    }
  ];

  const services = [
    {
      icon: Sparkles,
      title: 'AI-Powered Underwriting',
      description: 'Our proprietary AI analyzes deals in minutes, not days.'
    },
    {
      icon: Clock,
      title: 'Same-Day Pre-Approval',
      description: 'Get conditional approvals within hours of application.'
    },
    {
      icon: Shield,
      title: 'Nationwide Coverage',
      description: 'Funding available across all 50 states for qualified investors.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'From single deals to entire portfolios—we grow with you.'
    }
  ];

  const securityItems = [
    'SOC 2 Type II Compliant',
    'Bank-Level Encryption',
    'NMLS Licensed',
    'Privacy Shield Certified'
  ];

  const testimonials = [
    {
      quote: "Closed a $45K bridge in 48 hours. Flex50™ is a game-changer for investors who move fast.",
      author: "Marcus T.",
      role: "Fix & Flip Investor, Atlanta"
    },
    {
      quote: "Finally, a lender that understands real estate velocity. No more waiting weeks for traditional banks.",
      author: "Sarah L.",
      role: "Portfolio Manager, Phoenix"
    },
    {
      quote: "The AI underwriting is incredible. They saw value in my deal that other lenders missed entirely.",
      author: "David K.",
      role: "Developer, Miami"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI1NjNlYiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40\"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200">
              AI-Powered Bridge Lending
            </Badge>
            <h1 className="text-5xl md:text-6xl mb-6 text-gray-900 tracking-tight">
              Fast Capital for
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Smart Investors
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Bridge loans from $10K to $5M. AI-powered decisioning. Same-day pre-approval. 
              Built for investors who don't wait.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 group">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 px-8"
              >
                See How It Works
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CircleCheck className="h-4 w-4 text-green-600" />
                <span>No Hard Credit Pull</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck className="h-4 w-4 text-green-600" />
                <span>Same-Day Pre-Approval</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck className="h-4 w-4 text-green-600" />
                <span>All 50 States</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Choose Your Capital Solution</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every product is designed for speed, clarity, and real estate velocity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card 
                  key={index}
                  className="bg-white border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                  <div className="p-8 relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${product.color}`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      {product.badge && (
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                          {product.badge}
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-2xl mb-2 text-gray-900">{product.name}</h3>
                    <p className="text-blue-600 mb-4">{product.tagline}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <CircleCheck className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Why CR Equity.Ai™</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Technology meets lending expertise for unmatched speed and certainty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index}
                  className="bg-white border-gray-200 hover:border-blue-400 hover:shadow-md transition-all p-6 text-center group hover:transform hover:scale-105"
                >
                  <div className="inline-flex p-4 rounded-full bg-blue-50 mb-4 group-hover:bg-blue-100 transition-colors">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-gray-200 shadow-md p-8">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-full bg-green-50 flex-shrink-0">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl mb-4 text-gray-900">Enterprise-Grade Security</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Your data and transactions are protected by the same security standards 
                    used by major financial institutions.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {securityItems.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <Lock className="h-4 w-4 text-green-600" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Trusted by Investors</h2>
            <p className="text-gray-600 text-lg">
              Real stories from real estate professionals who move fast.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-white border-gray-200 shadow-sm hover:shadow-md p-6 hover:border-blue-400 transition-all"
              >
                <Award className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl mb-6 text-white">
              Ready to Move at Market Speed?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of investors who choose velocity over waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 group">
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 px-8"
              >
                Schedule a Call
              </Button>
            </div>
            <p className="mt-6 text-blue-100 text-sm">
              No hard credit check required • Decision in hours, not days
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <div>
              © 2025 CR Equity.Ai™ — All Rights Reserved
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">NMLS Consumer Access</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}