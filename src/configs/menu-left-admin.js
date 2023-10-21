const menuLeftItem = [
    {
        title: "Dashboards",
        icon: "home",
        collapse: true,
        href: "/admin"
    },
    {
        title: "Static Pages",
        icon: "edit",
        collapse: true,
        href: "/admin/contents/pages"
    },
    {
        title: "Manage Content",
        icon: "file-text",
        collapse: true,
        children: [
            {
                title: "Categories",
                href: "/admin/categories/categories",
            },
            {
                title: "Posts",
                href: "/admin/contents/posts",
            },
        ],
    },
    {
        title: "Product Management",
        icon: "shopping-cart",
        collapse: true,
        children: [
            {
                title: "Types",
                href: "/admin/categories/types",
            },
            {
                title: "Tags",
                href: "/admin/categories/tags",
            },
            {
                title: "Attributes",
                href: "/admin/categories/attributes",
            },
            {
                title: "Allergen Notice",
                href: "/admin/categories/allergen",
            },
            {
                title: "Product",
                href: "/admin/contents/products",
            },
        ],
    },
    {
        title: "Customers Management",
        icon: "user",
        collapse: true,
        href: "/admin/customer"
    },
    {
        title: "Orders Management",
        icon: "truck",
        collapse: true,
        href: "/admin/orders"
    },
    {
        title: "Contact Us",
        icon: "phone-incoming",
        collapse: true,
        href: "/admin/forms/contact-us"
    },
    {
        title: "Email Manage",
        icon: "mail",
        children: [
            {
                title: "Email Log",
                href: "/admin/email-manage/email-log",
            },
            {
                title: "Email Template",
                href: "/admin/email-manage/email-template",
            },
            {
                title: "Email Type",
                href: "/admin/email-manage/email-type",
            },
        ],
    },
    {
        title: "Notification",
        icon: "bell",
        collapse: true,
        children: [
            {
                title: "Notify List",
                href: "/admin/notification",
            },
        ],
    },
    {
        title: "Users",
        icon: "user",
        collapse: true,
        children: [
            {
                title: "Users List",
                href: "/admin/users/user-list",
            },
            {
                title: "New User",
                href: "/admin/users/new-user",
            },
            {
                title: "Roles",
                href: "/admin/users/roles",
            },
        ],
    },
    {
        title: "Log",
        icon: "slack",
        collapse: true,
        children: [
            {
                title: "Errors",
                href: "/admin/log/errors",
            },
            {
                title: "log",
                href: "/admin/log",
            },
        ],
    },
    {
        title: "Media",
        icon: "image",
        collapse: true,
        children: [
            {
                title: "Libary",
                href: "/admin/media/libary",
            },
            {
                title: "Slideshow",
                href: "/admin/media/slides-show",
            },
        ],
    },
    {
        title: "Menu Management",
        icon: "menu",
        collapse: true,
        href: "/admin/theme/menus"
    },
    {
        title: "Theme",
        icon: "package",
        collapse: true,
        children: [
            {
                title: "Blocks",
                href: "/admin/theme/blocks",
            },
            {
                title: "Theme Options",
                href: "/admin/theme/theme-options",
            },
        ],
    },
    {
        title: "System Settings",
        icon: "settings",
        collapse: true,
        children: [
            {
                title: "Default",
                href: "/admin/system-settings/default",
            },
            {
                title: "Users",
                href: "/admin/system-settings/users",
            },
            {
                title: "Method Upload",
                href: "/admin/system-settings/method-upload",
            },
            {
                title: "Media",
                href: "/admin/system-settings/media",
            },
            {
                title: "Slideshow",
                href: "/admin/system-settings/slides-show",
            },
            {
                title: "Free",
                href: "/admin/system-settings/free",
            },
        ],
    },

];

export default menuLeftItem;