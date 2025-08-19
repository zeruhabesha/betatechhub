"use client"

import { useState } from "react"
import { Shield, AlertTriangle, Eye, Activity, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const securityMetrics = [
  {
    title: "Security Score",
    value: "94%",
    change: "+2%",
    icon: Shield,
    color: "text-green-500",
    description: "Overall security posture",
  },
  {
    title: "Active Threats",
    value: "3",
    change: "-5",
    icon: AlertTriangle,
    color: "text-red-500",
    description: "Threats detected today",
  },
  {
    title: "Monitored Assets",
    value: "1,247",
    change: "+12",
    icon: Eye,
    color: "text-blue-500",
    description: "Devices under protection",
  },
  {
    title: "System Uptime",
    value: "99.9%",
    change: "0%",
    icon: Activity,
    color: "text-green-500",
    description: "Service availability",
  },
]

const recentAlerts = [
  {
    id: 1,
    type: "High",
    title: "Suspicious Login Attempt",
    description: "Multiple failed login attempts from unknown IP",
    time: "2 minutes ago",
    status: "investigating",
  },
  {
    id: 2,
    type: "Medium",
    title: "Outdated Software Detected",
    description: "Critical security update available for Windows Server",
    time: "15 minutes ago",
    status: "pending",
  },
  {
    id: 3,
    type: "Low",
    title: "Firewall Rule Updated",
    description: "New firewall rule applied successfully",
    time: "1 hour ago",
    status: "resolved",
  },
  {
    id: 4,
    type: "Medium",
    title: "Unusual Network Traffic",
    description: "Increased data transfer detected on port 443",
    time: "2 hours ago",
    status: "monitoring",
  },
]

const vulnerabilities = [
  {
    severity: "Critical",
    count: 2,
    color: "bg-red-500",
    description: "Immediate attention required",
  },
  {
    severity: "High",
    count: 8,
    color: "bg-orange-500",
    description: "Fix within 24 hours",
  },
  {
    severity: "Medium",
    count: 15,
    color: "bg-yellow-500",
    description: "Fix within 7 days",
  },
  {
    severity: "Low",
    count: 23,
    color: "bg-blue-500",
    description: "Fix within 30 days",
  },
]

export default function DashboardPage() {
  const [selectedTab, setSelectedTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Security Dashboard</h1>
          <p className="text-muted-foreground">Monitor your organization's security posture in real-time</p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {securityMetrics.map((metric, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className={`h-6 w-6 ${metric.color}`} />
                  <Badge variant="secondary" className="text-xs">
                    {metric.change}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="bg-card border-border">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="threats" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Threat Monitor
            </TabsTrigger>
            <TabsTrigger
              value="vulnerabilities"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Vulnerabilities
            </TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Alerts */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-primary" />
                    Recent Security Alerts
                  </CardTitle>
                  <CardDescription>Latest security events requiring attention</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-start space-x-3 p-3 bg-background rounded-lg">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          alert.type === "High"
                            ? "bg-red-500"
                            : alert.type === "Medium"
                              ? "bg-yellow-500"
                              : "bg-blue-500"
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm font-medium text-foreground truncate">{alert.title}</p>
                          <Badge
                            variant="secondary"
                            className={`text-xs ${
                              alert.status === "resolved"
                                ? "bg-green-500/20 text-green-400"
                                : alert.status === "investigating"
                                  ? "bg-red-500/20 text-red-400"
                                  : "bg-yellow-500/20 text-yellow-400"
                            }`}
                          >
                            {alert.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{alert.description}</p>
                        <p className="text-xs text-muted-foreground">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* System Health */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-primary" />
                    System Health
                  </CardTitle>
                  <CardDescription>Current status of security systems</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Firewall Status</span>
                      <span className="text-green-400">Active</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Antivirus Coverage</span>
                      <span className="text-green-400">98%</span>
                    </div>
                    <Progress value={98} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Backup Status</span>
                      <span className="text-green-400">Complete</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Patch Level</span>
                      <span className="text-yellow-400">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="vulnerabilities" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Vulnerability Summary</CardTitle>
                <CardDescription>Current vulnerabilities by severity level</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {vulnerabilities.map((vuln, index) => (
                    <div key={index} className="text-center p-4 bg-background rounded-lg">
                      <div
                        className={`w-12 h-12 ${vuln.color} rounded-full mx-auto mb-3 flex items-center justify-center`}
                      >
                        <span className="text-white font-bold text-lg">{vuln.count}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{vuln.severity}</h3>
                      <p className="text-xs text-muted-foreground">{vuln.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Security Reports</CardTitle>
                <CardDescription>Download comprehensive security reports and analytics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-background rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Monthly Security Report</h3>
                    <p className="text-sm text-muted-foreground mb-3">Comprehensive overview of security events</p>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                  <div className="p-4 bg-background rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Vulnerability Assessment</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Detailed vulnerability analysis and recommendations
                    </p>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
