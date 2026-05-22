import { Link, router, usePage } from '@inertiajs/react';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { dashboard, home, logout } from '@/routes';
import type { SideNavItem } from '@/types';



const items: SideNavItem[] = [
    // {
    //     title: 'Home',
    //     href: home(),
    //     icon_name: "home",
    //     icon: "material-symbols-outlined menu-icon",
    // },
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon_name: "Dashboard",
        icon: "material-symbols-outlined menu-icon",
    },
    {
        title: 'User list',
        href: '/users',
        icon_name: "Person",
        icon: "material-symbols-outlined menu-icon",
    },
    {
        title: 'Profile',
        href: "/settings/profile",
        icon_name: "account_circle",
        icon: "material-symbols-outlined menu-icon",
    },
    {
        title: 'Security',
        href: "/settings/security",
        icon_name: "Security",
        icon: "material-symbols-outlined menu-icon",
    },
];

export default function MainSidebar() {
    const cleanup = useMobileNavigation();
    const handleLogout = () => {
        cleanup();
        router.flushAll();
    };

    const page = usePage();




    return (
        <>
            <div className="sidebar-area" id="sidebar-area">

                <div className="logo position-relative d-flex align-items-center justify-content-between">
                    <Link className="d-block text-decoration-none position-relative" href={home()}>
                        <img alt="logo-icon" src="/backend/assets/images/seller1.png" />
                        <span className="logo-text text-secondary fw-semibold">NAME </span>
                    </Link>
                    <button className="sidebar-burger-menu-close bg-transparent py-3 border-0 opacity-0 z-n1 position-absolute top-50 end-0 translate-middle-y" id="sidebar-burger-menu-close">
                        <span className="border-1 d-block for-dark-burger" style={{
                            borderBottom: "1px solid #475569", height: "1px", width: "25px", transform: "rotate(45deg)"
                        }}>
                        </span>
                        <span className="border-1 d-block for-dark-burger" style={{
                            borderBottom: "1px solid #475569", height: "1px", width: "25px", transform: "rotate(-45deg)"
                        }}>
                        </span>
                    </button>
                    <button className="sidebar-burger-menu bg-transparent p-0 border-0" id="sidebar-burger-menu">
                        <span className="border-1 d-block for-dark-burger" style={{ borderBottom: "1px solid #475569", height: "1px", width: "25px" }}>
                        </span>
                        <span className="border-1 d-block for-dark-burger" style={{ borderBottom: "1px solid #475569", height: "1px", width: "25px" }}>
                        </span>
                        <span className="border-1 d-block for-dark-burger" style={{ borderBottom: "1px solid #475569", height: "1px", width: "25px" }}>
                        </span>
                    </button>
                </div>
                <aside className="layout-menu menu-vertical menu active" data-simplebar="" id="layout-menu">
                    <ul className="menu-inner">
                        {items.map((item, index) => {

                            const isActive =
                                typeof item.href === 'string'
                                    ? page.url.startsWith(item.href)
                                    : page.url.startsWith(item.href.url);

                            return (
                                <li className={`menu-item ${isActive ? 'Open' : ''}`} key={index}>
                                    <Link
                                        className={`menu-link ${isActive ? 'active' : ''}`}
                                        href={item.href}
                                    >
                                        <span className={item.icon}>
                                            {item.icon_name}
                                        </span>

                                        <span className="title">
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="menu-item">
                            <Link
                                className="menu-link"
                                href={logout()}
                                as="button"
                            >
                                <span className="material-symbols-outlined menu-icon">
                                    Logout
                                </span>

                                <span className="title">
                                    Logout
                                </span>
                            </Link>
                        </li>
                    </ul>
                </aside>
            </div>
        </>
    )
}
