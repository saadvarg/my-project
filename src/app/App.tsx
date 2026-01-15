import { useState } from 'react';
import { FinalHomepage } from './components/FinalHomepage';
import { LoanProgramsPage } from './components/LoanProgramsPage';
import { SampleProgramDetail } from './components/ProgramDetailPage';
import { SampleOnePager } from './components/ProgramOnePager';
import { CollateralPDF } from './components/CollateralPDF';
import { Button } from './components/ui/button';

export default function App() {
  const [activeTheme, setActiveTheme] = useState<'clean' | 'programs' | 'detail' | 'onepager' | 'collateral'>('clean');

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
                  Home
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
                <Button
                  variant={activeTheme === 'collateral' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTheme('collateral')}
                  className={activeTheme === 'collateral' 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white border-0' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }
                >
                  Collateral PDF
                </Button>
              </div>
            </div>
            <div className="text-gray-500 text-xs hidden md:block">
              {activeTheme === 'clean' && '🏠 Homepage'}
              {activeTheme === 'programs' && '💼 Loan Programs'}
              {activeTheme === 'detail' && '📋 Program Details'}
              {activeTheme === 'onepager' && '📑 Print Ready PDF'}
              {activeTheme === 'collateral' && '📄 Collateral PDF'}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with padding for fixed nav */}
      <div className={activeTheme === 'onepager' || activeTheme === 'collateral' ? '' : 'pt-[60px]'}>
        {activeTheme === 'clean' && <FinalHomepage />}
        {activeTheme === 'programs' && <LoanProgramsPage />}
        {activeTheme === 'detail' && <SampleProgramDetail />}
        {activeTheme === 'onepager' && <SampleOnePager />}
        {activeTheme === 'collateral' && <CollateralPDF />}
      </div>
    </div>
  );
}