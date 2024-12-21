export enum MemberType {
    Member,
    ManagementStaff,
    MinorStaff,
    Admin
}

export interface MemberResponse {
    id: number,
    name: string,
    memberType: MemberType
}