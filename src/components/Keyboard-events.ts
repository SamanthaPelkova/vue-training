export interface KeyboardEvents {
    firstName: string
    lastName: string
    phoneNumber: number
    email: string
}

export const defaultInputInfo = () :KeyboardEvents => {
    return {
        firstName: 'jméno',
        lastName: 'příjmení',
        phoneNumber: 123-456-789,
        email: 'email'
    }
}