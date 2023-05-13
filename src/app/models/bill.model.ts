import { Customer } from "./customer.model";
import { Product } from "./product.model";

export interface Bill {
    id:string
    billingDate:Date
    productItems:[]
    customerID:string
    customer:Customer
}
