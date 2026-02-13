import LoginPage from "../../fixtures/LoginPage"
import HeroPage from "../../fixtures/HeroPage"

const loginPage = new LoginPage()
const heroPage = new HeroPage()


  describe('Login Tests', () => {
        it('Loging Success',() => {
            loginPage.accessSite()
            loginPage.loginWithTestUser()
            loginPage.logoutWithTestUser()
        })
        it('Loging Fail',() => {
            loginPage.accessSite()
            loginPage.wrongLoginTest()
        })
  } )

  describe('Contagem de herois', () => {
        it('Contando os herois', () =>{
            loginPage.accessSite()
            heroPage.countHeroes()
        })
    })

    describe('Criar Um  novo Heroi', () =>{
        it('Criando um novo Heroi, Green Goblin, do zero', () =>{
            loginPage.accessSite()
            loginPage.loginWithAdmin()
            heroPage.creatingNewHero()
            loginPage.logoutWithAdmin()
        })

    })

    describe('Teste de controle', () => {
        it('Testando o controle e permissão dos comandos', () => {

            loginPage.accessSite()
            heroPage.unloggedTest()
            loginPage.loginWithTestUserWithNewHero()
            //curtir um heroi, pensar em contratar 1 heroi pra depois contratar outro.
            heroPage.likingHero()
            heroPage.notHireHero()
            heroPage.hiringHero()
            loginPage.logoutWithTestUser()
            //entrar como adm
            loginPage.loginWithAdminWithNewHero()
            //mudar o nome do heroi para Invisipaul
            heroPage.changeHeroName()
            //deletar o heroi Green Goblin.
            heroPage.deleteLastHero() 
            loginPage.logoutWithAdmin()
        })  
    })