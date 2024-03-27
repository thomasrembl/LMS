export { };
 
// Create a type for the roles
export type Roles = "admin" | "teacher";
 
declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles
    };
  }
}