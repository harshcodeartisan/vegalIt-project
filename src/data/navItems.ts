import { 
  Server, 
  Shield, 
  Home, 
  Database, 
  Cloud, 
  Settings, 
  Monitor, 
  RefreshCw,
  Network,
  Phone,
  Lock,
  HardDrive,
  Video,
  KeyRound,
  ShieldAlert,
  Bot,
  Smartphone,
  Users,
  Mail,
  BookOpen,
  Briefcase
} from 'lucide-react';
import { NavItem, NavDropdownItem } from '../types';

export const navItems: NavItem[] = [
  {
    title: 'Services',
    dropdown: [
      {
        icon: Monitor,
        title: 'IT AMC',
        description: 'Annual maintenance contracts for your IT infrastructure',
        link: 'it-amc'
      },
      {
        icon: Users,
        title: 'IT Outsourcing',
        description: 'Reliable IT resources to manage your technology needs',
        link: '/it-services/outsourcing'
      },
      {
        icon: RefreshCw,
        title: 'IT Relocation',
        description: 'Seamless office IT infrastructure moves and setups',
        link: '/it-services/relocation'
      },
      {
        icon: Cloud,
        title: 'Cloud Solutions',
        description: 'Scalable cloud services for business continuity',
        link: '/it-services/cloud-solutions'
      },
      {
        icon: Settings,
        title: 'ERP Solutions',
        description: 'Integrated enterprise solutions for business efficiency',
        link: '/it-services/erp-solutions'
      }
    ]
  },
  {
    title: 'IT Infrastructure',
    dropdown: [
      {
        icon: Network,
        title: 'Structured Cabling',
        description: 'Professional network cabling design and installation',
        link: '/it-infrastructure/structured-cabling'
      },
      {
        icon: Monitor,
        title: 'New Office Setup',
        description: 'Complete IT setup for new office locations',
        link: '/it-infrastructure/new-office-setup'
      },
      {
        icon: Server,
        title: 'Data Server Virtualization',
        description: 'Consolidate servers for increased efficiency',
        link: '/it-infrastructure/server-virtualization'
      },
      {
        icon: Phone,
        title: 'IP PBX Telephone Systems',
        description: 'Modern voice communication solutions',
        link: '/it-infrastructure/ip-pbx'
      },
      {
        icon: Lock,
        title: 'VPN and Firewall',
        description: 'Secure network connections and protection',
        link: '/it-infrastructure/vpn-firewall'
      },
      {
        icon: Mail,
        title: 'Office 365',
        description: 'Cloud-based productivity and collaboration tools',
        link: '/it-infrastructure/office-365'
      },
      {
        icon: Database,
        title: 'Data Backup & Recovery',
        description: 'Reliable data protection and disaster recovery',
        link: '/it-infrastructure/data-backup'
      },
      {
        icon: HardDrive,
        title: 'IT Hardware Services',
        description: 'Hardware supply, maintenance and support',
        link: '/it-infrastructure/hardware-services'
      }
    ]
  },
  {
    title: 'Security',
    dropdown: [
      {
        icon: Video,
        title: 'CCTV Installation',
        description: 'High-quality surveillance systems for your premises',
        link: '/security/cctv-installation'
      },
      {
        icon: KeyRound,
        title: 'Door Access Control',
        description: 'Secure entry systems for controlled access',
        link: '/security/door-access'
      },
      {
        icon: Shield,
        title: 'SIRA Approved CCTV',
        description: 'Regulatory compliant security camera systems',
        link: '/security/sira-cctv'
      },
      {
        icon: ShieldAlert,
        title: 'Cybersecurity',
        description: 'Protect your digital assets from threats',
        link: '/security/cybersecurity'
      }
    ]
  },
  {
    title: 'Home Automation',
    dropdown: [
      {
        icon: Home,
        title: 'Smart Villa Automation',
        description: 'Integrated smart systems for luxury homes',
        link: '/home-automation/villa-automation'
      },
      {
        icon: Bot,
        title: 'AI Enabled Homes',
        description: 'Advanced AI-powered home automation solutions',
        link: '/home-automation/ai-homes'
      },
      {
        icon: Smartphone,
        title: 'Smart Appliances',
        description: 'Connected devices for modern living',
        link: '/home-automation/smart-appliances'
      }
    ]
  },
  {
    title: 'Company',
    dropdown: [
      {
        icon: Users,
        title: 'About Us',
        description: 'Learn about our company history and vision',
        link: '/about'
      },
      {
        icon: Mail,
        title: 'Contact',
        description: 'Get in touch with our team',
        link: '/contact'
      },
      {
        icon: BookOpen,
        title: 'Blogs',
        description: 'Insights and news from our experts',
        link: '/blogs'
      },
      {
        icon: Briefcase,
        title: 'Career',
        description: 'Join our growing team of professionals',
        link: '/careers'
      }
    ]
  }
];