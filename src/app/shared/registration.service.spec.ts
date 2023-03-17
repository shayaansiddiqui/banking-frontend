import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { RegistrationService } from "./registration.service"


describe('Registration Service',() => {
    let registrationService : RegistrationService;
    beforeEach(() => 
    {
        let httpClientSpyObj = jasmine.createSpyObj('HttpClient',['post']);
    TestBed.configureTestingModule({
        providers : [
            RegistrationService,
            {
                provide : HttpClient,
                useValue : httpClientSpyObj 
            }
        ]

    });
        registrationService = TestBed.inject(RegistrationService)
    });

});

    describe('registerUser()',() =>
    {
        it('should return expected posts when getposts is called',() =>
        {

        })
   
})