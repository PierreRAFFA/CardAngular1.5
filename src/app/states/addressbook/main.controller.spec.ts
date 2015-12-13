import { MainController } from './main.controller';

describe('controllers', () => {
  let mainController: MainController;

  beforeEach(angular.mock.module('card'));

  beforeEach(inject(($controller: angular.IControllerService) => {

    mainController = $controller('MainController');
  }));

  it('should exist' , function() {
    expect(mainController).toBeDefined();
  });

});

