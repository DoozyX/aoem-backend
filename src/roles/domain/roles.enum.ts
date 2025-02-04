export enum RoleEnum {
  user = 'user',
  admin = 'admin', // fill remaining data
  approver = 'approver', // only approve/reject
  director = 'director', // sign application
  superAdmin = 'superAdmin', // employee management
  archiver = 'archiver', // assign application to admin
}

export const allAdminRoles = [
  RoleEnum.admin,
  RoleEnum.approver,
  RoleEnum.director,
  RoleEnum.superAdmin,
  RoleEnum.archiver,
];
