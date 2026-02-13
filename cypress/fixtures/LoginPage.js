class LoginPage{
    selectorsList(){
        const selectors = {
            button: "button",
            email: "[name='email']",
            password: "[name='password']",
            wrongLoginTest: ".text-red-500",
        }
        return selectors
    }
    accessSite(){
        cy.visit('http://localhost:3000/')
    }
    loginWithTestUser(){
        cy.get(this.selectorsList().button).eq(0).click()
        cy.get(this.selectorsList().email).type("test@test.com")
        cy.get(this.selectorsList().password).type("test123")
        cy.get(this.selectorsList().button).eq(15).click()
    }
    loginWithAdmin(){
        cy.get(this.selectorsList().button).eq(0).click()
        cy.get(this.selectorsList().email).type("admin@test.com")
        cy.get(this.selectorsList().password).type("test123")
        cy.get(this.selectorsList().button).eq(15).click()
    }
    wrongLoginTest(){
        cy.get(this.selectorsList().button).eq(0).click()
        cy.get(this.selectorsList().email).type("wrong")
        cy.get(this.selectorsList().password).type("test123")
        cy.get(this.selectorsList().button).eq(15).click()
        cy.get(this.selectorsList().wrongLoginTest).contains('Email is not valid')
    }
    logoutWithTestUser(){
        cy.get(this.selectorsList().button).eq(0).click()
    }
    logoutWithAdmin(){
        cy.get(this.selectorsList().button).eq(1).click()
    }

    loginWithTestUserWithNewHero(){
        cy.get(this.selectorsList().button).eq(0).click()
        cy.get(this.selectorsList().email).type("test@test.com")
        cy.get(this.selectorsList().password).type("test123")
        cy.get(this.selectorsList().button).eq(17).click()
    }
    loginWithAdminWithNewHero(){
        cy.get(this.selectorsList().button).eq(0).click()
        cy.get(this.selectorsList().email).type("admin@test.com")
        cy.get(this.selectorsList().password).type("test123")
        cy.get(this.selectorsList().button).eq(17).click()
    }
}

export default LoginPage