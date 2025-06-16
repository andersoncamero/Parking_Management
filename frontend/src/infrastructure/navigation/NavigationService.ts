import type { NavigateFunction } from "react-router";

export interface NavegationServiceInterface {
  navegateToLogin: () => void;
}

export class NavegationService implements NavegationServiceInterface {
  private navegate: NavigateFunction;

  constructor(navegate: NavigateFunction) {
    this.navegate = navegate;
  }
  navegateToLogin(): void {
    this.navegate("/");
  }
}
