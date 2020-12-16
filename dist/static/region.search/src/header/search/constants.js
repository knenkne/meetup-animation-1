import { getConfigValue } from '@sbol/lib.app'

// Глобальная конфигурация
export const IS_ERIB = getConfigValue('isErib')

// Формирование адреса http(s) запросов
export const URL_DDP = '/ddp/api'

export const URL_SEARCH_EXAMPLES = '/search/examples'
export const URL_PAGES = '/api/suggestions'
export const URL_OPERATIONS_HISTORY = '/private/payments/list.do'
export const URL_PROVIDERS_HISTORY = '/private/provider/search.do'

// http(s) запросы
export const USER_INPUT_DEBOUNCE_TIMEOUT = 400
export const USER_HISTORY_LOOKUP_PERIOD_IN_YEARS = 5
export const REQUEST_OPERATION_PAGE_SIZE = 50
export const PREFETCH_OPERATION_PAGE_SIZE = 250

// http(s) запросы https://sbtatlas.sigma.sbrf.ru/wiki/pages/viewpage.action?pageId=1961494112
export const HASH_PHONE_NUMBER = 1
export const SERVICE_PROVIDER = 2
export const FUNCTIONS = 3

// Лимиты по отображению функций, историй, продуктов и операций
export const ITEMS_MAX_COUNT = 4

// pages
export const PAGES_CHAT_UID = 20100
export const PAGES_SPECIAL_CASE = {
    [PAGES_CHAT_UID]: PAGES_CHAT_UID
}

// Количество знаков после запятой
export const CURRENCY_DECIMAL_PRECISION = 2
export const CURRENCY_FORMAT = {
    decimalSeparator: '.',
    groupSeparator: ' ',
    groupSize: 3
}

// Максимально возможное количество символов в верхней строке заголовка организаций (экран > 1056px)
export const PROVIDERS_TOP_LINE_CHAR_LG = 30

// Максимально возможное количество символов в верхней строке заголовка организаций (экран < 1056px)
export const PROVIDERS_TOP_LINE_CHAR_MD = 15

export const ENTER_KEY_CODE = 13

// Лимиты на отображение данных в левом и правом столбцах поисковой выдачи, когда строка поиска пустая
export const DISPLAY_SUGGESTS_COUNT = 7
export const SEARCH_HISTORY_SUGGESTS_COUNT = 7
// Ключи, определяющие принадлежность строк в правом и левом столбцах поисковой выдачи, когда поисковая строка пустая
export const EXAMPLE_KEY = 'EXAMPLE_KEY'
export const DDP_EXAMPLE_KEY = 'DDP_EXAMPLE_KEY'
export const HISTORY_KEY = 'HISTORY_KEY'

// Статусы
export const SUCCESS = 'SUCCESS'
export const LOADING = 'LOADING'

// Соответствие английских символов русским и наоборот
export const enCorrespondsRu = {
    q: 'й', Q: 'Й',
    w: 'ц', W: 'Ц',
    e: 'у', E: 'У',
    r: 'к', R: 'К',
    t: 'е', T: 'Е',
    y: 'н', Y: 'Н',
    u: 'г', U: 'Г',
    i: 'ш', I: 'Ш',
    o: 'щ', O: 'Щ',
    p: 'з', P: 'З',
    '[': 'х', '{': 'Х',
    ']': 'ъ', '}': 'Ъ',
    a: 'ф', A: 'Ф',
    s: 'ы', S: 'Ы',
    d: 'в', D: 'В',
    f: 'а', F: 'А',
    g: 'п', G: 'П',
    h: 'р', H: 'Р',
    j: 'о', J: 'О',
    k: 'л', K: 'Л',
    l: 'д', L: 'Д',
    ';': 'ж', ':': 'Ж',
    '\'': 'э', '"': 'Э',
    '\\': 'ё', '|': 'Ё',
    z: 'я', Z: 'Я',
    x: 'ч', X: 'Ч',
    c: 'с', C: 'С',
    v: 'м', V: 'М',
    b: 'и', B: 'И',
    n: 'т', N: 'Т',
    m: 'ь', M: 'Ь',
    ',': 'б', '<': 'Б',
    '.': 'ю', '>': 'Ю'
}

export const ruCorrespondsEn = {
    й: 'q', Й: 'Q',
    ц: 'w', Ц: 'W',
    у: 'e', У: 'E',
    к: 'r', К: 'R',
    е: 't', Е: 'T',
    н: 'y', Н: 'Y',
    г: 'u', Г: 'U',
    ш: 'i', Ш: 'I',
    щ: 'o', Щ: 'O',
    з: 'p', З: 'p',
    х: '[', Х: '{',
    ъ: ']', Ъ: '}',
    ф: 'a', Ф: 'A',
    ы: 's', Ы: 'S',
    в: 'd', В: 'D',
    а: 'f', А: 'F',
    п: 'g', П: 'G',
    р: 'h', Р: 'H',
    о: 'j', О: 'J',
    л: 'k', Л: 'K',
    д: 'l', Д: 'L',
    ж: ';', Ж: ':',
    э: '\'', Э: '"',
    ё: { standard: 't', mac: '\\' }, Ё: { standard: 'T', mac: '|' },
    я: 'z', Я: 'Z',
    ч: 'x', Ч: 'X',
    с: 'c', С: 'C',
    м: 'v', М: 'V',
    и: 'b', И: 'B',
    т: 'n', Т: 'N',
    ь: 'm', Ь: 'M',
    б: ',', Б: '<',
    ю: '.', Ю: '>'
}

// Поиск по алгоритму Левенштейна и N-грамм
export const N_GRAM_LENGTH = 3

// Вертикальный сдвиг одной итерации для функции скроллинга
export const scrollOffset = 5

export const REQUEST_HEADERS = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*'
    }
}
