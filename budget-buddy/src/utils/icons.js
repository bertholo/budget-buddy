import {
    GlobeAmericas,
    CashCoin,
    GraphUpArrow,
    BarChartLineFill,
    CurrencyBitcoin,
    Bank2,
    Youtube,
    Arrow90degRight,
    Book,
    Cart4,
    Activity,
    Calendar2Check,
    Bag,
    Shop
} from 'react-bootstrap-icons';

export const incomeIcon = (category) => {
    switch (category) {
        case 'salary':
            return <CashCoin size={35} />
        case 'freelancing':
            return <GlobeAmericas size={35} />
        case 'investments':
            return <GraphUpArrow size={35} />
        case 'stocks':
            return <BarChartLineFill size={35} />
        case 'bitcoin':
            return <CurrencyBitcoin size={35} />
        case 'bank':
            return <Bank2 size={35} />
        case 'youtube':
            return <Youtube size={35} />
        case 'other':
            return <Arrow90degRight size={35} />
        default:
            return ''
    }
}

export const expenseIcon = (category) => {
    switch (category) {
        case 'education':
            return <Book size={35} />
        case 'groceries':
            return <Cart4 size={35} />
        case 'health':
            return <Activity size={35} />
        case 'subscriptions':
            return <Calendar2Check size={35} />
        case 'takeaways':
            return <Bag size={35} />
        case 'clothing':
            return <Shop size={35} />
        case 'travelling':
            return <GlobeAmericas size={35} />
        case 'other':
            return <Arrow90degRight size={35} />
        default:
            return ''
    }
}