import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';

 const WHITELIST_PORTS = ['80', '443'];
@Injectable()
export class LinkService {
  private _location: any;
  constructor(
    @Inject(PLATFORM_ID) public _platformId: string,
    @Optional() @Inject(REQUEST) public _request: Request
  ) {
    this._getLocation(_platformId);
  }

   public apiBase() {
    let { port } = this._location;
    let base = this._baseUrl();
    if (WHITELIST_PORTS.indexOf(port) === -1 && port !== '') {
      base += `:${port}`;
    }
    return `${base}/api`;
  }

   private _baseUrl() {
    let { protocol, hostname } = this._location;
    return `${protocol.split(':')[0].toLowerCase()}://${hostname.toLowerCase()}`;
  }

   private _getLocation(platformId: string) {
    if (isPlatformBrowser(platformId)) {
      this._location = document.location;
    } else {
      let hostHeader = this._request.get('Host');
      this._location = {
        hostname: this._request.hostname,
        port: hostHeader.indexOf(':') !== -1 ? hostHeader.split(':')[1] : '',
        protocol: this._request.protocol
      };
    }
  }
}
