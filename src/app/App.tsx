import { useState } from 'react';
import { FinalHomepage } from './components/FinalHomepage';
import { FinalHomepageAlt } from './components/FinalHomepageAlt';
import { LoanProgramsPage } from './components/LoanProgramsPage';
import { SampleProgramDetail } from './components/ProgramDetailPage';
import { SampleOnePager } from './components/ProgramOnePager';
import { Button } from './components/ui/button';

export default function App() {
  const [activeTheme, setActiveTheme] = useState<'clean' | 'modern' | 'programs' | 'detail' | 'onepager'>('programs');

  return (
    <div className="min-h-screen">
      {/* Theme Switcher Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-gray-600 text-sm font-semibold">Navigate:</span>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={activeTheme === 'clean' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTheme('clean')}
                  className={activeTheme === 'clean' 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white border-0' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }
                >
                  Clean Theme
                </Button>
                <Button
                  variant={activeTheme === 'modern' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTheme('modern')}
                  className={activeTheme === 'modern' 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white border-0' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }
                >
                  Modern Fintech
                </Button>
                <Button
                  variant={activeTheme === 'programs' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTheme('programs')}
                  className={activeTheme === 'programs' 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white border-0' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }
                >
                  Loan Programs
                </Button>
                <Button
                  variant={activeTheme === 'detail' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTheme('detail')}
                  className={activeTheme === 'detail' 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white border-0' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }
                >
                  Program Detail
                </Button>
                <Button
                  variant={activeTheme === 'onepager' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTheme('onepager')}
                  className={activeTheme === 'onepager' 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white border-0' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }
                >
                  One-Pager PDF
                </Button>
              </div>
            </div>
            <div className="text-gray-500 text-xs hidden md:block">
              {activeTheme === 'clean' && '📄 Professional & Clean'}
              {activeTheme === 'modern' && '🚀 Modern & Dynamic'}
              {activeTheme === 'programs' && '💼 Loan Programs'}
              {activeTheme === 'detail' && '📋 Program Details'}
              {activeTheme === 'onepager' && '📑 Print Ready PDF'}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with padding for fixed nav */}
      <div className={activeTheme === 'onepager' ? '' : 'pt-[60px]'}>
        {activeTheme === 'clean' && <FinalHomepage />}
        {activeTheme === 'modern' && <FinalHomepageAlt />}
        {activeTheme === 'programs' && <LoanProgramsPage />}
        {activeTheme === 'detail' && <SampleProgramDetail />}
        {activeTheme === 'onepager' && <SampleOnePager />}
      </div>
    </div>
  );
}