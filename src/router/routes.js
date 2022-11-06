import {
    FireIcon,
    LifebuoyIcon,
    UserGroupIcon,
    TvIcon,
    SignalIcon,
    ShieldExclamationIcon,
    ShieldCheckIcon,
    BriefcaseIcon,
    SwatchIcon,
} from "@heroicons/vue/24/solid";
import ReportsView from '@/views/ReportsView.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: LifebuoyIcon,
        component: () => import('../views/View.vue')
    },
    {
        icon: FireIcon,
        name: "Incidents",
        path: "/incidents",
        component: () => import('../views/View.vue')
    },
    {
        icon: SignalIcon,
        name: "Network",
        path: "/network",
        component: () => import('../views/View.vue')
    },
    {
        icon: ShieldExclamationIcon,
        name: "Risk Management",
        path: "/risk-management",
        component: () => import('../views/View.vue')
    },
    {
        icon: ShieldCheckIcon,
        name: "Policies",
        path: "/policies",
        component: () => import('../views/View.vue')
    },
    {
        icon: SwatchIcon,
        name: "Reports",
        path: "/reports",
        component: ReportsView
    },
    {
        icon: BriefcaseIcon,
        name: "Companies",
        path: "/companies",
        component: () => import('../views/View.vue')
    },
    {
        icon: UserGroupIcon,
        name: "Accounts",
        path: "/accounts",
        component: () => import('../views/View.vue')
    },
    {
        icon: TvIcon,
        name: "Sandbox Analyzer",
        path: "/sandbox-analyzer",
        component: () => import('../views/View.vue')
    },
];

export default routes;