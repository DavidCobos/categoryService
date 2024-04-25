import { IOClients } from '@vtex/api'

import Status from './status'
import CategoryClient from './category'
import CategoryERPClient from './erpPrivarsa'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }
  public get category() {
    return this.getOrSet('category', CategoryClient)
  }
  public get categoryerp() {
    return this.getOrSet('categoryerp', CategoryERPClient)
  }
}
