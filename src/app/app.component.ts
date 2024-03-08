import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServiciosComponent,NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  MensajeQuienesSomos = 'En Servicios Especializados en Seguridad Privada S.DE R.L, nos enorgullece ser una empresa hondureña comprometida con la protección de nuestros clientes y sus bienes más preciados. Con una sólida experiencia en el sector, nos destacamos por ofrecer soluciones de seguridad integrales y personalizadas que se adaptan a las necesidades específicas de cada cliente';
}
