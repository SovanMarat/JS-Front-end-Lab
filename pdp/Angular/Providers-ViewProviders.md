2) Providers vs ViewProviders? Может использовал декораторы параметров Skipself, Optional, Self?
# Providers - предоставляет доступ к сервисам для дочерних компонентов, в т.ч. при исп <ng-content>, ViewProviders - НЕ даст доступ для ContentChild (т.е. для компонента который прокинут внутрь другого компонента и там получается через <ng-content>)

# @SkipSelf() private rootDepositsService: DepositsService  - исключается из поиска локальный инжектор.
# @Optional() - В случае отсутствия необходимого сервиса во всех Angular injector не будет сгенерировано исключение, а в переменную, которая должна была стать экземпляром, просто запишется null.
# Self - искать зависимость только провайдерах своего компонента. Уместно использовать, если внутри компонета    объявляется сервис с именем, которое уже присутствует в проекте.