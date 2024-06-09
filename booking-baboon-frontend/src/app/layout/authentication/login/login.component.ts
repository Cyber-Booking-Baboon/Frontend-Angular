import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../infrastructure/auth/auth.service";
import {SocketService} from "../../../shared/notifications/socket.service";
import {KeycloakService} from "../../../infrastructure/keycloak/keycloak.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router, private socketService: SocketService, private keycloakService: KeycloakService) {}

  // loginForm: FormGroup = new FormGroup({
  //   username: new FormControl('',[Validators.required]),
  //   password: new FormControl('',[Validators.required])
  // })
  // hide: boolean = true;
  // loginFailed: boolean = false;
  //
  // login(): void {
  //
  //   if(this.loginForm.valid) {
  //     const login: Login = {
  //       email: this.loginForm.value.username || "",
  //       password: this.loginForm.value.password || ""
  //     }
  //     this.authService.login(login).subscribe({
  //       next: (response: AuthResponse) => {
  //         localStorage.setItem('user', response.jwt);
  //         this.authService.setUser()
  //         this.initializeWebSocket();
  //         if(this.authService.getRole() === "SYSADMIN"){
  //           this.router.navigate(['certificates'])
  //         } else {
  //           this.router.navigate(['accommodations'])
  //         }
  //
  //       },error:() => {
  //         this.loginFailed = true;
  //       }
  //     })
  //   }
  // }
  //
  // initializeWebSocket(){
  //   this.socketService.initializeWebSocketConnection();
  //   // this.socketService.openSocket()
  // }

  async ngOnInit() {
      await this.keycloakService.init();
      await this.keycloakService.login();
  }

}
