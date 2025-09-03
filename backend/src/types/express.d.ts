import "express-openid-connect";

declare module "express-openid-connect" {
  interface RequestContext {
    user?: {
      sub: string;
      name?: string;
      email?: string;
      [key: string]: any;
    };
  }
}