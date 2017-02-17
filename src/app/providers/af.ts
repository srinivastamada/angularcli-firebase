import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';
@Injectable()
export class AF {
  constructor(public af: AngularFire) {}
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

  loginWithFacebook() {
    return this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    });
  }
  /**
   * Logs out the current user
   */
  logout() {
    localStorage.setItem('userData', '');
    return this.af.auth.logout();
  }
}