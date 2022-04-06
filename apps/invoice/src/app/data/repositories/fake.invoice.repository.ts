import { Injectable } from "@angular/core";
import { InvoiceEntity } from "../../core";
import { InvoiceRepository } from "../../core/repositories/invoice.repository";

@Injectable()
export class FakeInvoiceRepository implements InvoiceRepository {

  public getInvoices(): Promise<InvoiceEntity[]> {
    return Promise.resolve([
        {
          id: "SISTE00001",
          createdDate: "2020-01-01",
          trasmiterPerson: {
            name: "Herman",
            nit: "123456789-0"
          },
          buyerPerson: {
            name: "Manuela",
            nit: "987654321-0"
          },
          priceIVA: 0,
          IVA: 0,
          items: [
            {
              id: "00001",
              description: "Producto 1",
              quantity: 6,
              uniquePrice: 100,
              totalPrice: 600,
            },
            {
              id: "00003",
              description: "Producto 3",
              quantity: 1,
              uniquePrice: 300,
              totalPrice: 300,
            },
          ]
        },
        {
          id: "SISTE00003",
          createdDate: "2020-01-01",
          trasmiterPerson: {
            name: "Herman",
            nit: "123456789-0"
          },
          buyerPerson: {
            name: "Estefania",
            nit: "987654321-0"
          },
          priceIVA: 12000,
          IVA: 12,
          items: [
            {
              id: "00001",
              description: "Producto 1",
              quantity: 6,
              uniquePrice: 100,
              totalPrice: 600,
            },
            {
              id: "00002",
              description: "Producto 2",
              quantity: 2,
              uniquePrice: 200,
              totalPrice: 400,
            },
            {
              id: "00003",
              description: "Producto 3",
              quantity: 1,
              uniquePrice: 300,
              totalPrice: 300,
            },
          ]
        },
    ]);
  }

}