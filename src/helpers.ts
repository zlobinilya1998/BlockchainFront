export const DefaultResult = async (data: any) => {
    return await data.json();
}
export function CopyFromElement(id: any) {
    const input = (document.getElementById(id) as any)
    input.select();
    input.setSelectionRange(0, 99999);
    try {
        document.execCommand('copy');
    } catch (err) {
        console.log('Can`t copy, boss');
    }
    (window as any).getSelection().removeAllRanges();
}
