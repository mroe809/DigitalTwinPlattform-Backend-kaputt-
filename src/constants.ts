export const BACKEND_BASE_URL = "http://localhost:8000";

export type ErrorResponse = {
    message: string;
  };
  
  export enum AccountType {
    Manufacturer = "Manufacturer",
    Customer = "Customer",
    Admin = "Admin",
  }