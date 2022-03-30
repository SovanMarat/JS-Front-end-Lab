
# Обобщённый тип (обобщение, дженерик) позволяет резервировать место для типа, который будет заменён на конкретный, переданный пользователем.
const getFullName = <T extends Name>(obj: T): string => {
  return `${obj.firstName} ${obj.lastName}`;
};

# mapping 
type ValidationScheme<T> = {
    [K in keyof T]: {               keyof - проходит по всем ключам
        value: T[K],
        check: boolean,
        rules?: Rules[]
    }
}


# Тип enum или перечисление позволяет определить набор именнованных констант, которые описывают определенные состояния.
enum Season { Winter, Spring, Summer, Autumn };
let current: Season = Season.Summer;


# Partial<T> – указывает, что все свойства некоторого типа T являются необязательными
# Readonly<T> – указывает, что все свойства некоторого типа T доступны только для чтения
# Record<K extends string, T> – конструирует объект, у которого значения свойств имеют некоторый тип T
# Pick<T, K extends keyof T> – выделяет из некоторого типа T некоторый набор свойств K