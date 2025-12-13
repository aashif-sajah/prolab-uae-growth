import { TrendingUp, DollarSign, ShoppingCart, Percent } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const analyticsData = [
  {
    store: "Fashion Boutique",
    totalSales: "$127,892",
    orders: "2,847",
    conversion: "4.8%",
    growth: "+156%",
  },
  {
    store: "Tech Gadgets",
    totalSales: "$89,431",
    orders: "1,562",
    conversion: "3.9%",
    growth: "+89%",
  },
  {
    store: "Home & Living",
    totalSales: "$203,127",
    orders: "4,231",
    conversion: "5.2%",
    growth: "+234%",
  },
];

export default function AnalyticsProof() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase">Real Results</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Real Stores. Real Revenue. Real Growth.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These aren't just pretty websites — they're profit-generating machines.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {analyticsData.map((data, index) => (
            <ScrollReveal key={data.store} animation="slide-left" delay={index * 150}>
              <div className="glass-card-hover p-6 group">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-foreground">{data.store}</h3>
                  <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-bold">
                    {data.growth}
                  </div>
                </div>

                {/* Mini Chart */}
                <div className="h-16 mb-6 relative overflow-hidden rounded-lg bg-muted/30">
                  <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 50 Q 25 40, 50 45 T 100 35 T 150 25 T 200 15 L 200 60 L 0 60 Z"
                      fill={`url(#gradient-${index})`}
                    />
                    <path
                      d="M0 50 Q 25 40, 50 45 T 100 35 T 150 25 T 200 15"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      className="group-hover:stroke-accent transition-colors duration-300"
                    />
                  </svg>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Total Sales</p>
                      <p className="font-bold text-foreground">{data.totalSales}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ShoppingCart className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Orders</p>
                      <p className="font-bold text-foreground">{data.orders}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Percent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Conversion</p>
                      <p className="font-bold text-foreground">{data.conversion}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Growth</p>
                      <p className="font-bold text-green-400">{data.growth}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
