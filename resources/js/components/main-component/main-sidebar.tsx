import { Link, usePage } from '@inertiajs/react';
import { home, logout } from '@/routes';
import type { SideNavItem } from '@/types';
import { useState } from 'react';

interface MenuItem extends SideNavItem {
    icon_name?: string;
    icon?: string;
    children?: MenuItem[];
}

const items: MenuItem[] = [
    {
        title: 'Dashboard',
        href: '/admin/dashboard',
        icon_name: 'dashboard',
        icon: 'material-symbols-outlined menu-icon',
    },
    {
        title: 'User List',
        href: '/admin/users',
        icon_name: 'group',
        icon: 'material-symbols-outlined menu-icon',
    },
    {
        title: 'Profile',
        href: '/admin/profile',
        icon_name: 'account_circle',
        icon: 'material-symbols-outlined menu-icon',
    },

    {
        title: 'Pages',
        href: '',
        icon_name: 'Article',
        icon: 'material-symbols-outlined menu-icon',

        children: [
            {
                title: 'Faqs',
                href: '/admin/faq/list',
            },
            {
                title: 'Privacy and Policy',
                href: '/admin/page/privacy-policy',
            },
            {
                title: 'Terms and Conditions',
                href: '/admin/page/terms-and-conditions',
            },
        ]
    },

    {
        title: 'Settings',
        href: '',
        icon_name: 'Settings',
        icon: 'material-symbols-outlined menu-icon',

        children: [
            {
                title: 'System',
                href: '/admin/settings/system',
            },

            {
                title: 'SMTP Settings',
                href: '/admin/settings/smtp',
            },
            {
                title: 'Stripe',
                href: '/admin/settings/stripe',
            },

            // {
            //     title: 'Preferences',
            //     href: '/settings/preferences',
            // },

            // {
            //     title: 'Preferences',
            //     href: '/settings/preferences',
            // },

            // {
            //     title: 'Notifications',
            //     href: '/settings/notifications',
            // },
        ],
    },
];

export default function MainSidebar() {
    const page = usePage();

    const [openMenu, setOpenMenu] = useState<string | null>(
        null
    );

    const toggleSidebar = () => {
        const current = document.body.getAttribute('sidebar-data-theme');

        document.body.setAttribute(
            'sidebar-data-theme',
            current === 'sidebar-hide' ? 'sidebar-show' : 'sidebar-hide',
        );
    };

    return (
        <div className="sidebar-area" id="sidebar-area">
            <div className="logo position-relative d-flex align-items-center justify-content-between">
                <Link
                    className="d-block text-decoration-none position-relative"
                    href={home()}
                >
                    <img
                        alt="logo-icon"
                        src="/backend/assets/images/seller1.png"
                    />

                    <span className="logo-text text-secondary fw-semibold">
                        NAME
                    </span>
                </Link>

                {/* sidebar collaps button  */}
                <button
                    aria-label="Expand sidebar"
                    className="sidebar-burger-menu-close bg-transparent py-3 border-0 opacity-0 z-n1 position-absolute top-50 end-0 translate-middle-y"
                    id="sidebar-burger-menu-close"
                    onClick={toggleSidebar}
                    type="button"
                >
                    <span className="border-1 d-block for-dark-burger" style={{
                        borderBottom: "1px solid #475569", height: "1px", width: "25px", transform: "rotate(45deg)"
                    }}>
                    </span>
                    <span className="border-1 d-block for-dark-burger" style={{
                        borderBottom: "1px solid #475569", height: "1px", width: "25px", transform: "rotate(-45deg)"
                    }}>
                    </span>
                </button>
                <button
                    aria-label="Collapse sidebar"
                    className="sidebar-burger-menu bg-transparent p-0 border-0"
                    id="sidebar-burger-menu"
                    onClick={toggleSidebar}
                    type="button"
                >
                    <span className="border-1 d-block for-dark-burger" style={{ borderBottom: "1px solid #475569", height: "1px", width: "25px" }}>
                    </span>
                    <span className="border-1 d-block for-dark-burger" style={{ borderBottom: "1px solid #475569", height: "1px", width: "25px" }}>
                    </span>
                    <span className="border-1 d-block for-dark-burger" style={{ borderBottom: "1px solid #475569", height: "1px", width: "25px" }}>
                    </span>
                </button>
            </div>

            <aside
                className="layout-menu menu-vertical menu "
                data-simplebar=""
                id="layout-menu"
            >
                <ul className="menu-inner">
                    {items.map((item, index) => {
                        const hasChildren =
                            item.children &&
                            item.children.length > 0;

                        const isActive =
                            item.href !== '#' &&
                            page.url.startsWith(
                                item.href as string
                            );

                        const isChildActive =
                            item.children?.some((child) =>
                                page.url.startsWith(
                                    child.href as string
                                )
                            );

                        const isOpen =
                            openMenu === item.title ||
                            isChildActive;

                        return (
                            <li
                                key={index}
                                className={`menu-item ${isActive || isChildActive
                                    ? 'open'
                                    : ''
                                    }`}
                            >
                                {hasChildren ? (
                                    <>
                                        <a
                                            className={`menu-link menu-toggle ${isOpen ? 'active' : ''
                                                }`}
                                            href="javascript:void(0);"
                                            onClick={() =>
                                                setOpenMenu(
                                                    isOpen ? null : item.title
                                                )
                                            }
                                        >
                                            <span className={item.icon}>
                                                {item.icon_name}
                                            </span>

                                            <span className="title">
                                                {item.title}
                                            </span>
                                        </a>

                                        <ul
                                            className="menu-sub"
                                            style={{
                                                display: isOpen ? 'block' : 'none',
                                            }}
                                        >
                                            {item.children?.map(
                                                (child, childIndex) => {
                                                    const childActive =
                                                        page.url.startsWith(
                                                            child.href as string
                                                        );

                                                    return (
                                                        <li
                                                            className={`menu-item mb-1 ${childActive
                                                                ? 'active'
                                                                : ''
                                                                }`}
                                                            key={childIndex}
                                                        >
                                                            <Link
                                                                className={`menu-link ${childActive
                                                                    ? 'active'
                                                                    : ''
                                                                    }`}
                                                                href={child.href}
                                                            >
                                                                {child.title}
                                                            </Link>
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    </>
                                ) : (
                                    <Link
                                        className={`menu-link ${isActive
                                            ? 'active'
                                            : ''
                                            }`}
                                        href={item.href}
                                    >
                                        <span
                                            className={item.icon}
                                        >
                                            {item.icon_name}
                                        </span>

                                        <span className="title">
                                            {item.title}
                                        </span>
                                    </Link>
                                )}
                            </li>
                        );
                    })}

                    <li className="menu-item">
                        <Link
                            className="menu-link"
                            href={logout()}
                            method="post"
                            as="button"
                        >
                            <span className="material-symbols-outlined menu-icon">
                                logout
                            </span>

                            <span className="title">
                                Logout
                            </span>
                        </Link>
                    </li>
                </ul>
            </aside>
        </div>
    );
}
