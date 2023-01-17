export default function usePrice(price: any) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IQD',
    });

    return formatter.format(price)
}
