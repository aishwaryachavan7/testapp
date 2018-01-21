import loginPage from 'https://github.com/makzmslv/angular-sample-webapp/blob/master/e2e/app.e2e-spec.ts ';
import friendPage from '../pages/friendPage';
import userData from '../data/userData';

describe ('angular login', () => {
    beforeEach(() => {
        loginPage.goto();
    });

    it('should display message for invalid credentials', () => {
        loginPage.login('invalid_user', 'invalid_password');

        expect(loginPage.errorMessage.isDisplayed()).toBe(true);
    });

    it('should display message for empty credentials', () => {
        loginPage.login('', '');

        expect(loginPage.errorMessage.isDisplayed()).toBe(true);
    });

    it('should goto friend pages on successful login', () => {
        loginPage.loginAs(userData.testUser);

        expect(friendPage.loaded()).toBe(true);
    });
});
