import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface Property {
    id: string;
    propertyType: string;
    name: string;
    description: string;
    image: ExternalBlob;
    price: bigint;
    location: string;
}
export interface Enquiry {
    id: string;
    name: string;
    requirement: string;
    timestamp: bigint;
    phoneNumber: string;
}
export interface backendInterface {
    addProperty(id: string, name: string, location: string, image: ExternalBlob, propertyType: string, price: bigint, description: string): Promise<void>;
    getAllEnquiries(): Promise<Array<Enquiry>>;
    getAllProperties(): Promise<Array<Property>>;
    getEnquiryCount(): Promise<bigint>;
    getProperty(id: string): Promise<Property>;
    removeProperty(id: string): Promise<void>;
    searchProperties(searchTerm: string): Promise<Array<Property>>;
    submitEnquiry(id: string, name: string, phoneNumber: string, requirement: string, timestamp: bigint): Promise<void>;
    updateProperty(id: string, name: string, location: string, image: ExternalBlob, propertyType: string, price: bigint, description: string): Promise<void>;
}
