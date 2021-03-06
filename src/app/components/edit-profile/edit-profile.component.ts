import { Component, OnInit } from '@angular/core';

import { TransferService } from '../../services/transfer.service';
import { MainComponent } from '../../main.component';
import { Profile } from '../../entities';
import { DatastoreService } from '../../services/datastore.service';

declare var $:any;

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [MainComponent]
})
export class EditProfileComponent implements OnInit {
    profile: any;
    originalProfileName: string;
    action: string;

    constructor(
        private transfer: TransferService,
        private main: MainComponent,
        private datastore: DatastoreService
    ) {}

    ngOnInit() {
        $(document).foundation();
        $('#profileName').focus();
        this.profile = this.transfer.itemForEditing;
        this.originalProfileName = this.profile.name;
        this.action = this.transfer.action;
    }

    saveProfile() {
        this.datastore.save(this.profile.name, JSON.stringify(this.profile), this.originalProfileName);
    }

    viewExistingProfiles() {
        this.main.goTo('');
    }
}
