import { DeveloperItem } from './DeveloperItem';

export class DeveloperResult {

  listDeveloperArray: DeveloperItem[] = [];

  constructor(listDev: DeveloperItem[] = []) {
    this.listDeveloperArray = listDev;
  }
}
