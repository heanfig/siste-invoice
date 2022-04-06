import { CreateInvoicePageComponent } from "./pages/create-invoice/create-invoice.page";
import { ListInvoicePageComponent } from "./pages/list-invoice/list-invoice.page";

export const adminRoutes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: ListInvoicePageComponent,
        data: { icon: 'dvr', text: 'Ver Facturas' }
    },
    {
        path: 'create',
        component: CreateInvoicePageComponent,
        data: { icon: 'save', text: 'Crear Factura' }
    }
];