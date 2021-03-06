(function(module) {
  mifosX.controllers = _.extend(module, {
    UserSettingController: function(scope, translate,localStorageService) {
        if(localStorageService.get('Language')){
            var temp=localStorageService.get('Language');
            for(var i in mifosX.models.Langs){
                if(mifosX.models.Langs[i].code == temp.code){
                    scope.optlang = mifosX.models.Langs[i];
                }
            }
        }else{
            scope.optlang = scope.langs[0];
        }
        translate.uses(scope.optlang.code);

      scope.langs = mifosX.models.Langs;
      scope.changeLang = function (lang) {
          translate.uses(lang.code);
          localStorageService.add('Language',scope.optlang);
      };

    }
  });

  mifosX.ng.application.controller('UserSettingController', ['$scope', '$translate','localStorageService', mifosX.controllers.UserSettingController]).run(function($log) {
    $log.info("UserSettingController initialized");
  });
}(mifosX.controllers || {}));