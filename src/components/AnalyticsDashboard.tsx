import { useEffect, useState } from "react";
import { TrendingUp, DollarSign, ShoppingCart, Users, ArrowUpRight } from "lucide-react";

interface MetricCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  change: string;
  delay: number;
}

function MetricCard({ icon: Icon, label, value, change, delay }: MetricCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`glass-card p-4 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex items-center gap-1 text-green-400 text-sm font-medium">
          <ArrowUpRight className="w-4 h-4" />
          {change}
        </div>
      </div>
      <p className="text-muted-foreground text-sm mb-1">{label}</p>
      <p className="text-2xl font-bold text-foreground">{value}</p>
    </div>
  );
}

export default function AnalyticsDashboard() {
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setLineProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 30);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const chartPath = "M 0 80 Q 50 60, 100 70 T 200 50 T 300 40 T 400 20";

  return (
    <div className="relative w-full max-w-lg">
      {/* Floating glow effects */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse-slow animation-delay-500" />

      {/* Main Dashboard Card */}
      <div className="glass-card p-6 relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-foreground font-semibold text-lg">Revenue Overview</h3>
            <p className="text-muted-foreground text-sm">Last 30 days</p>
          </div>
          <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium">
            Live
          </div>
        </div>

        {/* Chart Area */}
        <div className="h-32 mb-6 relative">
          <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
            {/* Gradient fill */}
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(42 65% 58%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(42 65% 58%)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(42 65% 58%)" />
                <stop offset="100%" stopColor="hsl(192 100% 50%)" />
              </linearGradient>
            </defs>
            
            {/* Area fill */}
            <path
              d={`${chartPath} L 400 100 L 0 100 Z`}
              fill="url(#chartGradient)"
              style={{
                opacity: lineProgress / 100,
                transition: "opacity 0.5s ease",
              }}
            />
            
            {/* Line */}
            <path
              d={chartPath}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                strokeDasharray: 600,
                strokeDashoffset: 600 - (600 * lineProgress) / 100,
                transition: "stroke-dashoffset 0.1s ease",
              }}
            />
            
            {/* Glowing dot at the end */}
            {lineProgress >= 100 && (
              <circle cx="400" cy="20" r="6" fill="hsl(192 100% 50%)" className="animate-pulse">
                <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
              </circle>
            )}
          </svg>

          {/* Value labels */}
          <div className="absolute top-0 right-0 text-right">
            <span className="text-3xl font-bold text-gradient-gold">$47,892</span>
            <p className="text-green-400 text-sm">+23.5% this month</p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3">
          <MetricCard
            icon={DollarSign}
            label="Total Revenue"
            value="$47,892"
            change="+23.5%"
            delay={200}
          />
          <MetricCard
            icon={ShoppingCart}
            label="Orders"
            value="1,247"
            change="+18.2%"
            delay={400}
          />
          <MetricCard
            icon={Users}
            label="Customers"
            value="3,841"
            change="+12.8%"
            delay={600}
          />
          <MetricCard
            icon={TrendingUp}
            label="Conversion"
            value="4.2%"
            change="+2.1%"
            delay={800}
          />
        </div>
      </div>

      {/* Floating mini cards */}
      <div className="absolute -top-4 -left-4 glass-card p-3 animate-float">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-green-400" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Sales Today</p>
            <p className="text-sm font-bold text-foreground">$2,847</p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -right-4 glass-card p-3 animate-float animation-delay-300">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
            <ShoppingCart className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">New Orders</p>
            <p className="text-sm font-bold text-foreground">+47</p>
          </div>
        </div>
      </div>
    </div>
  );
}
