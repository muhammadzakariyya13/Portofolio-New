/**
 * Admin Dashboard JavaScript
 * Handles navigation, animations, and interactive features
 */

class AdminDashboard {
    constructor() {
        this.sidebar = document.getElementById('sidebar');
        this.sidebarToggle = document.getElementById('sidebarToggle');
        this.mobileMenuToggle = document.getElementById('mobileMenuToggle');
        this.pageTitle = document.getElementById('pageTitle');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.contentSections = document.querySelectorAll('.content-section');
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupNavigation();
        this.animateStatNumbers();
        this.setupResponsiveHandling();
        this.addLoadingAnimations();
    }

    setupEventListeners() {
        // Sidebar toggle for desktop
        this.sidebarToggle?.addEventListener('click', () => {
            this.toggleSidebar();
        });

        // Mobile menu toggle
        this.mobileMenuToggle?.addEventListener('click', () => {
            this.toggleMobileSidebar();
        });

        // Close mobile sidebar when clicking outside
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (!this.sidebar.contains(e.target) && !this.mobileMenuToggle.contains(e.target)) {
                    this.closeMobileSidebar();
                }
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            this.handleResize();
        });

        // Setup smooth scrolling for any internal links
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
            }
        });
    }

    setupNavigation() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionName = link.getAttribute('data-section');
                this.showSection(sectionName);
                this.setActiveNavLink(link);
                this.updatePageTitle(sectionName);
                
                // Close mobile sidebar after navigation
                if (window.innerWidth <= 768) {
                    this.closeMobileSidebar();
                }
            });
        });
    }

    showSection(sectionName) {
        // Hide all sections
        this.contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(`${sectionName}Section`);
        if (targetSection) {
            targetSection.classList.add('active');
            
            // Trigger animations for the new section
            this.triggerSectionAnimations(targetSection);
        }
    }

    setActiveNavLink(activeLink) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }

    updatePageTitle(sectionName) {
        const titles = {
            dashboard: 'Dashboard',
            users: 'User Management',
            projects: 'Project Management',
            analytics: 'Analytics Overview',
            settings: 'Settings'
        };
        
        this.pageTitle.textContent = titles[sectionName] || 'Dashboard';
    }

    toggleSidebar() {
        this.sidebar.classList.toggle('collapsed');
        
        // Store state in localStorage
        const isCollapsed = this.sidebar.classList.contains('collapsed');
        localStorage.setItem('sidebarCollapsed', isCollapsed);
    }

    toggleMobileSidebar() {
        this.sidebar.classList.toggle('mobile-open');
    }

    closeMobileSidebar() {
        this.sidebar.classList.remove('mobile-open');
    }

    handleResize() {
        if (window.innerWidth > 768) {
            this.sidebar.classList.remove('mobile-open');
            
            // Restore desktop sidebar state
            const savedState = localStorage.getItem('sidebarCollapsed');
            if (savedState === 'true') {
                this.sidebar.classList.add('collapsed');
            }
        }
    }

    // Animate stat numbers with counting effect
    animateStatNumbers() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const animateNumber = (element) => {
            const target = element.getAttribute('data-target');
            const isPercentage = target.includes('%');
            const isCurrency = target.includes('$');
            const isComma = target.includes(',');
            
            let numericTarget;
            if (isCurrency) {
                numericTarget = parseFloat(target.replace(/[$,]/g, ''));
            } else if (isPercentage) {
                numericTarget = parseFloat(target.replace('%', ''));
            } else if (isComma) {
                numericTarget = parseInt(target.replace(',', ''));
            } else {
                numericTarget = parseFloat(target);
            }
            
            let current = 0;
            const increment = numericTarget / 100;
            const duration = 2000; // 2 seconds
            const stepTime = duration / 100;
            
            const timer = setInterval(() => {
                current += increment;
                
                if (current >= numericTarget) {
                    current = numericTarget;
                    clearInterval(timer);
                }
                
                let displayValue;
                if (isCurrency) {
                    displayValue = `$${Math.round(current).toLocaleString()}`;
                } else if (isPercentage) {
                    displayValue = `${current.toFixed(1)}%`;
                } else if (isComma && current >= 1000) {
                    displayValue = Math.round(current).toLocaleString();
                } else {
                    displayValue = Math.round(current).toString();
                }
                
                element.textContent = displayValue;
            }, stepTime);
        };

        // Use Intersection Observer to trigger animations when elements are visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
                    animateNumber(entry.target);
                    entry.target.setAttribute('data-animated', 'true');
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(stat => {
            observer.observe(stat);
        });
    }

    triggerSectionAnimations(section) {
        // Animate cards with stagger effect
        const cards = section.querySelectorAll('.stat-card, .chart-card, .project-card, .analytics-card, .settings-card');
        
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });

        // Re-trigger stat number animations if on dashboard
        if (section.id === 'dashboardSection') {
            const statNumbers = section.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                stat.removeAttribute('data-animated');
                stat.textContent = '0';
            });
            setTimeout(() => this.animateStatNumbers(), 300);
        }
    }

    addLoadingAnimations() {
        // Add initial loading animation to all cards
        const allCards = document.querySelectorAll('.stat-card, .chart-card, .project-card, .analytics-card, .settings-card');
        
        allCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 + index * 50);
        });
    }

    setupResponsiveHandling() {
        // Restore sidebar state on load
        const savedState = localStorage.getItem('sidebarCollapsed');
        if (savedState === 'true' && window.innerWidth > 768) {
            this.sidebar.classList.add('collapsed');
        }
    }
}

// Additional utility functions
class DashboardUtils {
    static formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    static generateRandomData(length = 12) {
        return Array.from({ length }, () => Math.floor(Math.random() * 100) + 20);
    }

    static createSimpleChart(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Clear existing content
        container.innerHTML = '';

        // Create simple bar chart with CSS
        const chartData = data || this.generateRandomData();
        const maxValue = Math.max(...chartData);

        chartData.forEach((value, index) => {
            const bar = document.createElement('div');
            bar.style.cssText = `
                display: inline-block;
                width: ${100 / chartData.length - 1}%;
                height: ${(value / maxValue) * 100}%;
                background: linear-gradient(135deg, var(--accent-color), var(--accent-color-2));
                margin-right: 1%;
                border-radius: 4px 4px 0 0;
                transition: all 0.3s ease;
                opacity: 0;
                transform: translateY(20px);
            `;
            
            container.appendChild(bar);
            
            // Animate bars
            setTimeout(() => {
                bar.style.opacity = '1';
                bar.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }

    static showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px 24px;
            background: var(--card-bg);
            backdrop-filter: var(--glass-effect);
            border: 1px solid var(--glass-border);
            border-radius: var(--border-radius);
            color: var(--primary-color);
            box-shadow: var(--glass-shadow);
            z-index: 10000;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
        `;
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const dashboard = new AdminDashboard();
    
    // Create simple chart for monthly analytics
    setTimeout(() => {
        DashboardUtils.createSimpleChart('monthlyChart');
    }, 1000);
    
    // Add click handlers for buttons
    document.addEventListener('click', (e) => {
        if (e.target.matches('.btn-primary, .btn-secondary')) {
            e.preventDefault();
            const action = e.target.textContent;
            DashboardUtils.showNotification(`${action} clicked - Feature ready for implementation!`);
        }
        
        if (e.target.matches('.btn-action')) {
            e.preventDefault();
            const action = e.target.textContent === '✏️' ? 'Edit' : 'Delete';
            DashboardUtils.showNotification(`${action} action triggered`);
        }
    });
    
    // Add hover effects for interactive elements
    document.querySelectorAll('.stat-card, .project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    console.log('Admin Dashboard initialized successfully!');
});