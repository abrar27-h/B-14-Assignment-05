import { use, useState } from 'react';
import type { Technology } from '../../types/techTypes';

type TechSectionProps = {
  techPromise: Promise<Technology[]>;
};

const TechSection = ({ techPromise }: TechSectionProps) => {
  const technologies = use(techPromise);
  const [stack, setStack] = useState<Technology[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const addToStack = (tech: Technology) => {
    if (!stack.some((item) => item.id === tech.id)) {
      setStack([...stack, tech]);
      showToast(`${tech.name} added to your stack! 🚀`);
    } else {
      showToast(`${tech.name} is already in your stack! ⚠️`);
    }
  };

  const removeFromStack = (id: string, name: string) => {
    setStack(stack.filter((item) => item.id !== id));
    showToast(`${name} removed from stack.`);
  };

  const clearStack = () => {
    setStack([]);
    showToast("Stack cleared successfully!");
  };

  return (
    <section className="space-y-8 relative">
      {/* Floating Popup Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-5 py-3 rounded-2xl shadow-xl border border-gray-800 text-xs font-semibold animate-bounce flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          {toastMessage}
        </div>
      )}

      {/* Section Header */}
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
          Explore the <span className="text-brand-gradient">Technologies</span>
        </h2>
        <p className="text-gray-500 text-xs md:text-sm mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 items-start">
        
        {/* Technologies Grid */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {technologies.map((tech) => (
            <div 
              key={tech.id} 
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center p-2 border border-gray-100 group-hover:scale-105 transition-transform">
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  {tech.badge && (
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-cyan-50/80 text-cyan-700 border border-cyan-100/50">
                      {tech.badge}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">{tech.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">
                  {tech.description}
                </p>
              </div>

              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between text-[11px] text-gray-600 mb-4 pt-3 border-t border-gray-50">
                  <span className="bg-gray-50 px-2 py-0.5 rounded-md font-medium text-gray-700 border border-gray-100">
                    {tech.category}
                  </span>
                  <span className="text-gray-500 font-medium">
                    {tech.level}
                  </span>
                  <span className="flex items-center gap-1 font-bold text-gray-800">
                    <span className="text-amber-400">★</span> {tech.rating}
                  </span>
                </div>

                {/* Button with cursor-pointer */}
                <button 
                  onClick={() => addToStack(tech)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gray-900 hover:bg-black active:scale-95 transition-all shadow-sm cursor-pointer"
                >
                  Add to Stack
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Your Stack Sidebar */}
        <div className="lg:col-span-1 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm lg:sticky lg:top-24">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-base font-bold text-gray-900">Your Stack</h3>
            {stack.length > 0 && (
              <span className="text-xs font-bold bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded-full">
                {stack.length}
              </span>
            )}
          </div>
          
          <p className="text-xs text-gray-400 mb-5">
            {stack.length === 0 ? "No technologies selected yet." : `${stack.length} technologies added.`}
          </p>

          {stack.length === 0 ? (
            <div className="border border-dashed border-gray-200 rounded-xl p-8 text-center text-xs text-gray-400">
              Your stack is empty.
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-3">
                {stack.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100 shadow-xs hover:border-gray-200 transition-all text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 p-1.5 flex items-center justify-center border border-gray-100">
                        <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                        <span className="text-gray-400 text-[10px]">{item.category}</span>
                      </div>
                    </div>
                    {/* Remove button with cursor-pointer */}
                    <button 
                      onClick={() => removeFromStack(item.id, item.name)}
                      className="text-gray-400 hover:text-red-500 font-bold px-1.5 py-1 text-sm transition-colors cursor-pointer"
                      title="Remove"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              {/* Clear List Button with cursor-pointer */}
              <button
                onClick={clearStack}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                Clear list
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default TechSection;