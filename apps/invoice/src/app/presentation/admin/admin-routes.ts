import { HomePageComponent } from "./pages/home/dashboard-home.page";
import { ListInvoicePageComponent } from "./pages/list-invoice/list-invoice.page";

export const adminRoutes = [
    {
        path: 'home',
        component: HomePageComponent,
        data: { icon: 'bar_chart', text: 'Inicio' }
    },
    {
        path: 'list-invoice',
        component: ListInvoicePageComponent,
        data: { icon: 'bar_chart', text: 'Facturas' }
    },
];