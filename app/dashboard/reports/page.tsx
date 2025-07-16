'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockDashboardStats, mockCustomers, mockTickets, mockFeedback } from '@/lib/mock-data';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Star, 
  Download,
  Calendar,
  Filter,
  Target,
  DollarSign,
  UserCheck,
  RotateCcw,
  Clock,
  MessageCircle,
  ThumbsUp,
  Ticket as TicketIcon,
  ArrowUp,
  ArrowDown,
  Minus,
} from 'lucide-react';

export default function ReportsPage() {
  const stats = mockDashboardStats;
  
  // KPI محاسبات
  const salesTargetPercentage = 78.5; // درصد فروش نسبت به هدف
  const activeCustomersPercentage = 85.2; // درصد مشتریان فعال
  const customerReturnRate = 42.8; // نرخ بازگشت مشتری
  const avgCLV = 15500000; // میانگین CLV
  const newCustomersThisMonth = 23; // مشتریان جدید این ماه
  const avgResponseTime = 2.3; // ساعت
  const positiveFeedbackPercentage = 87.4; // درصد نظرات مثبت
  const totalTicketsThisMonth = 156; // تعداد تیکت‌های این ماه

  const handleExportReport = (type: string) => {
    console.log(`در حال خروجی گرفتن گزارش ${type}...`);
  };

  // داده‌های نمودار فروش
  const salesData = [
    { month: 'فروردین', actual: 85, target: 100 },
    { month: 'اردیبهشت', actual: 92, target: 100 },
    { month: 'خرداد', actual: 78, target: 100 },
    { month: 'تیر', actual: 88, target: 100 },
    { month: 'مرداد', actual: 95, target: 100 },
    { month: 'شهریور', actual: 82, target: 100 },
  ];

  // داده‌های نمودار مشتریان فعال
  const activeCustomersData = [
    { name: 'فعال', value: 85.2, color: '#4CAF50' },
    { name: 'غیرفعال', value: 14.8, color: '#E0E0E0' },
  ];

  // داده‌های CLV
  const clvData = [
    { segment: 'VIP', clv: 45000000, count: 12 },
    { segment: 'سازمانی', clv: 25000000, count: 34 },
    { segment: 'کسب‌وکار کوچک', clv: 8500000, count: 67 },
    { segment: 'فردی', clv: 3200000, count: 89 },
  ];

  // داده‌های زمان پاسخگویی
  const responseTimeData = [
    { day: 'شنبه', time: 1.8 },
    { day: 'یکشنبه', time: 2.1 },
    { day: 'دوشنبه', time: 2.5 },
    { day: 'سه‌شنبه', time: 2.8 },
    { day: 'چهارشنبه', time: 2.2 },
    { day: 'پنج‌شنبه', time: 1.9 },
    { day: 'جمعه', time: 1.5 },
  ];

  // داده‌های نظرات
  const sentimentData = [
    { name: 'مثبت', value: 87.4, color: '#4CAF50' },
    { name: 'خنثی', value: 8.2, color: '#FF9800' },
    { name: 'منفی', value: 4.4, color: '#F44336' },
  ];

  const getTrendIcon = (value: number, threshold: number = 0) => {
    if (value > threshold) return <ArrowUp className="h-4 w-4 text-green-500" />;
    if (value < threshold) return <ArrowDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-gray-500" />;
  };

  const getTrendColor = (value: number, threshold: number = 0) => {
    if (value > threshold) return 'text-green-600';
    if (value < threshold) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-vazir bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            گزارش‌ها و تحلیل‌ها
          </h1>
          <p className="text-muted-foreground font-vazir mt-2">تحلیل عملکرد و KPI های کلیدی کسب‌وکار</p>
        </div>
        <div className="flex space-x-2 space-x-reverse">
          <Button variant="outline" className="font-vazir">
            <Filter className="h-4 w-4 ml-2" />
            فیلتر
          </Button>
          <Button variant="outline" className="font-vazir">
            <Calendar className="h-4 w-4 ml-2" />
            بازه زمانی
          </Button>
          <Button className="bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 font-vazir">
            <Download className="h-4 w-4 ml-2" />
            خروجی کامل
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium font-vazir">فروش نسبت به هدف</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary font-vazir">%{salesTargetPercentage.toLocaleString('fa-IR')}</div>
            <div className="flex items-center space-x-2 space-x-reverse mt-2">
              {getTrendIcon(5.2)}
              <span className={`text-xs font-vazir ${getTrendColor(5.2)}`}>+۵.۲% نسبت به ماه گذشته</span>
            </div>
            <Progress value={salesTargetPercentage} className="mt-3" />
          </CardContent>
        </Card>

        <Card className="border-secondary/20 hover:border-secondary/40 transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium font-vazir">مشتریان فعال</CardTitle>
            <UserCheck className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary font-vazir">%{activeCustomersPercentage.toLocaleString('fa-IR')}</div>
            <div className="flex items-center space-x-2 space-x-reverse mt-2">
              {getTrendIcon(2.1)}
              <span className={`text-xs font-vazir ${getTrendColor(2.1)}`}>+۲.۱% نسبت به ماه گذشته</span>
            </div>
            <p className="text-xs text-muted-foreground font-vazir mt-1">خرید در ۳۰ روز گذشته</p>
          </CardContent>
        </Card>

        <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium font-vazir">نرخ بازگشت مشتری</CardTitle>
            <RotateCcw className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent font-vazir">%{customerReturnRate.toLocaleString('fa-IR')}</div>
            <div className="flex items-center space-x-2 space-x-reverse mt-2">
              {getTrendIcon(-1.3)}
              <span className={`text-xs font-vazir ${getTrendColor(-1.3)}`}>-۱.۳% نسبت به ماه گذشته</span>
            </div>
            <p className="text-xs text-muted-foreground font-vazir mt-1">خرید مجدد در بازه زمانی</p>
          </CardContent>
        </Card>

        <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium font-vazir">میانگین CLV</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary font-vazir">{(avgCLV / 1000000).toFixed(1)}M تومان</div>
            <div className="flex items-center space-x-2 space-x-reverse mt-2">
              {getTrendIcon(8.7)}
              <span className={`text-xs font-vazir ${getTrendColor(8.7)}`}>+۸.۷% نسبت به ماه گذشته</span>
            </div>
            <p className="text-xs text-muted-foreground font-vazir mt-1">ارزش طول عمر مشتری</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for different report categories */}
      <Tabs defaultValue="sales" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="sales" className="font-vazir">گزارش‌های فروش</TabsTrigger>
          <TabsTrigger value="customers" className="font-vazir">تحلیل مشتریان</TabsTrigger>
          <TabsTrigger value="support" className="font-vazir">عملکرد پشتیبانی</TabsTrigger>
          <TabsTrigger value="feedback" className="font-vazir">بازخورد مشتریان</TabsTrigger>
        </TabsList>

        {/* Sales Reports */}
        <TabsContent value="sales" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Sales vs Target Chart */}
            <Card className="border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-vazir">فروش نسبت به هدف</CardTitle>
                  <Button variant="outline" size="sm" onClick={() => handleExportReport('فروش-هدف')} className="font-vazir">
                    <Download className="h-4 w-4 ml-2" />
                    خروجی
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {salesData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm font-vazir">
                        <span>{item.month}</span>
                        <span>%{item.actual.toLocaleString('fa-IR')} از هدف</span>
                      </div>
                      <div className="relative">
                        <Progress value={item.actual} className="h-3" />
                        <div className="absolute top-0 right-0 w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full opacity-30"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CLV by Segment */}
            <Card className="border-border/50 hover:border-secondary/30 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-vazir">CLV بر اساس بخش مشتری</CardTitle>
                  <Button variant="outline" size="sm" onClick={() => handleExportReport('CLV-بخش')} className="font-vazir">
                    <Download className="h-4 w-4 ml-2" />
                    خروجی
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clvData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-border/50 rounded-lg hover:border-secondary/30 transition-all duration-300">
                      <div>
                        <p className="font-medium font-vazir">{item.segment}</p>
                        <p className="text-sm text-muted-foreground font-vazir">{item.count.toLocaleString('fa-IR')} مشتری</p>
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-secondary font-vazir">{(item.clv / 1000000).toFixed(1)}M تومان</p>
                        <p className="text-xs text-muted-foreground font-vazir">میانگین CLV</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* New Customers Trend */}
          <Card className="border-border/50 hover:border-accent/30 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="font-vazir">مشتریان جدید</CardTitle>
                <Button variant="outline" size="sm" onClick={() => handleExportReport('مشتریان-جدید')} className="font-vazir">
                  <Download className="h-4 w-4 ml-2" />
                  خروجی
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-4 border border-border/50 rounded-lg">
                  <div className="text-3xl font-bold text-accent font-vazir">{newCustomersThisMonth.toLocaleString('fa-IR')}</div>
                  <p className="text-sm text-muted-foreground font-vazir">این ماه</p>
                  <div className="flex items-center justify-center space-x-1 space-x-reverse mt-2">
                    {getTrendIcon(15.2)}
                    <span className={`text-xs font-vazir ${getTrendColor(15.2)}`}>+۱۵.۲%</span>
                  </div>
                </div>
                <div className="text-center p-4 border border-border/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary font-vazir">۱۸</div>
                  <p className="text-sm text-muted-foreground font-vazir">ماه گذشته</p>
                  <div className="flex items-center justify-center space-x-1 space-x-reverse mt-2">
                    {getTrendIcon(-5.3)}
                    <span className={`text-xs font-vazir ${getTrendColor(-5.3)}`}>-۵.۳%</span>
                  </div>
                </div>
                <div className="text-center p-4 border border-border/50 rounded-lg">
                  <div className="text-3xl font-bold text-secondary font-vazir">۲۱</div>
                  <p className="text-sm text-muted-foreground font-vazir">میانگین ۳ ماه</p>
                  <div className="flex items-center justify-center space-x-1 space-x-reverse mt-2">
                    {getTrendIcon(9.5)}
                    <span className={`text-xs font-vazir ${getTrendColor(9.5)}`}>+۹.۵%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Customer Analysis */}
        <TabsContent value="customers" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Active Customers Pie Chart */}
            <Card className="border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-vazir">وضعیت فعالیت مشتریان</CardTitle>
                  <Button variant="outline" size="sm" onClick={() => handleExportReport('مشتریان-فعال')} className="font-vazir">
                    <Download className="h-4 w-4 ml-2" />
                    خروجی
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeCustomersData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="font-vazir">{item.name}</span>
                      </div>
                      <div className="text-left">
                        <span className="font-bold font-vazir">%{item.value.toLocaleString('fa-IR')}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <div className="text-4xl font-bold text-secondary font-vazir">%{activeCustomersPercentage.toLocaleString('fa-IR')}</div>
                  <p className="text-sm text-muted-foreground font-vazir">مشتریان فعال (خرید در ۳۰ روز گذشته)</p>
                </div>
              </CardContent>
            </Card>

            {/* Customer Return Rate */}
            <Card className="border-border/50 hover:border-accent/30 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-vazir">نرخ بازگشت مشتری</CardTitle>
                  <Button variant="outline" size="sm" onClick={() => handleExportReport('نرخ-بازگشت')} className="font-vazir">
                    <Download className="h-4 w-4 ml-2" />
                    خروجی
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-accent font-vazir">%{customerReturnRate.toLocaleString('fa-IR')}</div>
                  <p className="text-sm text-muted-foreground font-vazir">مشتریان بازگشتی</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-vazir">خرید مجدد در ۳۰ روز</span>
                    <Badge variant="default" className="font-vazir">%۲۸.۵</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-vazir">خرید مجدد در ۹۰ روز</span>
                    <Badge variant="secondary" className="font-vazir">%۴۲.۸</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-vazir">خرید مجدد در ۱۸۰ روز</span>
                    <Badge variant="outline" className="font-vazir">%۵۶.۳</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Support Performance */}
        <TabsContent value="support" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Response Time Chart */}
            <Card className="border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-vazir">زمان پاسخگویی به تیکت‌ها</CardTitle>
                  <Button variant="outline" size="sm" onClick={() => handleExportReport('زمان-پاسخ')} className="font-vazir">
                    <Download className="h-4 w-4 ml-2" />
                    خروجی
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-primary font-vazir">{avgResponseTime.toLocaleString('fa-IR')} ساعت</div>
                  <p className="text-sm text-muted-foreground font-vazir">میانگین زمان پاسخ</p>
                </div>
                <div className="space-y-3">
                  {responseTimeData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-vazir">{item.day}</span>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${(item.time / 3) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-vazir w-12">{item.time.toLocaleString('fa-IR')}س</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Support Tickets Count */}
            <Card className="border-border/50 hover:border-secondary/30 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-vazir">تیکت‌های پشتیبانی</CardTitle>
                  <Button variant="outline" size="sm" onClick={() => handleExportReport('تیکت-پشتیبانی')} className="font-vazir">
                    <Download className="h-4 w-4 ml-2" />
                    خروجی
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-secondary font-vazir">{totalTicketsThisMonth.toLocaleString('fa-IR')}</div>
                  <p className="text-sm text-muted-foreground font-vazir">تیکت این ماه</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border border-border/50 rounded-lg">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-vazir">باز</span>
                    </div>
                    <Badge variant="destructive" className="font-vazir">۲۳</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border border-border/50 rounded-lg">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm font-vazir">در حال انجام</span>
                    </div>
                    <Badge variant="default" className="font-vazir">۴۵</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border border-border/50 rounded-lg">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-vazir">حل شده</span>
                    </div>
                    <Badge variant="secondary" className="font-vazir">۸۸</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Customer Feedback */}
        <TabsContent value="feedback" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Sentiment Analysis */}
            <Card className="border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-vazir">تحلیل احساسات نظرات</CardTitle>
                  <Button variant="outline" size="sm" onClick={() => handleExportReport('احساسات-نظرات')} className="font-vazir">
                    <Download className="h-4 w-4 ml-2" />
                    خروجی
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-600 font-vazir">%{positiveFeedbackPercentage.toLocaleString('fa-IR')}</div>
                  <p className="text-sm text-muted-foreground font-vazir">نظرات مثبت</p>
                </div>
                <div className="space-y-4">
                  {sentimentData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm font-vazir">
                        <span>{item.name}</span>
                        <span>%{item.value.toLocaleString('fa-IR')}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div 
                          className="h-3 rounded-full transition-all duration-300" 
                          style={{ 
                            width: `${item.value}%`,
                            backgroundColor: item.color 
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Feedback Summary */}
            <Card className="border-border/50 hover:border-secondary/30 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-vazir">خلاصه بازخوردها</CardTitle>
                  <Button variant="outline" size="sm" onClick={() => handleExportReport('خلاصه-بازخورد')} className="font-vazir">
                    <Download className="h-4 w-4 ml-2" />
                    خروجی
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <ThumbsUp className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="font-medium font-vazir">کیفیت محصول</p>
                        <p className="text-sm text-muted-foreground font-vazir">۱۲۴ نظر</p>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-bold text-green-600 font-vazir">۴.۶</div>
                      <div className="flex">
                        {[1,2,3,4,5].map(star => (
                          <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <MessageCircle className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium font-vazir">پشتیبانی مشتری</p>
                        <p className="text-sm text-muted-foreground font-vazir">۹۸ نظر</p>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-bold text-blue-600 font-vazir">۴.۳</div>
                      <div className="flex">
                        {[1,2,3,4].map(star => (
                          <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="h-3 w-3 text-gray-300" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-border/50 rounded-lg">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <Clock className="h-5 w-5 text-orange-500" />
                      <div>
                        <p className="font-medium font-vazir">سرعت تحویل</p>
                        <p className="text-sm text-muted-foreground font-vazir">۸۶ نظر</p>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-bold text-orange-600 font-vazir">۴.۱</div>
                      <div className="flex">
                        {[1,2,3,4].map(star => (
                          <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="h-3 w-3 text-gray-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Export All Reports */}
      <Card className="border-border/50 hover:border-primary/30 transition-all duration-300">
        <CardHeader>
          <CardTitle className="font-vazir">خروجی گزارش‌های جامع</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <Button 
              variant="outline" 
              className="h-20 flex-col border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 font-vazir"
              onClick={() => handleExportReport('فروش-کامل')}
            >
              <Target className="h-6 w-6 mb-2 text-primary" />
              گزارش فروش
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col border-secondary/20 hover:border-secondary hover:bg-secondary/5 transition-all duration-300 font-vazir"
              onClick={() => handleExportReport('مشتریان-کامل')}
            >
              <Users className="h-6 w-6 mb-2 text-secondary" />
              تحلیل مشتریان
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col border-accent/20 hover:border-accent hover:bg-accent/5 transition-all duration-300 font-vazir"
              onClick={() => handleExportReport('پشتیبانی-کامل')}
            >
              <TicketIcon className="h-6 w-6 mb-2 text-accent" />
              عملکرد پشتیبانی
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 font-vazir"
              onClick={() => handleExportReport('بازخورد-کامل')}
            >
              <ThumbsUp className="h-6 w-6 mb-2 text-primary" />
              بازخورد مشتریان
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}