import { Component } from '@angular/core';

import {
  companyLinks,
  contacts,
  exploreLinks,
  followUsLinks,
  hostingLinks,
} from './constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  contacts = contacts;
  companyLinks = companyLinks;
  exploreLinks = exploreLinks;
  hostingLinks = hostingLinks;
  followUsLinks = followUsLinks;
}
