import { PoMenuItem } from '@po-ui/ng-components';

export const MENU_ITEMS: PoMenuItem[] = [

    {
        label: 'Dashboard',
        link: "dashboard",
        icon: "po-icon-grid",
    },
    {
        label: 'Layout', 
        icon: "po-icon-layers",
        subItems: [
            { label: 'Accordion', link: "layout/accordion" },
            { label: 'List', link: "layout/list" },
            { label: 'Stepper', link: "layout/stepper" },
            { label: 'Tabs', link: "layout/tabs" }
        ]
    },
    {
        label: 'Forms', 
        icon: "po-icon-edit",
        subItems: [
            { label: 'Buttons', link: "forms/buttons" },
            { label: 'Datepicker', link: "forms/datepicker" },
        ]
    },
    {
        label: 'UI Features',
        icon: "po-icon-qr-code",
        subItems: [
            { label: 'Grid', link: "ui-features/grid" },
            { label: 'Icons', link: "ui-features/icons" },
            { label: 'Typography', link: "ui-features/typography" }
        ]
    },
    {
        label: 'Modal & Overlays',
        icon: "po-icon-sms",
        subItems: [
            { label: 'Dialog', link: "modal-overlays/dialog" },
            { label: 'Window', link: "modal-overlays/window" },
            { label: 'Popover', link: "modal-overlays/popover" },
            { label: 'Toast', link: "modal-overlays/toasts" },
            { label: 'Tooltip', link: "modal-overlays/tooltip",  }
        ]
    },
    {
        label: 'Miscellaneous',
        icon: "po-icon-more",
        subItems: [
            { label: '404', link: "ui-miscellaneous/404" }
        ]
    },
    {
        label: "Auth",
        icon: "po-icon-lock",
        subItems: [
            { label: 'Login', link: 'auth/login' },
            { label: 'Change Password', link: 'auth/change-password' },
            { label: 'Blocked User', link: 'auth/blocked-user' }
        ]
    }
]