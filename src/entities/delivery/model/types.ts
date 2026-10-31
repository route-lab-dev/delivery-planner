export type Delivery = {
    uuid: string;
    address: string; // г Москва, ул Иванова, д 5
    metro: string; // Крылатская
    phone: string; // +79991234567
    lastName?: string; // Иванов
    firstName?: string; // Иван
    middleName?: string; // Иванович
    slotFrom: string; // '09:00' — часы всегда двумя цифрами, чтобы строки правильно сортировались
    slotTo: string; // '11:00'
    urgency: boolean; // срочная или нет;
    status: "active" | "completed";
    documentId?: string;
};
