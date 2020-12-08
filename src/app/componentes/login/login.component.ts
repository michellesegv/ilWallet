import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private ClienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router) {
    this.loginForm = this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    return new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSaveForm(): void {
    console.log(this.loginForm.value)

    this.ClienteService.loginCliente(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res)
        if (res.status == 200) {
          localStorage.setItem('dataUser', JSON.stringify(res.result));
          this.router.navigate(['/dashboard']);
        } else {
          alert('Tuvimos un error :( Revisa tus datos')
        }
      },
      err => console.error(err)
    );
  }
}
