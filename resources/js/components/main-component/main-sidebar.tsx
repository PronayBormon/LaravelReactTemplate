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
        href: '/dashboard',
        icon_name: 'dashboard',
        icon: 'material-symbols-outlined menu-icon',
    },
    {
        title: 'User List',
        href: '/users',
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
        title: 'Settings',
        href: '#',
        icon_name: 'Settings',
        icon: 'material-symbols-outlined menu-icon',

        children: [
            {
                title: 'System',
                href: '/settings/system',
            },

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
            </div>

            <aside
                className="layout-menu menu-vertical menu active"
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
                                    ? 'open active'
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
                                                            className={`menu-item ${childActive
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