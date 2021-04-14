export type PhotoTypes = {
    small: string | null,
    large: string | null,
}

export type ContactsTypes = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}

export type ProfileTypes = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsTypes,
    photos: PhotoTypes,
}

export type PostTypes = {
    message: string,
    id: number,
    likesCount: number,
}

export type UserTypes = {
    name: string,
    id: number,
    status: string,
    followed: boolean,
    photos: PhotoTypes,
}