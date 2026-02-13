class HeroPage{
    selectorsList(){
       const selectors = {
            button: "button",
            MenuNames: "[data-cy='name']",
            createNewHero: "[href='/heroes/new']",
            newHeroName: "[name='name']",
            NewHeroPrice: "[name='price']",
            newHeroFans: "[name='fans']",
            newHeroSaves: "[name='saves']",
            powers: "[name='powers']",
            mindPower: "[value='6']",
            LikesHero: "[data-cy='like']",
            hireHero: "[data-cy='money']",
            editHero: "[data-cy='pencil']",
            deleteHero: "button[data-cy='trash']",
        }
        return selectors
    }
    countHeroes(){
        cy.get(this.selectorsList().MenuNames).eq(0).contains('The Smoker')
        cy.get(this.selectorsList().MenuNames).eq(1).contains('Warp Speed')
        cy.get(this.selectorsList().MenuNames).eq(2).contains('Cyonic')
        cy.get(this.selectorsList().MenuNames).eq(3).contains('The Librarian')
        cy.get(this.selectorsList().MenuNames).eq(4).contains('Mr Angular')
        cy.get(this.selectorsList().MenuNames).eq(5).contains(/Collect Call Paul|InvisiPaul/)
        cy.get(this.selectorsList().MenuNames).eq(6).contains('Fly Girl')
    }
    creatingNewHero(){
        cy.get(this.selectorsList().createNewHero).click()
        cy.get(this.selectorsList().newHeroName).type("Green Goblin")
        cy.get(this.selectorsList().NewHeroPrice).type("50")
        cy.get(this.selectorsList().newHeroFans).type("33")
        cy.get(this.selectorsList().newHeroSaves).type("0")
        cy.get(this.selectorsList().powers).select("Mind Control")
        cy.get(this.selectorsList().button).eq(2).click()
        //to logout
        //cy.get(selectorsList.button).eq(1).click()
    }
    unloggedTest(){
        cy.get(this.selectorsList().LikesHero).eq(0).click()
        cy.get(this.selectorsList().button).eq(17).click()
        cy.get(this.selectorsList().hireHero).eq(0).click()
        cy.get(this.selectorsList().button).eq(17).click()
    }
    likingHero(){
        cy.get(this.selectorsList().LikesHero).eq(0).click()
    }
    hiringHero(){
        cy.get(this.selectorsList().hireHero).eq(1).click()
        cy.get(this.selectorsList().button).eq(17).click()
    }
    notHireHero(){
        cy.get(this.selectorsList().hireHero).eq(0).click()
        cy.get(this.selectorsList().button).eq(18).click()
    }
    changeHeroName(){
        cy.get(this.selectorsList().editHero).eq(5).click()
        cy.get(this.selectorsList().newHeroName).clear().type("InvisiPaul")
        cy.get(this.selectorsList().button).eq(3).click()
    }
    deleteLastHero(){
        cy.get(this.selectorsList().deleteHero).eq(7).click()
        cy.get(this.selectorsList().button).eq(34).click()
    }



}
export default HeroPage