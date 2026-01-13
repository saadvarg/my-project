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
  Target,
  Building2,
  DollarSign,
  Sparkles,
  Award,
  Globe
} from 'lucide-react';

export function StorytellingLayout() {
  const stats = [
    { value: '$2.4B+', label: 'Funded to Date' },
    { value: '48hrs', label: 'Avg. Approval Time' },
    { value: '10,000+', label: 'Investors Served' },
    { value: '50', label: 'States Covered' }
  ];

  const problems = [
    {
      icon: Clock,
      title: 'Traditional Banks Take Weeks',
      description: 'By the time you get approved, the deal is gone.'
    },
    {
      icon: Users,
      title: 'Hard Money Lenders Lack Scale',
      description: 'Great for one deal, but cannot grow with your portfolio.'
    },
    {
      icon: Target,
      title: 'Opportunity Moves Fast',
      description: 'Market velocity demands capital velocity—not bureaucracy.'
    }
  ];

  const solutions = [
    {
      step: '01',
      title: 'AI Meets Underwriting',
      description: 'Our proprietary AI analyzes property value, market conditions, and investor track record in minutes—delivering pre-approvals while competitors are still reading your email.',
      icon: Sparkles
    },
    {
      step: '02',
      title: 'Speed Without Sacrifice',
      description: 'Fast doesn\'t mean risky. We combine algorithmic efficiency with human expertise to deliver certainty at scale.',
      icon: Zap
    },
    {
      step: '03',
      title: 'Built for Growth',
      description: 'Whether you\'re funding your first flip or your fiftieth portfolio acquisition, our platform scales with your ambition.',
      icon: TrendingUp
    }
  ];

  const products = [
    {
      name: 'Flex50™',
      range: 'Up to $50K',
      description: 'AI-powered micro-bridge for fast opportunities. Minimal docs, maximum speed.',
      features: ['Approved in hours', 'No traditional underwriting', 'Perfect for quick flips'],
      badge: 'Most Popular',
      icon: Zap,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'FastBridge360™',
      range: '$50K - $5M',
      description: 'Full-spectrum bridge lending for acquisition, rehab, and refinance.',
      features: ['Institutional backing', 'Portfolio deals', 'Nationwide coverage'],
      badge: null,
      icon: Building2,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      name: 'CashOut Refi',
      range: 'Equity-Based',
      description: 'Unlock property equity for new investments or renovations.',
      features: ['Fast cash access', 'Keep your property', 'Deploy capital quickly'],
      badge: null,
      icon: DollarSign,
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  const trustSignals = [
    { icon: Shield, text: 'SOC 2 Compliant' },
    { icon: Lock, text: 'Bank-Level Encryption' },
    { icon: Award, text: 'NMLS Licensed' },
    { icon: Globe, text: 'Nationwide Coverage' }
  ];

  const testimonials = [
    {
      quote: "I've closed 14 deals with CR Equity in 18 months. Their speed and consistency are unmatched.",
      author: "Jennifer M.",
      role: "Full-Time Investor, Dallas",
      metric: "14 deals closed"
    },
    {
      quote: "The AI underwriting saw value others didn't. They funded a complex deal in 72 hours.",
      author: "Robert K.",
      role: "Commercial Developer, NYC",
      metric: "$1.2M approved"
    },
    {
      quote: "Finally—a lender that actually understands real estate velocity and investor needs.",
      author: "Amanda T.",
      role: "Portfolio Manager, Phoenix",
      metric: "4-year partnership"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Vision Statement */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI1NjNlYiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40\"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200">
              The Future of Bridge Lending
            </Badge>
            <h1 className="text-5xl md:text-6xl mb-6 text-gray-900 tracking-tight leading-tight">
              Capital Should Move as
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-2">
                Fast as Opportunity
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              We built CR Equity.Ai™ because real estate investing shouldn't be bottlenecked by 
              outdated lending. AI-powered decisioning meets institutional capital—delivering the 
              speed investors need with the certainty they deserve.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 group">
              See How It Works
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl mb-4 text-gray-900">The Lending Industry Is Broken</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Investors lose deals every day—not because of bad strategy, but because capital can't keep up.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => {
                const IconComponent = problem.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-white border-red-200 p-8 text-center hover:border-red-400 hover:shadow-md transition-all"
                  >
                    <div className="inline-flex p-4 rounded-full bg-red-50 mb-4">
                      <IconComponent className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-xl mb-3 text-gray-900">{problem.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {problem.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* The Solution - Our Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl mb-4 text-gray-900">How We Solve It</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Technology, expertise, and institutional capital—engineered for real estate velocity.
              </p>
            </div>

            <div className="space-y-12">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div 
                    key={index}
                    className="flex flex-col md:flex-row gap-8 items-start"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-4">
                        <div className="text-6xl text-blue-100">{solution.step}</div>
                        <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
                          <IconComponent className="h-8 w-8 text-blue-600" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-3 text-gray-900">{solution.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl mb-4 text-gray-900">Products Built for Action</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                From micro-bridges to portfolio financing—capital structured for the way you actually invest.
              </p>
            </div>

            <div className="space-y-6">
              {products.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-white border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-lg overflow-hidden group"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className={`md:w-1/4 bg-gradient-to-br ${product.color} p-8 flex flex-col items-center justify-center text-center relative`}>
                        <div className="absolute inset-0 bg-black/5"></div>
                        <div className="relative z-10">
                          <IconComponent className="h-12 w-12 text-white mb-4 mx-auto" />
                          <h3 className="text-2xl text-white mb-2">{product.name}</h3>
                          <p className="text-white/90">{product.range}</p>
                          {product.badge && (
                            <Badge className="mt-4 bg-white/90 text-gray-900 border-0">
                              {product.badge}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex-1 p-8">
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
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
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white group">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 group">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-green-50 to-white border-green-200 shadow-md p-12 text-center">
              <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl mb-4 text-gray-900">Enterprise Security, Startup Speed</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Your data is protected by institutional-grade security protocols. We're not just fast—we're certified.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {trustSignals.map((signal, index) => {
                  const IconComponent = signal.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm"
                    >
                      <IconComponent className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700">{signal.text}</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl mb-4 text-gray-900">Trusted by Investors Who Move Fast</h2>
              <p className="text-gray-600 text-lg">
                Real stories from investors who refuse to wait.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="bg-white border-gray-200 shadow-sm p-8 hover:border-blue-400 hover:shadow-md transition-all flex flex-col"
                >
                  <div className="flex-1">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Award key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-900 mb-1">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm mb-2">{testimonial.role}</p>
                    <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">
                      {testimonial.metric}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Ready to Fund Your Next Deal?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join thousands of investors who choose speed, certainty, and scale. 
              Apply in minutes. Get approved in hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-10 group">
                Start Application
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 px-10"
              >
                Talk to an Expert
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-blue-100 text-sm">
              <div className="flex items-center gap-2">
                <CircleCheck className="h-4 w-4" />
                <span>No hard credit pull</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck className="h-4 w-4" />
                <span>48-hour approvals</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck className="h-4 w-4" />
                <span>$10K - $5M range</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white mb-4">Products</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Flex50™</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FastBridge360™</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">CashOut Refi</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Portfolio Solutions</a></li>
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
                <h3 className="text-white mb-4">Resources</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">NMLS Access</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
              <div>
                © 2025 CR Equity.Ai™ — All Rights Reserved
              </div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}