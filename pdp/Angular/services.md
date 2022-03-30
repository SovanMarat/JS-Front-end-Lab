22) Для каких целей используется сервисы в ангуляр? Способы подключения сервиса в приложение. Как сделать сервис синглтоном, а как сделать чтобы у каждого компонента был свой собственный инстанс сервиса?
# Сервисы используются для отделения логики от View. Можно в декораторе Injectable указать ({providedIn: 'root'}), или указываем пустые скобки и тогда уже указываем в декораторе модуля (@NgModule - providers: [TestService]), так же можем указать в декораторах @Component и @Directive -  providers: [TestService] - в этих случаях будет создаваться отдельный экземпляр сервиса.
# ModuleInjector vs ElementInjector