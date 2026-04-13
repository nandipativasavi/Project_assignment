import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {

  adminName: string = 'Admin User';
  currentTime: string = '';
  sidebarCollapsed: boolean = false;
  activeSection: string = 'overview';

  stats = [
    { label: 'Total Users',     value: '24,521', change: '+12.4%', up: true,  icon: 'users'   },
    { label: 'Active Sessions', value: '1,893',  change: '+8.1%',  up: true,  icon: 'activity'},
    { label: 'Monthly Revenue', value: '$94,200',change: '+23.5%', up: true,  icon: 'dollar'  },
    { label: 'Churn Rate',      value: '2.4%',   change: '-0.8%',  up: false, icon: 'trend'   },
  ];

  recentUsers = [
    { name: 'Priya Sharma',   email: 'priya@example.com',   role: 'Admin', status: 'Active',   joined: 'Apr 10, 2026' },
    { name: 'Rahul Mehta',    email: 'rahul@example.com',   role: 'User',  status: 'Active',   joined: 'Apr 09, 2026' },
    { name: 'Sneha Reddy',    email: 'sneha@example.com',   role: 'User',  status: 'Inactive', joined: 'Apr 08, 2026' },
    { name: 'Arjun Nair',     email: 'arjun@example.com',   role: 'User',  status: 'Active',   joined: 'Apr 07, 2026' },
    { name: 'Divya Krishnan', email: 'divya@example.com',   role: 'Admin', status: 'Active',   joined: 'Apr 06, 2026' },
    { name: 'Karan Patel',    email: 'karan@example.com',   role: 'User',  status: 'Pending',  joined: 'Apr 05, 2026' },
  ];

  navItems = [
    { id: 'overview',  label: 'Overview',   icon: 'grid'    },
    { id: 'users',     label: 'Users',      icon: 'users'   },
    { id: 'analytics', label: 'Analytics',  icon: 'bar'     },
    { id: 'reports',   label: 'Reports',    icon: 'file'    },
    { id: 'settings',  label: 'Settings',   icon: 'settings'},
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
    setTimeout(() => this.renderCharts(), 300);
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-IN', {
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
  }

  setActive(section: string) {
    this.activeSection = section;
  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  renderCharts() {
    this.renderLineChart();
    this.renderBarChart();
    this.renderDoughnutChart();
  }

  renderLineChart() {
    const canvas = document.getElementById('lineChart') as HTMLCanvasElement;
    if (!canvas || !(window as any).Chart) return;
    new (window as any).Chart(canvas, {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
          label: 'Sign-ups',
          data: [820,932,901,1234,1290,1330,1520,1680,1420,1890,2100,2450],
          borderColor: '#1a3ec8',
          backgroundColor: 'rgba(26,62,200,0.08)',
          borderWidth: 2.5,
          pointBackgroundColor: '#1a3ec8',
          pointRadius: 4,
          tension: 0.4,
          fill: true
        },{
          label: 'Revenue ($00s)',
          data: [410,520,480,700,820,750,900,980,860,1100,1300,1500],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16,185,129,0.06)',
          borderWidth: 2.5,
          pointBackgroundColor: '#10b981',
          pointRadius: 4,
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'top', labels: { font: { family: 'Plus Jakarta Sans', size: 12 }, color: '#64748b' }}},
        scales: {
          x: { grid: { color: '#f1f5f9' }, ticks: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans' }}},
          y: { grid: { color: '#f1f5f9' }, ticks: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans' }}}
        }
      }
    });
  }

  renderBarChart() {
    const canvas = document.getElementById('barChart') as HTMLCanvasElement;
    if (!canvas || !(window as any).Chart) return;
    new (window as any).Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [{
          label: 'Active Users',
          data: [1200, 1900, 1500, 2100, 1800, 900, 650],
          backgroundColor: 'rgba(26,62,200,0.85)',
          borderRadius: 6,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }},
        scales: {
          x: { grid: { display: false }, ticks: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans' }}},
          y: { grid: { color: '#f1f5f9' }, ticks: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans' }}}
        }
      }
    });
  }

  renderDoughnutChart() {
    const canvas = document.getElementById('doughnutChart') as HTMLCanvasElement;
    if (!canvas || !(window as any).Chart) return;
    new (window as any).Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: ['Admin', 'Active Users', 'Inactive', 'Pending'],
        datasets: [{
          data: [8, 65, 18, 9],
          backgroundColor: ['#1a3ec8','#10b981','#f59e0b','#ef4444'],
          borderWidth: 0,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '72%',
        plugins: {
          legend: { position: 'bottom', labels: { font: { family: 'Plus Jakarta Sans', size: 12 }, color: '#64748b', padding: 16 }}
        }
      }
    });
  }
}